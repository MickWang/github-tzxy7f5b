import React from 'react';
import { useSignalStore } from '../../hooks/signals/useSignalStore';
import { useSignalFilterStore } from '../../store/signal/signalFilterStore';
import { SignalItem } from './SignalItem';

export function SignalsList() {
  const { signals } = useSignalStore();
  const { tradeType } = useSignalFilterStore();
  
  // Filter signals based on selected trade type
  const filteredSignals = signals.filter(signal => {
    if (tradeType === 'all') return true;
    return signal.type === tradeType;
  });

  console.log('SignalsList: Rendering with signals', {
    total: signals.length,
    filtered: filteredSignals.length,
    tradeType
  });

  return (
    <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-4">
      {filteredSignals.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-t-2 border-r-2 border-cyan-400/30 rounded-full animate-[spin_3s_linear_infinite]" />
            <div className="absolute inset-0 border-t-2 border-r-2 border-cyan-400/20 rounded-full animate-[spin_2s_linear_infinite]" />
            <div className="absolute inset-0 border-t-2 border-r-2 border-cyan-400/10 rounded-full animate-[spin_1s_linear_infinite]" />
          </div>
          <span className="text-gray-400 animate-pulse">Scanning signals...</span>
        </div>
      ) : (
        filteredSignals.map((signal) => (
          <SignalItem key={signal.id} signal={signal} />
        ))
      )}
    </div>
  );
}