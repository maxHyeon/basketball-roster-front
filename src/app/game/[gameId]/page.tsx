'use client'
import { GameDetail, getGameDetailData } from "@/api/game/gameDetailContext";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function IndexPage() {
    const defaultGameInfo = () => {
        return { id: 0, gameTitle: "", gameType: "", gameDescribe: "", attendMembers: [{ id: 0, name: "" }], gameLocation: "", gameDate: new Date() } as GameDetail
    };
    const [gameInfo, setGameInfo] = useState<GameDetail>(defaultGameInfo);
    const [_, setIsLoading] = useState(false);
    const router = useRouter();
    const param = useParams();

    useEffect(() => {
        setIsLoading(true);
        async function fetchProduct() {
            setGameInfo(await getGameDetailData(Number(param.gameId)));
            setIsLoading(false);
        }
        fetchProduct()
    }, [])
    function gameJoinOnclickHandler(){
        const sessionUserData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(sessionUserData)
        const updatedGameInfo:GameDetail = {
            ...gameInfo,
            attendMembers: [...gameInfo.attendMembers, { id: 3, name: sessionUserData }]
        }
        setGameInfo(updatedGameInfo);
    }

    const gameInfoComponents = useCallback(() => {
        return (
            <>
                <div className="flex justify-between mb-6">
                    <p className="text-2xl antialiased font-light font-mono"> {gameInfo.gameTitle} </p>
                    <div>
                        <div className="badge badge-secondary">{gameInfo.gameTitle}</div>
                        <div className="badge badge-accent">{gameInfo.gameDate.toISOString().split('T')[0]}</div>
                        <div className="badge badge-accent">{gameInfo.gameLocation}</div>
                    </div>
                </div>
                <p className="text-2xl antialiased font-light font-mono mb-6"> {gameInfo.gameDescribe} </p>
                <div className="card bg-base-100 shadow-xl">
                    <table className="table table-auto">
                        <thead>
                            <tr>
                                <th>이름</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gameInfo.attendMembers.map((attendMember, index) => (
                                <tr className="" key={attendMember.id}>
                                    <td className="" >
                                        <div className="flex justify-between" >
                                            <div className="align-bottom" >
                                                <p >{attendMember.name}</p>
                                            </div>
                                            <div>
                                                <button className="btn btn-accent">참가 취소</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div>
                <button className="btn btn-accent mt-6" onClick={()=>gameJoinOnclickHandler()} >경기 참가</button>
                <button className="btn btn-accent mt-6 ml-3" >변경</button>
            </>
        )
    }, [gameInfo])

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl" >
            {gameInfoComponents()}
        </main >
    )
}