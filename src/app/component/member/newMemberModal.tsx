import { Member } from "@/app/member/memberContext";
import { registerMember } from "../../member/memberContext";
import { useState } from "react";
import { Position } from "postcss";
import { NIL_UUID } from "aws-rum-web/dist/cjs/sessions/SessionManager";




export function NewMemberModal() {
    const positions = ["PG", "SG", "SF", "PF", "C"];


    function positionChange(position: string) {
        memberPositionChanage(newMember.memberPositions);
        updatePosition(position)
    }

    function updatePosition(position: string) {
        const index = newMember.memberPositions.indexOf(position, 0);
        if (index == -1) {
            newMember.memberPositions.push(position)
            console.log(newMember.memberPositions)
            return
        }
        if (index > -1) {
            newMember.memberPositions.splice(index, 1);
            return
        }
    }

    const [newMember, setNewMember] = useState<Member>({
        id: 0, memberId: NIL_UUID, memberName: "", memberPositions: [], ableQuarters: 0
    });
    function handleNameInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewMember({ ...newMember, memberName: event.target.value })
    }

    function handleQurterInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewMember({ ...newMember, ableQuarters: parseInt(event.target.value) })
    }

    function memberPositionChanage(position:string[]) {
        setNewMember({...newMember, memberPositions: position})
    }
    function submitNewMember(){
        console.log("submitted!")
        registerMember(newMember);
    }

    return (
        <>
            <dialog id="newMemberModal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold w-full mb-2">회원명</h3>
                    <label className="form-control flex mb-2">
                        <div className="label">
                            <span className="label-text">회원명</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleNameInputChange} />
                    </label>
                    <label className="form-control w-full max-w-xs mb-2">
                        <div className="label">
                            <span className="label-text">포지션</span>
                        </div>
                        <div className="flex w-full">
                            {positions.map((position, index) => (
                                <div className="form-control" key={index}>
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{position}</span>
                                        <input type="checkbox" checked={newMember.memberPositions.includes(position)} onChange={() => { positionChange(position) }} className="checkbox checkbox-xs" />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs mb-2">
                        <div className="label">
                            <span className="label-text">쿼터수</span>
                        </div>
                        <input type="number" onChange={handleQurterInputChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>


                    <button className="btn" onClick={submitNewMember}>저장</button>
                </div>
            </dialog>
        </>
    )
}