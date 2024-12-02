import { CMSFootprint, FootprintResult } from '../types/cms';
import { sanitizeKeyword } from './utils/search';

export function generateFootprints(keyword: string, cms: CMSFootprint): FootprintResult {
  const sanitizedKeyword = sanitizeKeyword(keyword);
  const baseQuery = `site:fr ${sanitizedKeyword} ${cms.operator}`;
  
  const footprints = cms.dofollowFootprints.map(footprint => 
    `site:fr ${sanitizedKeyword} inurl:"${footprint}"`
  );

  return {
    query: baseQuery,
    footprints
  };
}

export function generateAllFootprints(keyword: string, cmsList: CMSFootprint[]): Record<string, FootprintResult> {
  return cmsList.reduce((acc, cms) => ({
    ...acc,
    [cms.name]: generateFootprints(keyword, cms)
  }), {});
}