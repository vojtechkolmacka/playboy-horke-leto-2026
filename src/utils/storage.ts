import { get, set } from 'idb-keyval';
import { INITIAL_CHARACTERS, Character } from '../data/characters';
import { INITIAL_MESSAGES, ChatMessage } from '../data/messages';

export interface GameSaveData {
  money: number;
  energy: number;
  maxEnergy: number;
  day: number;
  hour: number;
  characters: Character[];
  messages: Record<string, ChatMessage[]>;
}

const SAVE_KEY = 'playboy_save_data_2026';

export async function saveGameData(data: GameSaveData): Promise<void> {
  try {
    await set(SAVE_KEY, data);
  } catch (err) {
    console.error('Chyba při ukládání hry:', err);
  }
}

export async function loadGameData(): Promise<GameSaveData | null> {
  try {
    const data = await get<GameSaveData>(SAVE_KEY);
    return data || null;
  } catch (err) {
    console.error('Chyba při načítání hry:', err);
    return null;
  }
}

export function getDefaultGameData(): GameSaveData {
  return {
    money: 5000,
    energy: 100,
    maxEnergy: 100,
    day: 1,
    hour: 12,
    characters: INITIAL_CHARACTERS,
    messages: INITIAL_MESSAGES,
  };
}
