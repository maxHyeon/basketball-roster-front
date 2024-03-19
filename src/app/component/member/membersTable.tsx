'use client'
import { useState, useEffect, useRef } from 'react';
import { getMemberData } from '../../member/memberContext';
import { Member } from '../../member/memberContext';
import { Name } from './name';
import { MemberPosition } from './memberPosition';
import { Qurter } from './qurter';

export default function MembersTable() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProduct() {
      setMembers(await getMemberData());
      setIsLoading(false);
    }
    fetchProduct()
  }, [])

  function handleNameInputChange(index: number, newValue: string) {
    const updatedMembers = [...members]
    updatedMembers[index].name = newValue
    setMembers(updatedMembers)
  }

  function handleQurterInputChange(index: number, newValue: number) {
    const updatedMembers = [...members]
    updatedMembers[index].qurter = newValue
    setMembers(updatedMembers)
  }

  function memberPositionChanage(position: Array<string>, index: number) {
    const updatedMembers = [...members]
    updatedMembers[index].position = position
    setMembers(updatedMembers)
  }

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
            <th>Name</th>
            <th>Position</th>
            <th>Qurter</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr className="h-20" key={member.id}>
              <td className="w-1/4">
                <Name memberName={member.name} isEditing={isEditing} onChange={(newValue: string) => handleNameInputChange(index, newValue)}></Name>
              </td>
              <td className="w-1/4">
                <MemberPosition member={member} memberIndex={index} isEditing={isEditing} onChange={memberPositionChanage} ></MemberPosition>
              </td>
              <td className="w-1/4">
                <Qurter memberQurter={member.qurter} isEditing={isEditing} onChange={(newValue: number) => handleQurterInputChange(index, newValue)} ></Qurter>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-outline" onClick={handleEditButtonClick}> 편집 </button>
      <button className="btn btn-outline"> 저장 </button>
    </div>
  );
}