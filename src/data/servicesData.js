import { CLIENT_SERVICES_CONFIG } from './clientAssets';

export const servicesData = CLIENT_SERVICES_CONFIG.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
  tagline: s.tagline,
  description: s.description,
  deliverables: s.deliverables,
  image: s.primaryImage,
  gallery: s.gallery
}));
