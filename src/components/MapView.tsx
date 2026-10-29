import React, { useState } from 'react';
import { GAME_LOCATIONS, LocationData } from '../data/locations';

interface MapViewProps {
  onSelectLocation: (location: LocationData) => void;
}

export const MapView: React.FC<MapViewProps> = ({ onSelectLocation }) => {
  const [selectedLoc, setSelectedLoc] = useState<LocationData | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Pozadí mapy */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80 bg-slate-950 flex items-center justify-center">
        <span className="text-slate-600 text-sm px-4 text-center">Zde se brzy zobrazí tvůj herní obrázek mapy</span>
      </div>

      {/* Interaktivní špendlíky lokací rozmístěné procentuálně */}
      {GAME_LOCATIONS.map((loc) => (
        <button
          key={loc.id}
          onClick={() => setSelectedLoc(loc)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center focus:outline-none transition-transform hover:scale-110"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
        >
          <div className="w-8 h-8 bg-rose-600/90 border-2 border-white rounded-full flex items-center justify-center shadow-lg text-xs">
            {loc.icon}
          </div>
          <span className="bg-slate-900/90 text-slate-100 text-[10px] px-1.5 py-0.5 rounded border border-slate-700 whitespace-nowrap mt-1 font-medium">
            {loc.name}
          </span>
        </button>
      ))}

      {/* Vyskakovací detail lokace po kliknutí */}
      {selectedLoc && (
        <div className="absolute inset-x-4 bottom-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-5 rounded-2xl shadow-2xl z-20 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2">
              <span>{selectedLoc.icon}</span> {selectedLoc.name}
            </h3>
            <button 
              onClick={() => setSelectedLoc(null)}
              className="text-slate-400 hover:text-white text-sm bg-slate-800 px-2 py-1 rounded-lg"
            >
              ✕ Zavřít
            </button>
          </div>
          <p className="text-sm text-slate-300">{selectedLoc.description}</p>
          <button
            onClick={() => {
              onSelectLocation(selectedLoc);
              setSelectedLoc(null);
            }}
            className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Vstoupit do lokace
          </button>
        </div>
      )}
    </div>
  );
};
