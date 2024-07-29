import { NIL_UUID } from 'aws-rum-web/dist/cjs/sessions/SessionManager';
import axios, { AxiosResponse } from 'axios';
import { UUID } from 'crypto';

export interface Member {
    id: number;
    memberId: UUID ;
    memberName: string;
    memberPositions: Array<string>;
    ableQuarters: number;
}



const members: Member[] = [
    { id: 1,memberId:NIL_UUID, memberName: "박민현", memberPositions: ["SF", "PF"], ableQuarters: 6 },
    { id: 2,memberId:NIL_UUID, memberName: "엄동용", memberPositions: ["SG", "SF"], ableQuarters: 5 },
    { id: 3, memberId:NIL_UUID,memberName: "조덕희", memberPositions: ["SG"], ableQuarters: 7 },
    { id: 4, memberId:NIL_UUID,memberName: "김태훈", memberPositions: ["PG", "SG"], ableQuarters: 4 }
];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export async function getMemberData() {
    const response = await axios.get<Member[]>('http://localhost:8080/members').then().catch((error) => {
        console.error('Error get players data:', error);
    });
    return response && response.data  ;
}

export function registerMember(member: Member) {
    const cwr_u = document.cookie.replace(/(?:(?:^|.*;\s*)cwr_u\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.post('http://localhost:8080/members', member,{headers: {
        'Content-Type': 'application/json',
        'cwr_u': cwr_u
      }}).then((response) => {
        window.location.href = '/member';
    }).catch((error) => {
        console.error('Error sending player data:', error);
    });
}