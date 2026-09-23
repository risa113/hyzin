import React from 'react';
import MasterPhotoVault from '../components/MasterPhotoVault';

export default function PhotoVaultPage({ onOpenLightbox, onOpenConsultation }) {
  return (
    <div className="animate-page-enter pt-12">
      <MasterPhotoVault
        onOpenLightbox={onOpenLightbox}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
}
