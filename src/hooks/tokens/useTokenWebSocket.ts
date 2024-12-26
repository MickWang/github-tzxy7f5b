import { useEffect } from 'react';
import { useTokenStore } from '../../store/token/tokenStore';
import { formatTokenData } from '../../services/token/tokenFormatter';
import type { TimeFilter } from '../../types/token';

const WS_URL = import.meta.env.VITE_WS_URL;

export function useTokenWebSocket(timeFilter: TimeFilter) {
  const { addTokens, isPaused } = useTokenStore();

  useEffect(() => {
    if (isPaused) return;

    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log('WebSocket connected');
      // Subscribe to token updates
      ws.send(JSON.stringify({
        event: 'subscribe',
        data: {
          type: timeFilter === '30m' ? 'token30mins' : 'token1hour',
          id: crypto.randomUUID()
        }
      }));
    };

    ws.onmessage = async (event) => {
      try {
        const message = JSON.parse(event.data);
        if ((message.type === 'token30mins' || message.type === 'token1hour') && Array.isArray(message.data)) {
          // Format new token data
          const formattedTokens = await Promise.all(
            message.data.map(formatTokenData)
          );
          
          // Update store with new tokens
          addTokens(formattedTokens);
        }
      } catch (error) {
        console.error('Failed to process WebSocket message:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }, [timeFilter, isPaused, addTokens]);
}