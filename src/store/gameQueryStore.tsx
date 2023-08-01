import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { GameQuery } from "./../services/gameService";

interface GameStoreType {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameStoreType>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId, searchText: "" }
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId, searchText: "" }
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder, searchText: "" }
    })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } }))
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Game Store", useGameQueryStore);

export default useGameQueryStore;
