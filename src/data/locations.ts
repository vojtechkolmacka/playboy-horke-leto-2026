export interface LocationData {
  id: string;
  name: string;
  category: 'social' | 'nightlife' | 'shopping' | 'travel' | 'relax' | 'home';
  x: number; // Pozice X v %
  y: number; // Pozice Y v %
  description: string;
  icon: string;
}

export const GAME_LOCATIONS: LocationData[] = [
  { id: 'centrum', name: 'Centrum města', category: 'social', x: 42, y: 44, description: 'Tepající srdce města, historické náměstí a ideální místo pro náhodná setkání.', icon: '🏛️' },
  { id: 'kavarna', name: 'Kavárna', category: 'social', x: 26, y: 46, description: 'Příjemné prostředí u vody, ideální na rande, klidný pokec nebo kávu.', icon: '☕' },
  { id: 'restaurace', name: 'Restaurace', category: 'social', x: 61, y: 49, description: 'Skvělé jídlo, výběrová vína a atmosféra pro večerní večeře ve dvou.', icon: '🍽️' },
  { id: 'nocni_klub', name: 'Noční klub', category: 'nightlife', x: 53, y: 63, description: 'Hlasitá hudba, plný parket, koktejly a divoká letní noc.', icon: '🎵' },
  { id: 'privatni_salon', name: 'Privátní salon', category: 'nightlife', x: 71, y: 64, description: 'Exkluzivní a diskrétní prostor pro ty, kdo hledají maximální soukromí.', icon: '💋' },
  { id: 'muj_byt', name: 'Můj byt', category: 'home', x: 13, y: 69, description: 'Tvoje domácí základna. Místo pro odpočinek, správu telefonu a přípravu na akce.', icon: '🏠' },
  { id: 'nakupni_centrum', name: 'Nákupní centrum', category: 'shopping', x: 75, y: 44, description: 'Obchody s oblečením, stylové doplňky a vše pro vylepšení tvého vzhledu.', icon: '🛒' },
  { id: 'letiste', name: 'Letiště', category: 'travel', x: 16, y: 84, description: 'Brána do světa. Odtud vyrážejí lety na zahraniční dovolené.', icon: '✈️' },
  { id: 'plaz', name: 'Pláž', category: 'relax', x: 74, y: 17, description: 'Písečné pobřeží přehrady, slunce, plavky a letní pohoda.', icon: '🏖️' },
  { id: 'rozhledna', name: 'Rozhledna', category: 'relax', x: 83, y: 7, description: 'Výhled na celé jezero a okolní krajinu při západu slunce.', icon: '🗼' }
];
