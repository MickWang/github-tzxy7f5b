import { create } from "zustand";
import { tradingPlatforms } from "../components/signals/token/platforms/TradingPlatform";

interface TradingTool {
  id: string;
  name: string;
  icon: string;
}

interface TradingToolsStore {
  selectedTool: TradingTool | null;
  setSelectedTool: (tool: TradingTool) => void;
}

export const useTradingTools = create<TradingToolsStore>((set) => ({
  selectedTool: tradingPlatforms[0], // Default tool
  setSelectedTool: (tool) => set({ selectedTool: tool }),
}));
