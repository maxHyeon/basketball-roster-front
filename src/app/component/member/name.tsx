interface Props {
  memberName: string,
  isEditing: boolean,
  onChange: Function
}
export function Name({ memberName, isEditing, onChange }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    onChange(newValue as string);
  }
  let name;


  if (isEditing) {
    name = (
      <>
        <input type="text" className="input input-xs input-bordered w-1/2 max-w-xs"
          value={memberName}
          onChange={handleChange}
        />
      </>
    );
  } else {
    name =
      <>
        <span className="label-text">{memberName}</span>
      </>
  }
  return (
    name
  )
}