import React, { useState } from 'react';
import { MapView } from './components/MapView';
import { ContactsView } from './components/ContactsView';
import { PhoneView } from './components/PhoneView';
import { LocationData } from './data/locations';
import { MapPin, Users, MessageSquare, Image as ImageIcon, DollarSign, Clock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'contacts' | 'phone' | 'gallery'>('map');
  const [gameState, setGameState] = useState({
    money: 5000,
    energy: 100,
    maxEnergy: 100,
    day: 1,
    hour: 12
  });

  const handleSelectLocation = (loc: LocationData) => {
    alert(`Vstoupil jsi do lokace: ${loc.name}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans max-w-md mx-auto border-x border-slate-900">
      {/* Horní stavový řádek */}
      <header className="bg-slate-900 border-b border-slate-800 p-3 flex justify-between items-center text-xs sticky top-0 z-30">
        <div className="font-bold bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent text-sm">
          PLAYBOY: HORKÉ LÉTO '26
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-full border border-slate-700">
            <Clock className="w-3 h-3 text-rose-400" />
            <span>D. {gameState.day}, {String(gameState.hour).padStart(2, '0')}:00</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-full border border-slate-700">
            <DollarSign className="w-3 h-3 text-emerald-400" />
            <span>{gameState.money} Kč</span>
          </div>
        </div>
      </header>

      {/* Hlavní obsahová část */}
      <main className="flex-1 p-4 flex flex-col items-center overflow-y-auto">
        {activeTab === 'map' && <MapView onSelectLocation={handleSelectLocation} />}
        {activeTab === 'contacts' && <ContactsView />}
        {activeTab === 'phone' && <PhoneView />}
        {activeTab === 'gallery' && (
          <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl w-full my-auto">
            <h2 className="text-xl font-bold mb-2 text-rose-400">🖼️ Knihovna obrázků</h2>
            <p className="text-slate-400 text-sm">Zde bude správa vlastních obrázků v IndexedDB.</p>
          </div>
        )}
      </main>

      {/* Spodní navigační panel */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 flex justify-around items-center fixed bottom-0 left-0 right-0 max-w-md mx-auto z-30">
        <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-1 p-2 transition ${activeTab === 'map' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-200'}`}>
          <MapPin className="w-5 h-5" />
          <span className="text-[10px]">Mapa</span>
        </button>
        <button onClick={() => setActiveTab('contacts')} className={`flex flex-col items-center gap-1 p-2 transition ${activeTab === 'contacts' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-200'}`}>
          <Users className="w-5 h-5" />
          <span className="text-[10px]">Kontakty</span>
        </button>
        <button onClick={() => setActiveTab('phone')} className={`flex flex-col items-center gap-1 p-2 transition ${activeTab === 'phone' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-200'}`}>
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px]">Telefon</span>
        </button>
        <button onClick={() => setActiveTab('gallery')} className={`flex flex-col items-center gap-1 p-2 transition ${activeTab === 'gallery' ? 'text-rose-500' : 'text-slate-400 hover:text-slate-200'}`}>
          <ImageIcon className="w-5 h-5" />
          <span className="text-[10px]">Galerie</span>
        </button>
      </nav>
    </div>
  );
}
