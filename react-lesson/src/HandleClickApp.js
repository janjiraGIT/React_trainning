import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function HandleClickApp(props) {
    return (
        <div>
            <img onMouseOver={ () => console.log("Hovered!")}
            src="http://www.fillmurray.com/200/300" />
            <br />
            <br />
            <button onClick={handleClick}> Click</button>
        </div>
    )
}

export default HandleClickApp