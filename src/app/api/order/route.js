import {NextResponse} from "next/server";

const sendConfirmationEmail = (commande) => {
    // Requête pour envoyer l'e-mail de confirmation de commande
    return fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({ commande }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const storeOrderData = (commande) => {
    // Requête pour stocker les informations de commande en base de données
    return fetch('/api/store-order', {
        method: 'POST',
        body: JSON.stringify({ commande }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const printTicket = (commande) => {
    // Requête pour imprimer le ticket thermique
    return fetch('/api/print-ticket', {
        method: 'POST',
        body: JSON.stringify({ commande }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


export async function POST(req, res) {
    const { items } = req.body;
    // save order  get number send email
    /*const responseEmail = await sendConfirmationEmail(formData);
    const responseStore = await storeOrderData(formData);
    const responsePrint = await printTicket(formData);*/


    return NextResponse.json({
        items: JSON.stringify(items)
    });
}
