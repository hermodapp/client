import "tailwindcss/tailwind.css";
import QRCode from "react-qr-code";
import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../components/services/authHeader";
import Dashboard from "../Navigations/Dashboard";

export default function QrCodeGenerator() {
  const [slug, setSlug] = useState("");
  const [qrCodes, setQrCodes] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  let base_url = "https://api.hermodapp.com/";

  const saveQrCode = () => {
    axios
      .get(base_url + "qr_code/store", {
        withCredentials: true,
        headers: authHeader(),
        params: {
          slug: slug,
          generation_data: "",
        },
      })
      .then((response) => {
        alert("QR Code saved to server!");
        setResponseMessage("QR saved to server successfully!");
        updateQrCodeList();
        return response.data;
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setResponseMessage("Slug has already existed in the database.");
        }
      });
  };

  const updateQrCodeList = () => {
    axios
      .get(base_url + "qr_codes", {
        withCredentials: true,
        headers: authHeader(),
      })
      .then((response) => {
        setQrCodes(response.data.qr_codes);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const renderCodes = qrCodes.map((qr: any, index) => {
    return <p>{qr.slug}</p>;
  });

  useEffect(() => {
    updateQrCodeList();
  }, []);
  return (
    <>
      <Dashboard />
      <body className="pt-4">
        <div className="container pl-72">
          <section className="text-gray-600 body-font">
            <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <div className="flex justify-center">
                  <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="slug"
                    type="text"
                    placeholder="Slug"
                  />
                  <button
                    onClick={saveQrCode}
                    className="ml-4 bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Save
                  </button>
                </div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="slug"
                >
                  slug
                </label>
                {responseMessage && (
                  <label
                    className="block text-nord11 text-sm font-bold mb-2"
                    htmlFor="slug"
                  >
                    {responseMessage}
                  </label>
                )}
              </div>
            </form>
            <div className="mt-4 mb-4 flex justify-center">
              <QRCode value={"https://hermodapp.com/load/" + slug} />
            </div>
            <div className="mt-4 mb-4 flex justify-center shadow-inner">
              <h1>Your previously created QR codes:</h1>
              <div className="mt-4 justify-center">{renderCodes}</div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}
