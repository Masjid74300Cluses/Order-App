import QRCode from "react-qr-code";

export default function Generator() {

    const values = []

    for (let index = 1; index < 111; index++) {
        const lien = "https://order-app-beige.vercel.app/tables/" + index;
        values.push(lien);
    }

    return <div className="flex flex-wrap ">
        {values.map((link, index) => (
            <QRCode className="py-5 px-4"
                size={300}
                key={index}
                style={{
                    height: "auto", maxWidth: "33%", width: "33%"
                }}
                value={link}
                viewBox={`0 0 256 256`}
                bgColor={"white"}
                fgColor={'black'}
                title={"Table" + " " + (index + 1)}
            />
        ))}
    </div>
}
