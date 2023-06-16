import QRCode from "react-qr-code";

export default function Generator() {

    // const values = [`https://order-app-beige.vercel.app/tables/${}`]

    const value = "https://order-app-beige.vercel.app/tables/1"
    for (let index = 1; index < 111; index++) {
        const lien = "https://order-app-beige.vercel.app/tables/"
        const element = lien + index;
        console.log(element);

    }

    return <div>
        <QRCode
            size={350}
            style={{
                height: "auto", maxWidth: "100%", width: "100%"
            }}
            value={value}
            viewBox={`0 0 256 256`}
            bgColor={"#0c793e"}
            fgColor={'#FFFF'}
            title={"table number"}
        />
    </div>
}
