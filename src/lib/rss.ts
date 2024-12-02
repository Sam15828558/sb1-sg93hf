export async function generateRSSFeed(urls: string[]): Promise<string> {
  const rssAppEndpoint = 'https://rss.app/feeds/create';
  
  try {
    const response = await fetch(rssAppEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: urls,
        format: 'rss',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate RSS feed');
    }

    const data = await response.json();
    return data.rssUrl;
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    throw error;
  }
}