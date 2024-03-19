import GameTable from '../component/game/gameTable';
import UpcommingGames from '../component/game/upcommingGames';
// export const dynamic = 'force-dynamic';


export default function IndexPage() {

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <UpcommingGames />
            <div className="large:hidden md:flex lg:inline-block"></div>
            <details className="collapse bg-base-100">
                <summary className="collapse-title text-xl font-medium">All Games </summary>
                <div className="collapse-content">
                    <GameTable />
                </div>
            </details>
        </main>
    );
}