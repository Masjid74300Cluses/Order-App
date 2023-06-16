import QRCode from "react-qr-code";

export default function Generator() {

    const values = []

    for (let index = 1; index < 111; index++) {
        const lien = "https://order-app-beige.vercel.app/tables/" + index;
        values.push(lien);
    }

    return <div>
        {values.map((link, index) => (
            <QRCode className="py-5"
                size={350}
                key={index}
                style={{
                    height: "auto", maxWidth: "100%", width: "100%"
                }}
                value={link}
                viewBox={`0 0 256 256`}
                bgColor={"#0c793e"}
                fgColor={'#FFFF'}
                title={"Table" + " " + (index + 1)}
            />
        ))}
    </div>
}
