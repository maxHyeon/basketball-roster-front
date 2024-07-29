'use client'
import { useState, useEffect, useRef } from 'react';
import { getGameData } from '../../game/gameContext';
import { Game } from '../../game/gameContext'
import GameCard from './gameCard';
import React from 'react';
import { useRouter } from 'next/navigation';
import { GameInfoEditModal } from './gameInfoEditModal';

export default function UpcommingGames() {
  const [games, setGame] = useState<Game[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(true);
    async function fetchProduct() {
      setGame(await getGameData());
      setIsLoading(false);
    }
    fetchProduct()
  }, [])

  function getUpcommingGames(games: Array<Game>) {
    const today = new Date();
    const upcomingGames = games.filter(game => game.gameDate >= today);
    return upcomingGames.slice(0, 3);
  }

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-2xl antialiased font-light font-mono">Upcomming Games</p>
        <button className="btn btn-secondary" onClick={() => (document.getElementById('gameInfoEditModal') as HTMLDialogElement ).showModal()}>새 게임 시작</button>
        {/* <a href="#my_modal_8" className="btn btn-secondary">새 게임 시작</a> */}
      </div>
      <div className="sm:hidden md:flex lg:inline-block"></div>
      <div className="flex w-full">
        {getUpcommingGames(games).map((game, index) => (
          <React.Fragment key={game.id}>
            <GameCard game={game} index={index} />
            {index !== getUpcommingGames(games).length - 1 && <div className="divider lg:divider-horizontal"></div>}
          </React.Fragment>
        ))}
      </div>
      <GameInfoEditModal />
    </div>
  );
}