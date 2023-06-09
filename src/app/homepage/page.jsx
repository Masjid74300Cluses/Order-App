import './home.scss'

import React from 'react'

export default function Home() {
    return (
        <main className='container-home'>
            <title>Home</title>
            <div className='paragraphe'>
                <p className='texte'>
                    Commandez en toute simplicité pour vos événements spéciaux avec Order App Aid : la solution rapide et pratique pour satisfaire tous les appétits, en un simple flash de QR code.
                </p>
                <ul>
                    <li>
                        <a id='link' href="about_us">About Us</a>
                    </li>
                </ul>
            </div>
        </main>
    )
}