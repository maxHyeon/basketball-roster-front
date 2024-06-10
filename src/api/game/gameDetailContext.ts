export interface GameDetail {
    id: number;
    gameTitle: string;
    gameDescribe: string;
    gameType: string;
    gameLocation: string;
    attendMembers: Array<attendMember>;
    gameDate: Date;
}

export interface attendMember {
    id: number;
    name: string;
}


const gameDetails: GameDetail[] = [
    { id: 0, gameTitle: "3월 1주차 자체전", gameType: "자체전", gameDescribe: "ABC", attendMembers: [{id:0,name:"민현"}, {id:1,name:"제임스"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-02T21:00:00') },
    { id: 1, gameTitle: "3월 2주차 교류전", gameType: "자체전", gameDescribe: "ABC", attendMembers: [{id:0,name:"민현"}, {id:1,name:"레너드"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-13T21:00:00') },
    { id: 2, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: [{id:0,name:"요키치"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-19T21:00:00') },
    { id: 3, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: [{id:0,name:"너키치"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-20T21:00:00') },
    { id: 4, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: [{id:0,name:"돈치치"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-25T21:00:00') },
    { id: 5, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: [{id:0,name:"민현"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-26T21:00:00') },
    { id: 6, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "", attendMembers: [{id:0,name:"민현"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-21T21:00:00') },
    { id: 7, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "", attendMembers: [{id:0,name:"민현"}], gameLocation: "강남구민체육관", gameDate: new Date('2024-03-21T21:00:00') },
];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getGameDetailData(gameId : number) {
    // await delay(3000);
    return gameDetails.filter((game)=>game.id===gameId)[0] || {} ;
}