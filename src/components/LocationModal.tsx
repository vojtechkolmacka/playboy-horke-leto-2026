import React from 'react';
import { LocationData } from '../data/locations';
import { LOCATION_ACTIONS, LocationAction } from '../data/locationActions';
import { X, DollarSign, Zap, Clock } from 'lucide-react';

interface LocationModalProps {
  location: LocationData;
  onClose: () => void;
  onExecuteAction: (action: LocationAction, locationId: string) => void;
  playerMoney: number;
  playerEnergy: number;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  location,
  onClose,
  onExecuteAction,
  playerMoney,
  playerEnergy,
}) => {
  const actions = LOCATION_ACTIONS[location.id] || [
    {
      id: 'default_rest',
      name: 'Rozhlédnout se po okolí',
      description: 'Chvíli tu pobudeš a rozhlédneš se, co se děje.',
      icon: '👀',
      energyChange: 5,
      timeCost: 1,
    },
  ];

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-slate-700 p-5 rounded-2xl max-w-sm w-full space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-700 shadow-inner">
              {location.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-rose-400">{location.name}</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{location.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800">
          {location.description}
        </p>

        <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dostupné aktivity:</h4>
          {actions.map((action) => {
            const hasEnoughMoney = action.costMoney ? playerMoney >= action.costMoney : true;
            const hasEnoughEnergy = action.energyChange < 0 ? playerEnergy >= Math.abs(action.energyChange) : true;
            const canAfford = hasEnoughMoney && hasEnoughEnergy;

            return (
              <div
                key={action.id}
                className={`p-3 rounded-xl border transition flex flex-col gap-2 ${
                  canAfford
                    ? 'bg-slate-950/60 border-slate-800 hover:border-rose-500/50 cursor-pointer'
                    : 'bg-slate-950/30 border-slate-900 opacity-50 cursor-not-allowed'
                }`}
                onClick={() => {
                  if (canAfford) {
                    onExecuteAction(action, location.id);
                  } else {
                    alert('Nemáš dostatek peněz nebo energie na tuto akci!');
                  }
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xl p-1 bg-slate-900 rounded-lg border border-slate-800">
                    {action.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-slate-100">{action.name}</h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{action.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 border-t border-slate-900 text-[10px]">
                  {action.costMoney && (
                    <span className="flex items-center gap-0.5 text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                      <DollarSign className="w-3 h-3" />-{action.costMoney} Kč
                    </span>
                  )}
                  {action.rewardMoney && (
                    <span className="flex items-center gap-0.5 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <DollarSign className="w-3 h-3" />+{action.rewardMoney} Kč
                    </span>
                  )}
                  <span className={`flex items-center gap-0.5 px-2 py-0.5 rounded-md border ${
                    action.energyChange >= 0 
                      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                      : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                  }`}>
                    <Zap className="w-3 h-3" />{action.energyChange >= 0 ? `+${action.energyChange}` : action.energyChange}%
                  </span>
                  <span className="flex items-center gap-0.5 text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 ml-auto">
                    <Clock className="w-3 h-3 text-rose-400" />{action.timeCost}h
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs transition border border-slate-700 mt-2"
        >
          Odejít z místa
        </button>
      </div>
    </div>
  );
};
