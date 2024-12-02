import { google } from 'googleapis';

export interface SheetData {
  urls: string[];
}

export async function getSheetData(accessToken: string, spreadsheetId: string, range: string): Promise<SheetData> {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const sheets = google.sheets({ version: 'v4', auth });
  
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    const urls = rows.map(row => row[0]).filter(url => url && url.startsWith('http'));

    return { urls };
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
}