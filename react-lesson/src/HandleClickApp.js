import React from "react"

function clickMe() {
    console.log("I was clicked")
}

function HandleClickApp() {
    return (
        <div>
            <img onMouseOver={ () => console.log("Hovered!")}
            src="http://www.fillmurray.com/200/300" />
            <br />
            <br />
            <button onClick={clickMe}> Click</button>
        </div>
    )
}

export default HandleClickApp