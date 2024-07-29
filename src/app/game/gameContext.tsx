export interface Game {
    id: number;
    gameTitle: string;
    gameDescribe: string;
    gameType: string;
    gameLocation: string;
    attendMembers: Array<string>;
    gameDate: Date;
}

const games: Game[] = [
    { id: 0, gameTitle: "3월 1주차 자체전", gameType: "자체전", gameDescribe: "ABC", attendMembers: ["민현", "준현"], gameLocation: "강남구민체육관", gameDate: new Date('2024-08-01T21:00:00') },
    { id: 1, gameTitle: "3월 2주차 교류전", gameType: "자체전", gameDescribe: "ABC", attendMembers: ["동용", "제임스"], gameLocation: "강남구민체육관", gameDate: new Date('2024-08-02T21:00:00') },
    { id: 2, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-08-03T21:00:00') },
    { id: 3, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-09-20T21:00:00') },
    { id: 4, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-10-25T21:00:00') },
    { id: 5, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "123", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-11-26T21:00:00') },
    { id: 6, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-11-21T21:00:00') },
    { id: 7, gameTitle: "3월 3주차 연습게임", gameType: "자체전", gameDescribe: "", attendMembers: ["레너드"], gameLocation: "강남구민체육관", gameDate: new Date('2024-11-21T21:00:00') },
];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getGameData() {
    // await delay(3000);
    return games as Game[];
}