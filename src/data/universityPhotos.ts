export interface UniversityPhoto {
  id: string;
  title: string;
  caption: string;
  tag: string;
  url: string;
  fallbackUrl?: string;
}

export const DEFAULT_UNIVERSITY_PHOTOS: UniversityPhoto[] = [
  {
    id: 'cu-photo-1',
    title: 'CU Campus Main Gate & Entrance Arch',
    tag: 'Iconic Landmark',
    caption: 'The historic entrance arch of University of Chittagong flanked by lush natural foliage and tropical greenery.',
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: '/images/campus/campus-1.svg',
  },
  {
    id: 'cu-photo-2',
    title: 'Faculty of Biological Sciences & GEB Complex',
    tag: 'Conference Venue',
    caption: 'The academic hub hosting the Department of Genetic Engineering and Biotechnology and IBC 2027 scientific sessions.',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: '/images/campus/campus-2.svg',
  },
  {
    id: 'cu-photo-3',
    title: 'Scenic Hill Country & Green Campus Roads',
    tag: 'Natural Beauty',
    caption: 'Renowned as one of South Asia’s most picturesque campuses with rolling verdant hills and winding forest paths.',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: '/images/campus/campus-3.svg',
  },
  {
    id: 'cu-photo-4',
    title: 'GEB Molecular Life Sciences Laboratories',
    tag: 'Research Center',
    caption: 'Cutting-edge genomic research, genetic engineering workstations, and tissue culture facilities in the GEB department.',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: '/images/campus/campus-4.svg',
  },
];
