import axios from 'axios';
import type { TokenDataItem, TimeFilter, TokenRange } from '../../types/token';
import { timeFilterToRange } from '../../types/token';

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTokens(timeFilter: TimeFilter): Promise<TokenDataItem[]> {
  try {
    const range = timeFilterToRange[timeFilter];
    const response = await axios.get(`${API_URL}/tokens?range=${range}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch tokens:', error);
    return [];
  }
}