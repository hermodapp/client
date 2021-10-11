import "tailwindcss/tailwind.css";
import QRCode from "react-qr-code";
import { useState, useEffect } from "react";
import axios from "axios";

export default function QrCodeGenerator() {
    const [slug, setSlug] = useState("");
    const [qrCodes, setQrCodes] = useState([]);
    let base_url = "https://api.hermodapp.com/";
    // let base_url = "http://localhost:8000/";

    const logIn = () => {
        axios.get(base_url + "login", {
            withCredentials: true,
            auth: {
                username: "russ",
                password: "russ",
            }
        }).then((response) => {
            alert("Logged in!")
        }).catch((error) => {
            alert(error);
        });
    };

    const saveQrCode = () => {
        axios.get(base_url + "qr_code/store", {
            withCredentials: true,
            params: {
                slug: slug,
                generation_data: ""
            }
        }).then(response => {
            alert("QR Code saved to server!");
            updateQrCodeList();
            return response.data
        }).catch(error => {
            alert(error);
        });
    }

    const updateQrCodeList = () => {
        axios.get(base_url + "qr_codes", {
            withCredentials: true,
        }).then(response => {
            setQrCodes(response.data);
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        updateQrCodeList();
    });
    return (
        <>
        <section>
            <div className="flex items-center justify-end">
                <button
                    onClick={logIn}
                    className="mb-4 mr-4 bg-nord7 hover:bg-nord4 text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Log Me In
                </button>
            </div>
        </section>
        <section className="text-gray-600 body-font">
            <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <div className="flex justify-center">
                        <input
                            value={slug} onChange={(e) => setSlug(e.target.value)}
                            className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="slug" type="text" placeholder="Slug" />
                        <button
                            onClick={saveQrCode}
                            className="ml-4 bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Save
                        </button>
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                        slug
                    </label>
                </div>
            </form>
            <div className="mt-4 mb-4 flex justify-center">
                <QRCode value={"https://hermodapp.com/load/" + slug} />
            </div>
            <div className="mt-4 mb-4 flex justify-center shadow-inner">
                <h1>Your previously created QR codes:</h1>
                <div className="mt-4 justify-center">
                    {qrCodes}
                </div>
            </div>
        </section >
    </>
    );
}
