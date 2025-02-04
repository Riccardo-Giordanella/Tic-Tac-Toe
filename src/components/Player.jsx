import {useState} from 'react';

export default function Player({name, symbol}){
    const [isEdited, setIsEdited] = useState(false);

    function handleEditClick(){
        setIsEdited((editing) => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEdited) {
        playerName = <input type="text" required value={name} />
    }

    return (
        <li>
            {playerName}
            <span className="player">
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdited ? "Save" : "Edit"}</button>
        </li>
    );
}