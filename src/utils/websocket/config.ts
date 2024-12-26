export const WebSocketConfig = {
  // Use mock WebSocket in development
  WS_URL: import.meta.env.DEV 
    ? 'wss://mock.websocket/smart-money'  // Mock URL for development
    : import.meta.env.VITE_WS_URL,
  RECONNECT: {
    BASE_DELAY: 1000,
    MAX_DELAY: 30000,
    MAX_RETRIES: 5
  }
} as const;