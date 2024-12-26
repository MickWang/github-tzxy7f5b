import axios from 'axios';
import type { SmartMoneyItem } from '../../types/smartMoney';

const API_HOST = import.meta.env.VITE_API_URL;

export async function getSmartMoneyList(): Promise<SmartMoneyItem[]> {
  try {
    const response = await axios.get(`${API_HOST}/smart-money/list`);
    // Limit to 500 items
    return response.data.data.slice(0, 500);
  } catch (error) {
    console.error('Failed to fetch smart money list:', error);
    return [];
  }
}