import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProjectDetailModal from './components/ProjectDetailModal';
import ImageLightboxModal from './components/ImageLightboxModal';

// 5 Dedicated SPA Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import House3DPage from './pages/House3DPage';
import PhotoVaultPage from './pages/PhotoVaultPage';

import ParticleBackground from './components/ParticleBackground';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [prefilledProject, setPrefilledProject] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

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

  // Handle URL hash on initial load or browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'projects', 'services', 'contact', '3d-house', 'photo-vault'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2B29] selection:bg-[#C5A065]/30 selection:text-[#1E1D1B] flex flex-col justify-between relative">
      {/* Ambient Cursor-Reactive Particles */}
      <ParticleBackground />

      {/* Universal Floating Header */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Body (Zero Page Refresh Routing) */}
      <main className="flex-1">
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
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onCommissionProject={handleCommissionProject}
        />
      )}

      {/* Fullscreen High-Resolution Image Lightbox Viewer */}
      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
        title={lightboxState.title}
        category={lightboxState.category}
      />
    </div>
  );
}
