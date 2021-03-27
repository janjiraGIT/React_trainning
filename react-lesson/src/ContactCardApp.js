import React from 'react'
import CatsData from "./CatsData"
import ContactCards from "./ContactCards"

function ContactCardApp() {
    const catItems = CatsData.map(catsData => <ContactCards key={catsData.id} catsData={catsData}/>)

    return (
        <div>
            {catItems}
        </div>
    )
}

export default ContactCardApp