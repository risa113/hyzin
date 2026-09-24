import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Sun, 
  Moon, 
  Layers, 
  RotateCw, 
  Maximize2, 
  Eye, 
  Sparkles, 
  ChevronRight,
  Info,
  CheckCircle2,
  SlidersHorizontal,
  Home,
  UtensilsCrossed,
  Tv,
  BedDouble,
  Compass,
  DoorClosed
} from 'lucide-react';
import { ALL_KERALA_PHOTOS } from '../data/clientAssets';

export default function House3DViewer({ onOpenLightbox, onOpenConsultation }) {
  const mountRef = useRef(null);
  const [renderMode, setRenderMode] = useState('day'); // 'day', 'night', 'blueprint'
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeZone, setActiveZone] = useState('overview');
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [explodedFactor, setExplodedFactor] = useState(0); // 0 (assembled) to 1 (fully exploded)
  const [isFlyingThrough, setIsFlyingThrough] = useState(false);

  // References for animation & render loop
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const houseGroupRef = useRef(null);
  const targetCamPosRef = useRef(new THREE.Vector3(14, 10, 16));
  const targetLookAtRef = useRef(new THREE.Vector3(0, 2, 0));
  const currentLookAtRef = useRef(new THREE.Vector3(0, 2, 0));
  const lightsGroupRef = useRef(null);
  const wireframeMaterialsRef = useRef([]);

  // Architectural Mesh Component References for Exploded View
  const roofMeshRef = useRef(null);
  const ffBodyMeshRef = useRef(null);
  const ffFloorMeshRef = useRef(null);
  const balconyMeshRef = useRef(null);
  const gfBodyMeshRef = useRef(null);
  const wardrobeMeshRef = useRef(null);

  // Hotspots 3D Coordinates & Associated Real Photos
  const hotspotsData = [
    {
      id: 'kitchen',
      name: 'Modular Kitchen Suite',
      icon: UtensilsCrossed,
      pos: new THREE.Vector3(-3.5, 1.8, 2.5),
      camPos: new THREE.Vector3(-6, 3.5, 6),
      lookAt: new THREE.Vector3(-3.5, 1.8, 2.5),
      description: 'Rose Gold & Mint Green acrylic modular cabinets, Dekton quartz counter, soft-close hardware & under-cabinet LED coves.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Kitchen Cabinet').slice(0, 4)
    },
    {
      id: 'paneling',
      name: 'Fluted Paneling & Onyx TV Wall',
      icon: Tv,
      pos: new THREE.Vector3(0, 2.2, 0),
      camPos: new THREE.Vector3(2, 4, 7),
      lookAt: new THREE.Vector3(0, 2.2, 0),
      description: 'Backlit translucent onyx marble media wall, vertical acoustic fluted teak slats, and CNC botanical jali room dividers.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Paneling').slice(0, 4)
    },
    {
      id: 'wardrobe',
      name: 'Master Suite Wall Drop & Loft',
      icon: BedDouble,
      pos: new THREE.Vector3(3.5, 4.5, -2.5),
      camPos: new THREE.Vector3(7, 6, -1),
      lookAt: new THREE.Vector3(3.5, 4.5, -2.5),
      description: 'Full-height floor-to-ceiling mauve acrylic almirah, integrated dressing vanity, warm illuminated niches, and overhead lofts.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Wall Drop' || p.category === 'Loft').slice(0, 4)
    },
    {
      id: 'staircase',
      name: 'SS Glass Balustrade & Under-Stair',
      icon: Compass,
      pos: new THREE.Vector3(-2.8, 2.5, -2.8),
      camPos: new THREE.Vector3(-5, 4.5, -6),
      lookAt: new THREE.Vector3(-2.8, 2.5, -2.8),
      description: 'Grade 304 stainless steel glass balustrade with 12mm toughened glass, step tread LEDs, and under-stair aluminium storage.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Steel Fabrication' || p.category === 'Aluminium Interior').slice(0, 4)
    },
    {
      id: 'entrance',
      name: 'Engineered Steel Security Door',
      icon: DoorClosed,
      pos: new THREE.Vector3(0, 1.5, 6.2),
      camPos: new THREE.Vector3(0, 3, 11),
      lookAt: new THREE.Vector3(0, 1.5, 6.2),
      description: 'Multi-point lock engineered steel security main entrance portal with weather-proof seals and 48-inch brushed SS handle.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Steel Doors' || p.category === 'MS Fabrication').slice(0, 4)
    },
    {
      id: 'ceiling',
      name: 'Cove False Ceiling & Lighting',
      icon: Layers,
      pos: new THREE.Vector3(0, 5.2, 0),
      camPos: new THREE.Vector3(4, 7, 4),
      lookAt: new THREE.Vector3(0, 5, 0),
      description: 'Multi-level gypsum false ceiling with indirect perimeter 2700K warm LED lighting and chevron teak coffered louvers.',
      featuredPhotos: ALL_KERALA_PHOTOS.filter(p => p.category === 'Ceiling').slice(0, 4)
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(renderMode === 'blueprint' ? 0x0a1128 : (renderMode === 'night' ? 0x0e1117 : 0xf4f1eb));
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(14, 10, 16);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Clear previous children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // LIGHTING SYSTEM
    const lightsGroup = new THREE.Group();
    scene.add(lightsGroup);
    lightsGroupRef.current = lightsGroup;

    const setupLighting = (mode) => {
      // Clear lights
      while (lightsGroup.children.length > 0) {
        lightsGroup.remove(lightsGroup.children[0]);
      }

      if (mode === 'blueprint') {
        const ambient = new THREE.AmbientLight(0x00f0ff, 0.6);
        lightsGroup.add(ambient);
        const point = new THREE.PointLight(0x00ffff, 2, 40);
        point.position.set(0, 8, 0);
        lightsGroup.add(point);
      } else if (mode === 'night') {
        const ambient = new THREE.AmbientLight(0x1a2035, 0.8);
        lightsGroup.add(ambient);

        // Warm interior glows (representing our interior work)
        const kitchenWarm = new THREE.PointLight(0xffa040, 2.5, 12);
        kitchenWarm.position.set(-3.5, 2.2, 2.5);
        lightsGroup.add(kitchenWarm);

        const livingWarm = new THREE.PointLight(0xffb854, 3, 14);
        livingWarm.position.set(0, 2.5, 0);
        lightsGroup.add(livingWarm);

        const masterWarm = new THREE.PointLight(0xff9d3b, 2.2, 12);
        masterWarm.position.set(3.5, 4.8, -2.5);
        lightsGroup.add(masterWarm);

        const ceilingCove = new THREE.DirectionalLight(0xffaa44, 0.6);
        ceilingCove.position.set(0, 10, 0);
        lightsGroup.add(ceilingCove);
      } else {
        // Day mode
        const ambient = new THREE.AmbientLight(0xfff8ee, 1.1);
        lightsGroup.add(ambient);

        const sun = new THREE.DirectionalLight(0xfffaed, 1.8);
        sun.position.set(16, 22, 14);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 2048;
        sun.shadow.mapSize.height = 2048;
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 60;
        sun.shadow.camera.left = -15;
        sun.shadow.camera.right = 15;
        sun.shadow.camera.top = 15;
        sun.shadow.camera.bottom = -15;
        lightsGroup.add(sun);

        const fillLight = new THREE.DirectionalLight(0xcce0ff, 0.5);
        fillLight.position.set(-10, 12, -10);
        lightsGroup.add(fillLight);
      }
    };

    setupLighting(renderMode);

    // BUILD 3D ARCHITECTURAL HOUSE MODEL
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);
    houseGroupRef.current = houseGroup;

    wireframeMaterialsRef.current = [];

    // Helper for materials
    const createMat = (colorHex, roughness = 0.4, metalness = 0.1, transparent = false, opacity = 1) => {
      let mat;
      if (renderMode === 'blueprint') {
        mat = new THREE.MeshBasicMaterial({
          color: colorHex === 0xffffff ? 0x00d8ff : colorHex,
          wireframe: true,
          transparent: true,
          opacity: 0.8
        });
        wireframeMaterialsRef.current.push(mat);
      } else {
        mat = new THREE.MeshStandardMaterial({
          color: colorHex,
          roughness,
          metalness,
          transparent,
          opacity
        });
      }
      return mat;
    };

    // 1. Ground Podium & Lush Lawn
    const groundGeo = new THREE.BoxGeometry(22, 0.5, 22);
    const groundMat = createMat(renderMode === 'blueprint' ? 0x0a2540 : 0xd8d0c5, 0.9);
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.25;
    ground.receiveShadow = true;
    houseGroup.add(ground);

    const lawnGeo = new THREE.BoxGeometry(18, 0.2, 18);
    const lawnMat = createMat(renderMode === 'blueprint' ? 0x004466 : 0x5a7052, 0.8);
    const lawn = new THREE.Mesh(lawnGeo, lawnMat);
    lawn.position.y = 0.1;
    lawn.receiveShadow = true;
    houseGroup.add(lawn);

    // Main Villa Base Slab
    const baseSlabGeo = new THREE.BoxGeometry(13, 0.3, 13);
    const baseSlabMat = createMat(0xeae5dc, 0.3);
    const baseSlab = new THREE.Mesh(baseSlabGeo, baseSlabMat);
    baseSlab.position.set(0, 0.35, 0);
    baseSlab.receiveShadow = true;
    baseSlab.castShadow = true;
    houseGroup.add(baseSlab);

    // GROUND FLOOR (Living Hall, Kitchen, Entrance Portal, Stairwell)
    // Exterior Walls
    const gfWallMat = createMat(0xf4efe6, 0.5);

    // Ground floor main body
    const gfBodyGeo = new THREE.BoxGeometry(11.8, 3.2, 11.8);
    const gfBody = new THREE.Mesh(gfBodyGeo, gfWallMat);
    gfBody.position.set(0, 2.1, 0);
    gfBody.castShadow = true;
    gfBody.receiveShadow = true;
    houseGroup.add(gfBody);

    // Glass Facade Windows & Panoramic Openings
    const glassMat = createMat(0x88ccff, 0.1, 0.9, true, renderMode === 'blueprint' ? 0.3 : 0.45);
    const windowGeoFront = new THREE.BoxGeometry(5.5, 2.4, 0.2);
    const windowFront = new THREE.Mesh(windowGeoFront, glassMat);
    windowFront.position.set(2, 2.2, 5.95);
    houseGroup.add(windowFront);

    // Modular Kitchen Zone (Visible interior representation)
    const kitchenCabMat = createMat(0xb26b5d, 0.2, 0.3); // Rose Gold / Warm Amber
    const kitchenCabGeo = new THREE.BoxGeometry(3.5, 1.8, 1.2);
    const kitchenCab = new THREE.Mesh(kitchenCabGeo, kitchenCabMat);
    kitchenCab.position.set(-3.5, 1.4, 3.8);
    houseGroup.add(kitchenCab);

    // Kitchen Island
    const islandGeo = new THREE.BoxGeometry(2.2, 1.1, 1.1);
    const islandMat = createMat(0x222222, 0.2, 0.8);
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.set(-3.5, 1.05, 1.8);
    houseGroup.add(island);

    // Living Hall Fluted Paneling & Media Console
    const panelingMat = createMat(0x8c5e3c, 0.6); // Timber wood
    const panelingGeo = new THREE.BoxGeometry(4.2, 2.8, 0.2);
    const paneling = new THREE.Mesh(panelingGeo, panelingMat);
    paneling.position.set(0, 2.1, -1.8);
    houseGroup.add(paneling);

    // Backlit Onyx TV Panel
    const onyxMat = createMat(0xffd599, 0.1, 0.1);
    const onyxGeo = new THREE.BoxGeometry(2.8, 1.6, 0.1);
    const onyx = new THREE.Mesh(onyxGeo, onyxMat);
    onyx.position.set(0, 2.2, -1.68);
    houseGroup.add(onyx);

    // Main Entrance Portal (Steel Door)
    const steelDoorFrameMat = createMat(0x1a1a1a, 0.2, 0.9);
    const steelDoorFrameGeo = new THREE.BoxGeometry(2.2, 2.8, 0.3);
    const steelDoorFrame = new THREE.Mesh(steelDoorFrameGeo, steelDoorFrameMat);
    steelDoorFrame.position.set(0, 1.75, 6.0);
    houseGroup.add(steelDoorFrame);

    const steelDoorLeafMat = createMat(0x3a3028, 0.3, 0.7);
    const steelDoorLeafGeo = new THREE.BoxGeometry(1.8, 2.6, 0.15);
    const steelDoorLeaf = new THREE.Mesh(steelDoorLeafGeo, steelDoorLeafMat);
    steelDoorLeaf.position.set(0, 1.75, 6.08);
    houseGroup.add(steelDoorLeaf);

    // Steel Handle
    const handleMat = createMat(0xe5c158, 0.1, 0.95);
    const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.4);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.set(0.7, 1.75, 6.2);
    houseGroup.add(handle);

    // FIRST FLOOR SUITE (Master Bedroom, Wall Drop, Balcony)
    const ffFloorGeo = new THREE.BoxGeometry(12.4, 0.3, 12.4);
    const ffFloorMat = createMat(0xe0d6c8, 0.4);
    const ffFloor = new THREE.Mesh(ffFloorGeo, ffFloorMat);
    ffFloor.position.set(0, 3.85, 0);
    ffFloor.castShadow = true;
    houseGroup.add(ffFloor);
    ffFloorMeshRef.current = ffFloor;

    // FF Body
    const ffBodyGeo = new THREE.BoxGeometry(10.5, 3.0, 10.5);
    const ffBodyMat = createMat(0xfdfbf7, 0.4);
    const ffBody = new THREE.Mesh(ffBodyGeo, ffBodyMat);
    ffBody.position.set(0.5, 5.5, -0.5);
    ffBody.castShadow = true;
    houseGroup.add(ffBody);
    ffBodyMeshRef.current = ffBody;

    // Master Bedroom Wall Drop & Loft Cabinet Representation
    const wardrobeMat = createMat(0x8a7090, 0.3); // Mauve Lavender tone
    const wardrobeGeo = new THREE.BoxGeometry(3.6, 2.7, 0.8);
    const wardrobe = new THREE.Mesh(wardrobeGeo, wardrobeMat);
    wardrobe.position.set(3.5, 5.35, -2.5);
    houseGroup.add(wardrobe);
    wardrobeMeshRef.current = wardrobe;

    // Stainless Steel Glass Balcony Railing
    const balconyGlassMat = createMat(0x88ddff, 0.1, 0.9, true, 0.4);
    const balconyGlassGeo = new THREE.BoxGeometry(6.2, 1.1, 0.08);
    const balconyGlass = new THREE.Mesh(balconyGlassGeo, balconyGlassMat);
    balconyGlass.position.set(0.5, 4.55, 4.8);
    houseGroup.add(balconyGlass);
    balconyMeshRef.current = balconyGlass;

    const ssHandrailMat = createMat(0xdddddd, 0.1, 0.95);
    const ssHandrailGeo = new THREE.CylinderGeometry(0.05, 0.05, 6.3);
    const ssHandrail = new THREE.Mesh(ssHandrailGeo, ssHandrailMat);
    ssHandrail.rotation.z = Math.PI / 2;
    ssHandrail.position.set(0.5, 5.15, 4.8);
    houseGroup.add(ssHandrail);

    // ROOF & ARCHITECTURAL COVE CEILING
    const roofSlabGeo = new THREE.BoxGeometry(11.8, 0.4, 11.8);
    const roofSlabMat = createMat(0x3a3835, 0.5, 0.2);
    const roofSlab = new THREE.Mesh(roofSlabGeo, roofSlabMat);
    roofSlab.position.set(0.5, 7.2, -0.5);
    roofSlab.castShadow = true;
    houseGroup.add(roofSlab);
    roofMeshRef.current = roofSlab;

    // Ceiling Cove Lighting Strip
    const coveLightMat = createMat(0xffd27f, 0.1, 0.1);
    const coveLightGeo = new THREE.BoxGeometry(8, 0.1, 8);
    const coveLight = new THREE.Mesh(coveLightGeo, coveLightMat);
    coveLight.position.set(0, 3.65, 0);
    houseGroup.add(coveLight);

    // MOUSE INTERACTION & DRAG ORBIT ROTATION
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationSpeed = 0.005;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      houseGroup.rotation.y += deltaX * rotationSpeed;
      houseGroup.rotation.x += deltaY * rotationSpeed;
      // Clamp vertical rotation
      houseGroup.rotation.x = Math.max(-Math.PI / 6, Math.min(Math.PI / 4, houseGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY * 0.01;
      camera.fov = Math.min(75, Math.max(25, camera.fov + zoomFactor));
      camera.updateProjectionMatrix();
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // TOUCH CONTROLS FOR MOBILE
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      houseGroup.rotation.y += deltaX * rotationSpeed;
      houseGroup.rotation.x += deltaY * rotationSpeed;
      houseGroup.rotation.x = Math.max(-Math.PI / 6, Math.min(Math.PI / 4, houseGroup.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    domElement.addEventListener('touchstart', onTouchStart);
    domElement.addEventListener('touchmove', onTouchMove);
    domElement.addEventListener('touchend', onTouchEnd);

    // ANIMATION LOOP
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation
      if (autoRotate && !isDragging) {
        houseGroup.rotation.y += 0.003;
      }

      // Dynamic Exploded View Component Offsets
      if (roofMeshRef.current) roofMeshRef.current.position.y = 7.2 + explodedFactor * 4.5;
      if (ffBodyMeshRef.current) ffBodyMeshRef.current.position.y = 5.5 + explodedFactor * 2.8;
      if (wardrobeMeshRef.current) wardrobeMeshRef.current.position.y = 5.35 + explodedFactor * 2.8;
      if (balconyMeshRef.current) balconyMeshRef.current.position.y = 4.55 + explodedFactor * 2.0;
      if (ffFloorMeshRef.current) ffFloorMeshRef.current.position.y = 3.85 + explodedFactor * 1.4;

      // Smooth camera interpolation
      camera.position.lerp(targetCamPosRef.current, 0.05);
      currentLookAtRef.current.lerp(targetLookAtRef.current, 0.05);
      camera.lookAt(currentLookAtRef.current);

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE HANDLER
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);
      domElement.removeEventListener('touchstart', onTouchStart);
      domElement.removeEventListener('touchmove', onTouchMove);
      domElement.removeEventListener('touchend', onTouchEnd);
    };
  }, [renderMode]);

  // UPDATE LIGHTING MODE
  const handleModeChange = (mode) => {
    setRenderMode(mode);
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(
        mode === 'blueprint' ? 0x0a1128 : (mode === 'night' ? 0x0e1117 : 0xf4f1eb)
      );
    }
  };

  // CAMERA POSITION SWITCHING FOR ZONES
  const handleSelectZone = (zoneId) => {
    setActiveZone(zoneId);
    if (zoneId === 'overview') {
      targetCamPosRef.current.set(14, 10, 16);
      targetLookAtRef.current.set(0, 2, 0);
      setSelectedHotspot(null);
    } else {
      const hs = hotspotsData.find(h => h.id === zoneId);
      if (hs) {
        targetCamPosRef.current.copy(hs.camPos);
        targetLookAtRef.current.copy(hs.lookAt);
        setSelectedHotspot(hs);
      }
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className={`relative transition-all duration-500 ${isFullScreen ? 'fixed inset-0 z-50 bg-[#0E1117]' : 'w-full py-16 bg-[#F4F1EB]'}`}>
      <div className={`${isFullScreen ? 'h-full w-full p-4 flex flex-col' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Section Header */}
        {!isFullScreen && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A065]/15 border border-[#C5A065]/30 text-[#8C6D3B] text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A065]" /> 3D Interactive House Model
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1D1B]">
                Interactive 3D House <span className="text-[#C5A065]">Work Showcase</span>
              </h2>
              <p className="text-sm text-[#666055] mt-1 max-w-2xl leading-relaxed">
                Explore our 10 client work disciplines (Aluminium Interior, Wall Drop, Kitchen Cabinet, Loft, Accessories, Ceiling, Paneling, Steel Doors, Steel & MS Fabrication) inside an interactive 3D house model.
              </p>
            </div>

            {/* Control Toggles */}
            <div className="flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-[#E5DEC9] shadow-sm">
              <button
                onClick={() => handleModeChange('day')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  renderMode === 'day' 
                    ? 'bg-[#1E1D1B] text-[#F4F1EB] shadow-md' 
                    : 'text-[#666055] hover:text-[#1E1D1B]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" /> Day Sun
              </button>
              <button
                onClick={() => handleModeChange('night')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  renderMode === 'night' 
                    ? 'bg-[#1E1D1B] text-[#F4F1EB] shadow-md' 
                    : 'text-[#666055] hover:text-[#1E1D1B]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-300" /> Night Cove
              </button>
              <button
                onClick={() => handleModeChange('blueprint')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  renderMode === 'blueprint' 
                    ? 'bg-[#00d8ff]/20 text-[#00d8ff] border border-[#00d8ff]/40 shadow-md' 
                    : 'text-[#666055] hover:text-[#1E1D1B]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Blueprint
              </button>

              <div className="w-px h-5 bg-[#E5DEC9]" />

              {/* Exploded View Toggle Button & Slider */}
              <button
                onClick={() => setExplodedFactor(explodedFactor > 0 ? 0 : 0.8)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  explodedFactor > 0
                    ? 'bg-[#C5A065] text-black font-bold shadow-md'
                    : 'text-[#666055] hover:text-[#1E1D1B]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" /> 
                <span>Exploded View {explodedFactor > 0 ? `(${Math.round(explodedFactor * 100)}%)` : ''}</span>
              </button>

              {explodedFactor > 0 && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={explodedFactor}
                  onChange={(e) => setExplodedFactor(parseFloat(e.target.value))}
                  className="w-20 accent-[#C5A065] cursor-pointer"
                  title="Adjust Exploded Elevation Factor"
                />
              )}

              <div className="w-px h-5 bg-[#E5DEC9]" />

              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-1.5 rounded-xl transition-all ${
                  autoRotate ? 'bg-[#C5A065]/20 text-[#8C6D3B]' : 'text-[#8C8275] hover:bg-black/5'
                }`}
                title="Toggle 360 Auto Rotation"
              >
                <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
              </button>
              <button
                onClick={toggleFullScreen}
                className="p-1.5 rounded-xl text-[#8C8275] hover:bg-black/5 transition-all"
                title="Toggle Full Screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* 3D Canvas Canvas Window & Interactive Overlay */}
        <div className={`relative rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 ${
          renderMode === 'blueprint' ? 'border-[#00d8ff]/30 bg-[#0A1128]' : (renderMode === 'night' ? 'border-amber-500/20 bg-[#0E1117]' : 'border-[#E2D8C3] bg-[#EAE4D8]')
        } ${isFullScreen ? 'flex-1 min-h-0' : 'h-[520px] sm:h-[600px]'}`}>

          {/* Three.js Render Mount */}
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* 3D Canvas Instructions HUD */}
          <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-xs font-mono">
            <Eye className="w-3.5 h-3.5 text-[#C5A065]" />
            <span>Drag mouse/finger to orbit • Scroll to zoom</span>
          </div>

          {/* Hotspots Interactive Floating Pins */}
          <div className="absolute inset-0 pointer-events-none">
            {hotspotsData.map((hs) => {
              const IconComp = hs.icon;
              const isActive = activeZone === hs.id;
              return (
                <button
                  key={hs.id}
                  onClick={() => handleSelectZone(hs.id)}
                  className={`pointer-events-auto absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                    isActive ? 'scale-110 z-30' : 'scale-90 hover:scale-105 z-20'
                  }`}
                  style={{
                    // Approximate relative position overlay styling
                    top: hs.id === 'kitchen' ? '65%' : (hs.id === 'paneling' ? '52%' : (hs.id === 'wardrobe' ? '30%' : (hs.id === 'staircase' ? '45%' : (hs.id === 'entrance' ? '75%' : '20%')))),
                    left: hs.id === 'kitchen' ? '32%' : (hs.id === 'paneling' ? '50%' : (hs.id === 'wardrobe' ? '70%' : (hs.id === 'staircase' ? '28%' : (hs.id === 'entrance' ? '52%' : '48%'))))
                  }}
                >
                  <div className="relative">
                    {/* Pulsating Ping Ring */}
                    <span className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                      isActive ? 'bg-[#C5A065]' : 'bg-amber-400/40 group-hover:bg-[#C5A065]'
                    }`} />
                    
                    {/* Pin Badge */}
                    <div className={`relative flex items-center gap-2 px-3 py-1.5 rounded-2xl border shadow-lg backdrop-blur-md text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-[#1E1D1B] text-[#F4F1EB] border-[#C5A065]' 
                        : 'bg-white/90 text-[#2D2B29] border-white/80 hover:bg-[#1E1D1B] hover:text-white'
                    }`}>
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A065]' : 'text-amber-600'}`} />
                      <span className="hidden sm:inline">{hs.name}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Zone Camera Presets Bar */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-black/50 backdrop-blur-lg border border-white/10 z-20">
            <button
              onClick={() => handleSelectZone('overview')}
              className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                activeZone === 'overview' ? 'bg-[#C5A065] text-white shadow-md' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home className="w-3.5 h-3.5" /> Full Villa
            </button>
            {hotspotsData.map((hs) => {
              const IconComp = hs.icon;
              return (
                <button
                  key={hs.id}
                  onClick={() => handleSelectZone(hs.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-medium transition-all ${
                    activeZone === hs.id ? 'bg-[#C5A065] text-white shadow-md' : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComp className="w-3 h-3" />
                  <span className="hidden md:inline">{hs.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Hotspot Real Work Popover Card */}
          {selectedHotspot && (
            <div className="absolute top-4 right-4 max-w-sm w-full bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-[#E5DEC9] z-40 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#C5A065]/15 text-[#8C6D3B]">
                    {React.createElement(selectedHotspot.icon, { className: 'w-4 h-4' })}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E1D1B] tracking-tight">{selectedHotspot.name}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A065] font-semibold">Verified Client Work</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedHotspot(null)}
                  className="text-gray-400 hover:text-gray-700 text-xs p-1"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-[#555046] mb-3 leading-relaxed">
                {selectedHotspot.description}
              </p>

              {/* Real Kerala Client Photos Thumbnails */}
              <div className="mb-3">
                <div className="text-[11px] font-semibold text-[#1E1D1B] mb-1.5 flex items-center justify-between">
                  <span>Actual Client Photos ({selectedHotspot.featuredPhotos.length})</span>
                  <span className="text-[10px] text-[#C5A065]">Click to enlarge</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {selectedHotspot.featuredPhotos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => onOpenLightbox(selectedHotspot.featuredPhotos.map(p => p.url), index, photo.title, photo.category)}
                      className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-[#C5A065] focus:outline-none transition-all"
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
                <button
                  onClick={() => onOpenLightbox(selectedHotspot.featuredPhotos.map(p => p.url), 0, selectedHotspot.name, '3D House Showcase')}
                  className="flex-1 py-2 rounded-xl bg-[#1E1D1B] text-white text-xs font-medium hover:bg-[#C5A065] transition-colors flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" /> Full Gallery
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="py-2 px-3 rounded-xl bg-[#C5A065]/15 text-[#8C6D3B] text-xs font-semibold hover:bg-[#C5A065]/25 transition-colors"
                >
                  Book Work
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
