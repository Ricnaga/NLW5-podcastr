import { createContext } from 'react'

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    isPlaying: boolean;
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
}


export const PlayerContext = createContext({} as PlayerContextData)