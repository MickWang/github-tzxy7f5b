import axios from 'axios';

interface TokenMetadata {
  image?: string;
  twitter?: string;
  website?: string;
  telegram?: string;
}

export function useTokenMetadata() {
  const getTokenMetadata = async (uri: string): Promise<TokenMetadata | null> => {
    const ipfsHost = "https://ipfs.io/ipfs/";
    
    try {
      if (!uri) return null;

      let response;
      if (uri.includes(ipfsHost)) {
        const hash = uri.replace(ipfsHost, "");
        response = await axios.get(`${ipfsHost}${hash}`);
      } else {
        response = await axios.get(uri);
      }

      const { data } = response;
      return {
        image: data.image || '',
        twitter: data.twitter || '',
        website: data.website || '',
        telegram: data.telegram || ''
      };
    } catch (error) {
      console.error('Failed to fetch token metadata:', error);
      return null;
    }
  };

  return { getTokenMetadata };
}