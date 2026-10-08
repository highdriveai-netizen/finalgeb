export interface UniversityPhoto {
  id: string;
  title: string;
  caption?: string;
  tag?: string;
  url: string;
  fallbackUrl?: string;
}

export const DEFAULT_UNIVERSITY_PHOTOS: UniversityPhoto[] = [
  {
    id: 'cu-photo-1',
    title: 'University Campus & Historic Landmark',
    tag: 'University of Chittagong',
    url: '/images/university/photo-1.jpg',
    fallbackUrl: 'https://i.ibb.co/BHSqwkws/468590982-549717947860451-3217171050068955251-n.jpg',
  },
  {
    id: 'cu-photo-2',
    title: 'Academic Buildings & Faculty Complex',
    tag: 'University of Chittagong',
    url: '/images/university/photo-2.jpg',
    fallbackUrl: 'https://i.ibb.co/wNrSgYTT/468505620-549717761193803-1409904802605620581-n.jpg',
  },
  {
    id: 'cu-photo-3',
    title: 'Green Hills & Campus Environment',
    tag: 'Scenic Campus',
    url: '/images/university/photo-3.jpg',
    fallbackUrl: 'https://i.ibb.co/Ngrg6Kwd/534404336-732229146273204-2440829160426594022-n.jpg',
  },
  {
    id: 'cu-photo-4',
    title: 'Department of GEB & Academic Life',
    tag: 'Host Department',
    url: '/images/university/photo-4.jpg',
    fallbackUrl: 'https://i.ibb.co/Ps6c3dz1/535191570-732227456273373-8738900902760169434-n.jpg',
  },
];
