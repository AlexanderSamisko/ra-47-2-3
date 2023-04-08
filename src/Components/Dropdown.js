import React, {useState} from "react";
import DropButton from "./DropButton";
import DropdownList from "./DropdownList";

export default function Dropdown () {
    const [chosen, setChosen] = useState(null);
    const [isDroped, setDroped] = useState(false); // отдельно прописывать каждый стейт мне нравится больше.
    const menuElements = ["Profile information" , "Change Password", "Become Pro", "Help", "Somebody Help", "Log out"];

    return <div className="dropdown-module">
        <DropButton state={isDroped} onDropped={setDroped}/>
        {isDroped ? <DropdownList data={menuElements} chosen={chosen} onChose={setChosen}/> : false }
        </div>
}