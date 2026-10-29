export interface Character {
  id: string;
  name: string;
  age: number;
  profession: string;
  archetype: string;
  description: string;
  avatarIcon: string;
  sympathy: number;
  trust: number;
  attraction: number;
  respect: number;
  status: string;
}

export const INITIAL_CHARACTERS: Character[] = [
  {
     id: 'viktorie',
     name: 'Viktorie',
     age: 27,
     profession: 'Podnikatelka v oblasti fashion',
     archetype: 'Sebevědomá podnikatelka',
     description: 'Úspěšná žena, která přesně ví, co chce. Oceňuje ambice, styl a upřímnost, nesnáší nerozhodnost.',
     avatarIcon: '💼',
     sympathy: 20,
     trust: 10,
     attraction: 25,
     respect: 15,
     status: 'Neznámá'
  },
  {
     id: 'eliskag',
     name: 'Eliška',
     age: 24,
     profession: 'Umělecká fotografka',
     archetype: 'Introvertní umělkyně',
     description: 'Kreativní duše s ironickým smyslem pro humor. Trvá déle, než si k někomu vybuduje důvěru, ale stojí to za to.',
     avatarIcon: '📷',
     sympathy: 15,
     trust: 10,
     attraction: 20,
     respect: 20,
     status: 'Neznámá'
  },
  {
     id: 'kristyna',
     name: 'Kristýna',
     age: 26,
     profession: 'Instruktorka fitness a plavání',
     archetype: 'Sportovně založená žena',
     description: 'Plná energie, miluje pohyb, přírodu a aktivní životní styl. Ocení, když udržíš její tempo.',
     avatarIcon: '⚡',
     sympathy: 25,
     trust: 15,
     attraction: 30,
     respect: 20,
     status: 'Neznámá'
  },
  {
     id: 'natalie',
     name: 'Natálie',
     age: 25,
     profession: 'Organizátorka akcí a DJka',
     archetype: 'Společenská dračice',
     description: 'Královna nočního života a festivalů. Nesnáší nudu a hledá někoho, s kým zažije nekončící zábavu.',
     avatarIcon: '🎵',
     sympathy: 30,
     trust: 10,
     attraction: 35,
     respect: 10,
     status: 'Neznámá'
  },
  {
     id: 'karolina',
     name: 'Karolína',
     age: 28,
     profession: 'Architektka',
     archetype: 'Inteligentní analytička',
     description: 'Ostrý intelekt, hluboké rozhovory a vytříbený vkus. Zaujmeš ji přehledem a originálním pohledem na svět.',
     avatarIcon: '📐',
     sympathy: 15,
     trust: 15,
     attraction: 20,
     respect: 30,
     status: 'Neznámá'
  },
  {
     id: 'sara',
     name: 'Sára',
     age: 23,
     profession: 'Cestovatelka a blogerka',
     archetype: 'Svobodomyslná cestovatelka',
     description: 'Vždy na odchodu, s batohem na zádech a hlavou v oblacích. Hledá parťáka na spontánní výlety.',
     avatarIcon: '✈️',
     sympathy: 25,
     trust: 10,
     attraction: 30,
     respect: 15,
     status: 'Neznámá'
  },
  {
     id: 'barbora',
     name: 'Barbora',
     age: 29,
     profession: 'Lékařská záchranářka',
     archetype: 'Empatická profesionálka',
     description: 'Má ráda věci pod kontrolou, je spolehlivá a dokáže naslouchat. Nesnáší hloupé řeči a přetvářku.',
     avatarIcon: '🩺',
     sympathy: 20,
     trust: 20,
     attraction: 20,
     respect: 35,
     status: 'Neznámá'
  },
  {
     id: 'simona',
     name: 'Simona',
     age: 25,
     profession: 'Baristka a studentka psychologie',
     archetype: 'Vnímavá pozorovatelka',
     description: 'Pracuje v kavárně, sleduje lidi a hned odhalí, jestli hraješ nějakou roli. Ocení upřímnost.',
     avatarIcon: '☕',
     sympathy: 30,
     trust: 20,
     attraction: 25,
     respect: 20,
     status: 'Neznámá'
  },
  {
     id: 'dominika',
     name: 'Dominika',
     age: 27,
     profession: 'Manažerka v jachtařském klubu',
     archetype: 'Elegantní aristokratka',
     description: 'Pohybuje se v exkluzivních kruzích u vody. Má vysoké nároky na styl, chování a společenskou úroveň.',
     avatarIcon: '⛵',
     sympathy: 10,
     trust: 10,
     attraction: 30,
     respect: 25,
     status: 'Neznámá'
  },
  {
     id: 'michaela',
     name: 'Michaela',
     age: 26,
     profession: 'Grafička a tatérka',
     archetype: 'Nezávislá rebelka',
     description: 'Tetování, vlastní názor, styl a rocková duše. Nezajímá ji, co si o ní myslí ostatní – jde si vlastní cestou.',
     avatarIcon: '🎨',
     sympathy: 25,
     trust: 15,
     attraction: 35,
     respect: 20,
     status: 'Neznámá'
  }
];
