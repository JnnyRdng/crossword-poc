import "./Cell.css";

export default function Cell({ number, value }) {

  const style = value === "." ? "black" : "white";

  const handleInput = (evt) => {
    evt.target.value = evt.target.value.slice(-1);
    console.log(evt.target.value);
  }

  return (
    <div className={`${"cell"} ${style}`}>
      <div className="label">
        {number}
      </div>
      {value !== "." &&
        // <div className="char">{ }</div>
        <input onInput={(event) => handleInput(event)} maxLength={2} type="text" className="char" defaultValue={value} />
      }
    </div>
  )
}