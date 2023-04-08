import React from 'react'

export default function DropdownItem ({item, chosen, onChose}) {
    const chosenStyle = {
        backgroundColor: "#505050",
        color: "grey",
        fontWeight: 800
    }

    return <li 
            className="dropdown-item" 
            tabIndex={"0"}
            style={chosen === item ? chosenStyle : null}
            onClick={()=>{chosen === item ? onChose(null) : onChose(item) } }
            >
                {item}
            </li> 
}