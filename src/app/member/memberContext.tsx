export interface Member {
    id: number;
    name: string;
    position: Array<string>;
    qurter: number;
}



const members: Member[] = [
    { id: 1, name: "박민현", position: ["SF", "PF"], qurter: 6 },
    { id: 2, name: "엄동용", position: ["SG", "SF"], qurter: 5 },
    { id: 3, name: "조덕희", position: ["SG"], qurter: 7 },
    { id: 4, name: "김태훈", position: ["PG", "SG"], qurter: 4 }
];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getMemberData() {
    // await delay(3000);
    return members as Member[];
}