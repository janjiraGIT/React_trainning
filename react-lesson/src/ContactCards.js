import React from 'react'

function ContactCards(props) {
    console.log(props)
    return (
        <div>
            < img src={props.catsData.imgUrl} />
            <h3>{props.catsData.name}</h3>
            <p>email: {props.catsData.email}</p>
        </div>
    )
}

export default ContactCards