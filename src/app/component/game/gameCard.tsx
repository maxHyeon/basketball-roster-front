import { Game } from "@/app/game/gameContext";

interface Props {
    game: Game,
    index: number
}

export default function GameCard({ game, index }: Props) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={"game-card-images/" + index + ".jpg"} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {game.gameTitle}
                    <div className="badge badge-secondary">{game.gameType}</div>
                </h2>
                <p>{game.gameDescribe}</p>
                <div>
                    <div className="badge badge-accent">{game.gameDate.toISOString().split('T')[0]}</div>
                    <div className="badge badge-accent">{game.gameLocation}</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Detail</button>
                </div>
            </div>
        </div>
    );
}