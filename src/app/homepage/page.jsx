import './home.scss'

import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <main className='container-home'>
            <title>Home</title>


            <p className='texte'>
                Commandez en toute simplicité pour vos événements spéciaux avec <strong>Order App Aid</strong> : la solution rapide et pratique pour satisfaire tous les appétits, en un simple flash de QR code.
            </p>
            <Link id='link' href="about_us">About Us</Link>
        </main>
    )
}