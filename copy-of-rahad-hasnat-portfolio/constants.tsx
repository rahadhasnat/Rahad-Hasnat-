
export const CATEGORIES = [
  'Reels',
  'Long',
  'Motion Graphics',
  'Podcast',
  'Promo'
] as const;

export type Category = typeof CATEGORIES[number];

export interface VideoProject {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  videoUrl: string;
  description?: string;
}

export const PORTFOLIO_DATA: VideoProject[] = [
  {
    id: '1',
    title: 'High-Energy Instagram Reel',
    category: 'Reels',
    thumbnail: 'https://picsum.photos/seed/reel1/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: 'Dynamic fast-paced editing for social growth.'
  },
  {
    id: '2',
    title: 'Modern Tech Review',
    category: 'Long',
    thumbnail: 'https://picsum.photos/seed/long1/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Clean storytelling for YouTube long-form content.'
  }
];

export const PROFILE_DETAILS = {
  siteName: 'RAHAD.H',
  name: 'Rahad Hasnat',
  profession: 'Freelance Video Editor',
  tagline: 'Helping creators grow with clean & engaging edits',
  bio: 'Expert in transforming raw footage into high-converting visual stories. Specializing in YouTube growth, social media virality, and professional motion design.',
  email: 'rahadhasnat725@gmail.com',
  phone: '+8801301578357',
  whatsappUrl: 'https://wa.me/8801301578357',
  footerTagline: 'Making your vision come to life through premium editing.',
  socials: {
    facebook: 'https://web.facebook.com/rahadhasnat.editor',
    instagram: 'https://www.instagram.com/bmrahadhasnat/',
    linkedin: 'https://www.linkedin.com/in/b-m-rahad-hasnat-2a844034a/',
    youtube: 'https://www.youtube.com/@bmrahadhasnat'
  },
  profilePhoto: 'https://picsum.photos/seed/rahad/400/400' 
};
