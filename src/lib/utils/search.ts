import { GOOGLE_SEARCH_URL } from '../constants';

export function buildGoogleSearchUrl(query: string): string {
  const params = new URLSearchParams({
    q: query
  });
  return `${GOOGLE_SEARCH_URL}?${params.toString()}`;
}

export function sanitizeKeyword(keyword: string): string {
  return keyword.trim().toLowerCase();
}