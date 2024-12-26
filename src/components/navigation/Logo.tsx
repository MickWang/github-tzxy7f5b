import React from 'react';
import { Zap, Waves } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="absolute inset-0 bg-cyan-400/20 blur-lg animate-pulse" />
        <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg transform ">
          <Zap size={20} className="text-white transform" />
        </div>
        
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Pump Space
        </h1>
       
      </div>
    </div>
  );
}