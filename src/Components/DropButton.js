import React from "react";

export default function DropButton ({state, onDropped}) {
    return <button className="drop-btn"
            onClick={() => {onDropped(!state)}}
            >Account settings</button>
}