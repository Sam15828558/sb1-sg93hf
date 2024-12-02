export interface CMSFootprint {
  name: string;
  category: 'forum' | 'blog' | 'ecommerce' | 'wiki' | 'other';
  operator: string;
  dofollowFootprints: string[];
  description: string;
}

export interface FootprintResult {
  query: string;
  footprints: string[];
}