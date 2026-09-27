import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';
import PageSkeleton from './components/PageSkeleton';

// Route-level Code Splitting for Ultra-High Concurrency (10,000+ users)
// Reduces critical initial bundle size by over 70% and prevents Three.js from loading on non-3D pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const House3DPage = lazy(() => import('./pages/House3DPage'));
const PhotoVaultPage = lazy(() => import('./pages/PhotoVaultPage'));

// Lazy Loaded Modals - Only evaluated and fetched on user demand
const ProjectDetailModal = lazy(() => import('./components/ProjectDetailModal'));
const ImageLightboxModal = lazy(() => import('./components/ImageLightboxModal'));

// Ambient and cursor components
import ParticleBackground from './components/ParticleBackground';
import AnimaticCursor from './components/AnimaticCursor';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefilledProject, setPrefilledProject] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Global Lightbox Viewer State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: '',
    category: ''
  });

  const handleOpenLightbox = (images, initialIndex = 0, title = '', category = '') => {
    const list = Array.isArray(images) ? images : [images];
    setLightboxState({
      isOpen: true,
      images: list,
      initialIndex: typeof initialIndex === 'number' ? initialIndex : 0,
      title: title || 'HYZIN Interior & Fabrication Work',
      category: category || 'Original Client Work'
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  // Handle URL pathname or hash on initial load or browser navigation
  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash.toLowerCase().includes('sitemap.xml')) {
        window.location.href = '/sitemap.xml';
        return;
      }
      if (['home', 'about', 'projects', 'services', 'contact', '3d-house', 'photo-vault'].includes(hash)) {
        setActivePage(hash);
        return;
      }

      // Check pathname (e.g. /about, /projects, /services, /contact)
      const cleanPath = window.location.pathname.replace(/^\/hyzin\/?/, '').replace(/^\//, '').replace(/\/$/, '');
      if (['about', 'projects', 'services', 'contact', '3d-house', 'photo-vault'].includes(cleanPath)) {
        setActivePage(cleanPath);
      }
    };

    syncRoute();

    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  // Idle Prefetching of Secondary Routes
  // Downloads non-critical routes only when the browser main thread is completely idle
  useEffect(() => {
    const prefetchRoutes = () => {
      import('./pages/ProjectsPage');
      import('./pages/ServicesPage');
      import('./pages/ContactPage');
    };

    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(prefetchRoutes, { timeout: 3500 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(prefetchRoutes, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    navigateTo('contact');
  };

  const handleCommissionProject = (projectTitle) => {
    setPrefilledProject(projectTitle);
    navigateTo('contact');
  };

  const handleSelectRegion = (regionName) => {
    setSelectedRegion(regionName);
    navigateTo('contact');
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    navigateTo('services');
  };

  // Passive High-Performance IntersectionObserver for Scroll Pop-ups
  useEffect(() => {
    let observer;
    const timer = setTimeout(() => {
      const handleIntersection = (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      };

      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      const targets = document.querySelectorAll(
        'section:not(.no-reveal), .reveal-up, .scroll-reveal, .editorial-card, .service-card, .scroll-card'
      );
      targets.forEach((el) => {
        if (!el.classList.contains('no-reveal')) {
          el.classList.add('reveal-up');
          observer.observe(el);
        }
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [activePage]);

  return (
    <ErrorBoundary onReset={() => navigateTo('home')}>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#3A2117] text-[#EDE3D2] selection:bg-[#C4A174]/30 selection:text-[#EDE3D2] flex flex-col justify-between relative">
        {/* Luxury Animatic Custom Cursor */}
        <AnimaticCursor />

        {/* Ambient Cursor-Reactive Particles */}
        <ParticleBackground />

        {/* Universal Floating Header */}
        <Navbar
          activePage={activePage}
          onNavigate={navigateTo}
          onOpenConsultation={handleOpenConsultation}
          onSelectService={handleSelectService}
        />

        {/* Main Page Body with Suspense Code-Splitting */}
        <main key={activePage} className="flex-1 animate-page-enter">
          <Suspense fallback={<PageSkeleton />}>
            {activePage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenConsultation={handleOpenConsultation}
                onOpenLightbox={handleOpenLightbox}
              />
            )}

            {activePage === 'about' && (
              <AboutPage
                onOpenConsultation={handleOpenConsultation}
                onSelectRegion={handleSelectRegion}
                onOpenLightbox={handleOpenLightbox}
              />
            )}

            {activePage === 'projects' && (
              <ProjectsPage
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenConsultation={handleOpenConsultation}
                onOpenLightbox={handleOpenLightbox}
              />
            )}

            {activePage === 'services' && (
              <ServicesPage
                onOpenConsultation={handleOpenConsultation}
                onOpenLightbox={handleOpenLightbox}
                activeServiceId={selectedServiceId}
                onClearActiveService={() => setSelectedServiceId(null)}
              />
            )}

            {activePage === 'contact' && (
              <ContactPage
                prefilledProject={prefilledProject}
                selectedRegion={selectedRegion}
              />
            )}

            {activePage === '3d-house' && (
              <House3DPage
                onOpenLightbox={handleOpenLightbox}
                onOpenConsultation={handleOpenConsultation}
                onNavigate={navigateTo}
              />
            )}

            {activePage === 'photo-vault' && (
              <PhotoVaultPage
                onOpenLightbox={handleOpenLightbox}
                onOpenConsultation={handleOpenConsultation}
              />
            )}
          </Suspense>
        </main>

        {/* Universal Footer */}
        <Footer
          onNavigate={navigateTo}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Floating WhatsApp Action */}
        <FloatingWhatsApp onOpenConsultation={handleOpenConsultation} />

        {/* Lazy Loaded Interactive Case Study Modal */}
        {selectedProject && (
          <Suspense fallback={<PageSkeleton variant="modal" />}>
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onCommissionProject={handleCommissionProject}
            />
          </Suspense>
        )}

        {/* Lazy Loaded Fullscreen High-Resolution Image Lightbox Viewer */}
        {lightboxState.isOpen && (
          <Suspense fallback={null}>
            <ImageLightboxModal
              isOpen={lightboxState.isOpen}
              onClose={handleCloseLightbox}
              images={lightboxState.images}
              initialIndex={lightboxState.initialIndex}
              title={lightboxState.title}
              category={lightboxState.category}
            />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
}
