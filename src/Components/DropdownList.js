import React from "react"
import DropdownItem from "./DropdownItem"

export default function DropdownList ({data, chosen, onChose}) {

    return <ul className="dropdown-list">
        {data.map((item, index)=> {return <DropdownItem 
                                            item={item} 
                                            key={index}
                                            chosen={chosen}
                                            onChose={onChose}
                                             />})}
    </ul>
}