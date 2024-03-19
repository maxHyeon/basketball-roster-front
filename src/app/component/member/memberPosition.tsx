import { Member } from "@/app/member/memberContext";

const positions = ["PG", "SG", "SF", "PF", "C"];

interface Props {
  member: Member,
  memberIndex: number,
  isEditing: boolean,
  onChange: Function
}

export function MemberPosition({ member, memberIndex, isEditing, onChange }: Props) {
  let memberPosition;

  function positionChange(position: string, memberIndex: number) {
    updatePosition(position)
    onChange(member.position, memberIndex);
  }

  function updatePosition(position: string) {
    const index = member.position.indexOf(position, 0);
    if (index == -1) {
      member.position.push(position)
      return
    }
    if (index > -1) {
      member.position.splice(index, 1);
      return
    }


  }

  if (isEditing) {
    memberPosition = (
      <>
        <div className="flex w-full">
          {positions.map((position, index) => (
            <div className="form-control" key={index}>
              <label className="label cursor-pointer">
                <span className="label-text">{position}</span>
                <input type="checkbox" checked={member.position.includes(position)} onChange={() => { positionChange(position, memberIndex) }} className="checkbox checkbox-xs" />
              </label>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    memberPosition =
      <>
        {member.position.map((position, index) => (
          <span className="badge badge-md" key={index}>{position}</span>
        ))}
      </>
  }
  return (
    memberPosition
  )

}