// This is your test secret API key.
import {NextResponse} from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



export async function POST(req, res) {

    const { items } = req.body;
    console.warn('iteés', items)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 15000,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
    });
};

