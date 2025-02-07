import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdited, setIsEdited] = useState(false);

  function handleEditClick() {
    setIsEdited((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEdited) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      {editablePlayerName}
      <span className="player">
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdited ? "Save" : "Edit"}</button>
    </li>
  );
}
