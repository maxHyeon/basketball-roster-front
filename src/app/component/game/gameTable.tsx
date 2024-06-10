'use client'
import { useState, useEffect, useRef } from 'react';
import { getGameData } from '../../game/gameContext';
import { Game } from '../../game/gameContext'
import { useRouter } from 'next/navigation';


export default function GameTable() {
  const [games, setGame] = useState<Game[]>([]);
  const [_, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProduct() {
      setGame(await getGameData());
      setIsLoading(false);
    }
    fetchProduct()
  }, [])

  return (
    <div>
      <table className="table table-auto">
        <thead>
          <tr>
            <th>경기명</th>
            <th>종류</th>
            <th>경기장소</th>
            <th>경기날짜</th>
            <th>경기상세</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr className="h-20" key={game.id}>
              <td className="w-1/4">
                {game.gameTitle}
              </td>
              <td className="w-1/4">
                {game.gameType}
              </td>
              <td className="w-1/4">
                {game.gameLocation}
              </td>
              <td className="w-1/4">
                {/* {game.gameDate} */}
              </td>
              <td className="w-1/4">
                <button className="btn btn-accent" onClick={()=>router.push(`/game/${game.id}`)}>detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}