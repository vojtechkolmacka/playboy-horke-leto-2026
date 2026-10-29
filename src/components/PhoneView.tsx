import React, { useState } from 'react';
import { INITIAL_CHARACTERS, Character } from '../data/characters';
import { INITIAL_MESSAGES, ChatMessage } from '../data/messages';
import { Send, ArrowLeft, MessageSquare, PhoneCall } from 'lucide-react';

export const PhoneView: React.FC = () => {
  const [characters] = useState<Character[]>(INITIAL_CHARACTERS);
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_MESSAGES);
  const [activeChatChar, setActiveChatChar] = useState<Character | null>(null);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatChar) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      characterId: activeChatChar.id,
      sender: 'player',
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [activeChatChar.id]: [...(prev[activeChatChar.id] || []), newMsg]
    }));

    setInputText('');

    // Jednoduchá simulace automatické odpovědi po 1.5 sekundě
    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        characterId: activeChatChar.id,
        sender: 'character',
        text: 'Zajímavé... Pověz mi o tom víc, až se uvidíme osobně. 😉',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => ({
        ...prev,
        [activeChatChar.id]: [...(prev[activeChatChar.id] || []), replyMsg]
      }));
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-2 pb-20 flex flex-col h-[80vh]">
      {!activeChatChar ? (
        /* Seznam konverzací v telefonu */
        <div className="space-y-3 flex-1 overflow-y-auto">
          <h2 className="text-xl font-bold text-rose-400 mb-2 flex items-center gap-2 px-2">
            <span>📱</span> Zprávy a kontakty
          </h2>
          <p className="text-xs text-slate-400 mb-4 px-2">
            Vyber postavu a zahajte konverzaci nebo posílejte zprávy.
          </p>

          {characters.map((char) => {
            const charMsgs = messages[char.id] || [];
            const lastMsg = charMsgs[charMsgs.length - 1];

            return (
              <div
                key={char.id}
                onClick={() => setActiveChatChar(char)}
                className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:border-rose-500/50 transition shadow-md"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl border border-slate-700 relative">
                  {char.avatarIcon}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm text-slate-100 truncate">{char.name}</h3>
                    <span className="text-[10px] text-slate-400">
                      {lastMsg ? lastMsg.timestamp : ''}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {lastMsg ? lastMsg.text : char.profession}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Detail aktivního chatu s postavou */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl">
          {/* Horní lišta chatu */}
          <div className="bg-slate-950/80 p-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveChatChar(null)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xl">{activeChatChar.avatarIcon}</span>
                <div>
                  <h3 className="font-bold text-sm text-slate-100">{activeChatChar.name}</h3>
                  <span className="text-[10px] text-emerald-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => alert(`Zkoušíš volat ${activeChatChar.name}... Zrovna nemá čas, zkus to později!`)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-rose-400 rounded-lg transition"
              >
                <PhoneCall className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Seznam zpráv */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 flex flex-col">
            {(messages[activeChatChar.id] || []).map((msg) => {
              const isPlayer = msg.sender === 'player';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[80%] ${isPlayer ? 'self-end items-end' : 'self-start items-start'}`}
                >
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      isPlayer
                        ? 'bg-rose-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                </div>
              );
            })}
          </div>

          {/* Vstupní formulář pro psaní zprávy */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Napiš zprávu..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-500 text-white p-2.5 rounded-xl transition flex items-center justify-center shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
