import Navbar from "../components/Navbar";
import { useState } from "react";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import QRCode from "react-qr-code";

const ID = "2KEO573vl8vvP9AFmZLVImy0mlY";
const SECRET = "e543c05b7c6ae7d24bc23f751ef44f93";

const auth = "Basic " + Buffer.from(ID + ":" + SECRET).toString("base64");

const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});

export default function store() {
    const [fileUrl, updateFileUrl] = useState(``);

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            const added = await client.add(file);
            const url = `https://infura-ipfs.io/ipfs/${added.path}`;
            updateFileUrl(url);
            // console.log("IPFS URI: ", url);
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-400 to-yellow-400 items-center">
                <div id="navbar">
                    <Navbar />
                </div>
                <div className="flex flex-col h-full w-11/12 mx-auto bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100">
                    <div className="min-h-screen py-10 justify-center items-center px-32">
                        <h1 className="text-7xl font-medium pb-16">
                            Upload your Document
                        </h1>
                        <input type="file" onChange={onChange} />
                        {fileUrl && (
                            <div className="py-4">
                                <QRCode
                                    size={25}
                                    style={{
                                        height: "256px",
                                        maxWidth: "256px",
                                        width: "256px",
                                        margin: "10px"
                                    }}
                                    value={fileUrl}
                                    viewBox={`0 0 256 256`}
                                />
                                <div className="flex flex-row px-10">
                                    <a
                                        href={fileUrl}
                                        className="px-4"
                                        target="_blank"
                                    >
                                        Go to your file
                                    </a>
                                    <img
                                        src="copy.svg"
                                        className="w-6 h-6"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                fileUrl
                                            );
                                            alert("Copied!");
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
