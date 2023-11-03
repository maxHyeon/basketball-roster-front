'use client'
import { useState, useEffect, useRef } from 'react';
import { getMemberData } from './memberContext';
import { Member } from './memberContext';

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

function NameContent({ memberName, isEditing, onChange }) {

  function handleChange(event) {
    const newValue = event.target.value;
    onChange(newValue);
  }
  let nameContent;


  if (isEditing) {
    nameContent = (
      <>
        <input type="text" className="input input-xs input-bordered w-1/2 max-w-xs"
          value={memberName}
          onChange={handleChange}
        />
      </>
    );
  } else {
    nameContent =
      <>
        <span className="label-text">{memberName}</span>
      </>
  }
  return (
    nameContent
  )

}

function positionChange() {

}

function PositionContent({ memberPosition, isEditing, handleChange }) {
  let positionContent;

  if (isEditing) {
    positionContent = (
      <>
        <div className="flex w-full">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">PG</span>
              <input type="checkbox" checked="checked" onChange={() => { positionChange() }} className="checkbox checkbox-xs" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">SG</span>
              <input type="checkbox" checked="checked" onChange={() => { positionChange() }} className="checkbox checkbox-xs" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">SF</span>
              <input type="checkbox" checked="checked" onChange={() => { positionChange() }} className="checkbox checkbox-xs" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">PF</span>
              <input type="checkbox" checked="checked" onChange={() => { positionChange() }} className="checkbox checkbox-xs" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">C</span>
              <input type="checkbox" checked="checked" onChange={() => { positionChange() }} className="checkbox checkbox-xs" />
            </label>
          </div>
        </div>
      </>
    );
  } else {
    positionContent =
      <>
        <span className="badge badge-md">SF</span>
        <span className="badge badge-md">PF</span>
        <span className="badge badge-md">C</span>
      </>
  }
  return (
    positionContent
  )

}

function QurterContent({ memberQurter, isEditing, onChange }) {
  function handleChange(event) {
    const newValue = event.target.value;
    onChange(newValue);
  }

  let qurterContent;

  if (isEditing) {
    qurterContent = (
      <>
        <input type="number" placeholder="Type here" className="input input-xs input-bordered w-1/2 max-w-xs" value={memberQurter} onChange={handleChange} />
      </>
    );
  } else {
    qurterContent =
      <>
        <span className="label-text"> {memberQurter} </span>
      </>
  }
  return (
    qurterContent
  )

}

export default function MembersTable() {
  const childInpuRef = useRef(null)
  var [members, setMembers] = useState([]);
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


  function handleNameInputChange(index, newValue) {
    const updatedMembers = [...members]
    updatedMembers[index].name = newValue
    setMembers(updatedMembers)
  }

  function handleQurterInputChange(index, newValue) {
    const updatedMembers = [...members]
    updatedMembers[index].qurter = newValue
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
                <NameContent memberName={member.name} isEditing={isEditing} onChange={(newValue) => handleNameInputChange(index, newValue)}></NameContent>
              </td>
              <td className="w-1/4">
                <PositionContent memberPosition={member.position} isEditing={isEditing}></PositionContent>
              </td>
              <td className="w-1/4">
                <QurterContent memberQurter={member.qurter} isEditing={isEditing} onChange={(newValue) => handleQurterInputChange(index, newValue)} ></QurterContent>
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