'use client'
import { useState, useEffect, useRef } from 'react';
import { getGameData } from '../../game/gameContext';
import { Game } from '../../game/gameContext'


export default function GameTable() {
  const [games, setGame] = useState<Game[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProduct() {
      setGame(await getGameData());
      setIsLoading(false);
    }
    fetchProduct()
  }, [])


  function handleEditButtonClick() {
    if (isEditing) {
      setIsEditing(false)
      return 0
    } else {
      setIsEditing(true)
      return 0
    }
  }

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
                <button className="btn btn-accent">detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}