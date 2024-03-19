interface Props {
  memberQurter: number,
  isEditing: boolean,
  onChange: Function
}

export function Qurter({ memberQurter, isEditing, onChange }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue: number = Number(event.target.value);
    onChange(newValue);
  }

  let qurter;

  if (isEditing) {
    qurter = (
      <>
        <input type="number" placeholder="Type here" className="input input-xs input-bordered w-1/2 max-w-xs" value={memberQurter} onChange={handleChange} />
      </>
    );
  } else {
    qurter =
      <>
        <span className="label-text"> {memberQurter} </span>
      </>
  }
  return (
    qurter
  )

}