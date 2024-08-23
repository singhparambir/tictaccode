import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        // setIsEditing(isEditing ? false : true);  // here if isediting is true then setisediting false hojega , je isediting false hai tan setisediting true hojega
        // instead of doing this i can also do setIsEditing(!isEditing);
        // BUT EVEN INSTEAD OF THE ABOVE METHOD WE WILL USE A FUNCTION 
        // CORRECT WAY 
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) { // the event function
        setPlayerName(event.target.value);

    }
    // Conditional Rendering.

    let editablePlayerName = <span className="player-name">{playerName}  </span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} /> // target is input and value is value of that input
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick} >{isEditing ? 'Save' : 'Edit'}</button>
        </li>


    );
}

