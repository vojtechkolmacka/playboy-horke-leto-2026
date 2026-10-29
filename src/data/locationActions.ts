export interface LocationAction {
  id: string;
  name: string;
  description: string;
  icon: string;
  costMoney?: number;
  rewardMoney?: number;
  energyChange: number; // kladná = doplnění, záporná = úbytek
  timeCost: number;     // počet hodin, o které se posune čas
  targetCharacterId?: string; // pokud akce souvisí s konkrétní postavou
}

export const LOCATION_ACTIONS: Record<string, LocationAction[]> = {
  domov: [
    {
      id: 'sleep',
      name: 'Vyspat se a odpočinout',
      description: 'Pořádně se vyspíš, doplníš plnou energii a posuneš čas na další den ráno.',
      icon: '🛏️',
      energyChange: 100,
      timeCost: 8
    },
    {
      id: 'chill',
      name: 'Relaxovat u telefonu',
      description: 'Prohlídneš si sociální sítě, odpočineš si a získáš trochu klidu.',
      icon: '📱',
      energyChange: 20,
      timeCost: 2
    }
  ],
  kavarna: [
    {
      id: 'drink_coffee',
      name: 'Dát si kávu a dezert',
      description: 'Chutná káva tě nakopne a zlepší náladu.',
      icon: '☕',
      costMoney: 150,
      energyChange: 30,
      timeCost: 1
    },
    {
      id: 'meet_simona',
      name: 'Potkat Simonu u baru',
      description: 'Zkusíš hodit reč se Simonou, která tu zrovna obsluhuje.',
      icon: '💬',
      costMoney: 100,
      energyChange: 15,
      timeCost: 2,
      targetCharacterId: 'simona'
    }
  ],
  klub: [
    {
      id: 'party_night',
      name: 'Utrácet na VIP stolu',
      description: 'Roztočíš peníze v klubu, ukážeš styl a potkáš spoustu lidí.',
      icon: '🍾',
      costMoney: 1500,
      energyChange: -30,
      timeCost: 4,
      targetCharacterId: 'natalie'
    },
    {
      id: 'dj_set_watch',
      name: 'Sledovat DJ set',
      description: 'Poslechneš si dobrou hudbu a nasaješ atmosféru nočního života.',
      icon: '🎵',
      costMoney: 300,
      energyChange: -10,
      timeCost: 2,
      targetCharacterId: 'natalie'
    }
  ],
  fitness: [
    {
      id: 'workout',
      name: 'Těžký trénink v posilovně',
      description: 'Zamakáš na své kondici. Stojí to sílu, ale zlepšíš si reputaci.',
      icon: '🏋️‍♂️',
      costMoney: 200,
      energyChange: -40,
      timeCost: 2,
      targetCharacterId: 'kristyna'
    }
  ],
  prace: [
    {
      id: 'brigada',
      name: 'Vzít si rychlou brigádu',
      description: 'Odpracuješ pár hodin a vyděláš nějaké peníze do začátku.',
      icon: '💼',
      rewardMoney: 1200,
      energyChange: -50,
      timeCost: 4
    }
  ],
  plaz: [
    {
      id: 'swimming',
      name: 'Plavání a opalování u vody',
      description: 'Parádní relax u vody za slunečného dne.',
      icon: '🌊',
      energyChange: 25,
      timeCost: 3,
      targetCharacterId: 'dominika'
    }
  ]
};
