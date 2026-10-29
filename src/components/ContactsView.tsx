import React, { useState } from 'react';
import { Character } from '../data/characters';

interface ContactsViewProps {
  characters: Character[];
}

export const ContactsView: React.FC<ContactsViewProps> = ({ characters }) => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-4 pb-20">
      <h2 className="text-xl font-bold text-rose-400 mb-2 flex items-center gap-2">
        <span>👥</span> Seznam kontaktů ({characters.length})
      </h2>
      <p className="text-xs text-slate-400 mb-4">
        Kliknutím na postavu zobrazíš její detail, profil a stav vztahu.
      </p>

      {/* Seznam postav */}
      <div className="space-y-3">
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => setSelectedChar(char)}
            className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:border-rose-500/50 transition shadow-md"
          >
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl border border-slate-700">
              {char.avatarIcon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-slate-100 truncate">{char.name}, {char.age}</h3>
                <span className="text-[10px] bg-slate-800 text-rose-300 px-2 py-0.5 rounded-full border border-slate-700">
                  {char.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate">{char.profession}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail postavy (vyskakovací okno) */}
      {selectedChar && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl max-w-sm w-full space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-3xl border border-slate-700">
                {selectedChar.avatarIcon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-rose-400">{selectedChar.name}, {selectedChar.age}</h3>
                <p className="text-xs text-slate-300 font-medium">{selectedChar.profession}</p>
                <span className="text-[10px] text-amber-400">{selectedChar.archetype}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800">
              {selectedChar.description}
            </p>

            {/* Vztahové ukazatele */}
            <div className="space-y-2 bg-slate-950/50 p-3 rounded-xl border border-slate-800 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Sympatie:</span>
                <span className="font-bold text-rose-400">{selectedChar.sympathy}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Důvěra:</span>
                <span className="font-bold text-amber-400">{selectedChar.trust}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Přitažlivost:</span>
                <span className="font-bold text-emerald-400">{selectedChar.attraction}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Respekt:</span>
                <span className="font-bold text-sky-400">{selectedChar.respect}%</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedChar(null)}
              className="w-full py-2.5 bg-
