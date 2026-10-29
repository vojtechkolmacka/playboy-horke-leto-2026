export interface ChatMessage {
  id: string;
  characterId: string;
  sender: 'player' | 'character';
  text: string;
  timestamp: string;
}

export const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {
  viktorie: [
    {
      id: 'v1',
      characterId: 'viktorie',
      sender: 'character',
      text: 'Ahoj. Sleduju tě tady ve městě... Jestli máš v plánu mě dneska oslovit, tak doufám, že máš lepší vkus než většina chlapů tady.',
      timestamp: '10:00'
    }
  ],
  kristyna: [
    {
      id: 'k1',
      characterId: 'kristyna',
      sender: 'character',
      text: 'Čau! Copak, flákáš se? Já právě dobalila trénink v bazénu. Nechceš vyběhnout?',
      timestamp: '09:30'
    }
  ],
  natalie: [
    {
      id: 'n1',
      characterId: 'natalie',
      sender: 'character',
      text: 'Hele, dneska hraju v klubu! Dorazíš na pár drinků, nebo jsi spíš domácí povaleč? 😉',
      timestamp: '14:15'
    }
  ]
};
