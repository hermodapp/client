import "tailwindcss/tailwind.css";
import QRCode from "react-qr-code";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../../components/services/authHeader";
import Dashboard from "../Navigations/Dashboard";

axiosRetry(Axios, { retries: 5 });

export default function QrCodeGenerator() {
  const [slug, setSlug] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Payload, setPayload] = useState("");
  const [FormId, setFormId] = useState("");
  const [qrCodes, setQrCodes] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  let base_url = "https://test.hermodapp.com/";

  const saveQrCode = () => {
    let qrData = {
      phone_number: PhoneNumber,
      email: Email,
      payload: Payload,
      form_id: FormId,
    };

    Axios.post(base_url + "qr_code/generate", qrData, {
      headers: authHeader(),
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
    Axios.get(base_url + "qr_codes", {
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
            <form className="flex justify-center bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <div className="flex justify-center flex-col content-center text-center">
                  <label
                    className="flex text-gray-700 text-sm font-bold mb-2"
                    htmlFor="slug"
                  >
                    Slug
                  </label>
                  <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="mb-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="slug"
                    type="text"
                    placeholder="Slug"
                  />
                  <label
                    className="flex text-gray-700 text-sm font-bold mb-2"
                    htmlFor="slug"
                  >
                    Phone Number
                  </label>
                  <input
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mb-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <label
                    className="flex text-gray-700 text-sm font-bold mb-2"
                    htmlFor="slug"
                  >
                    Email
                  </label>
                  <input
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                  <label
                    className="flex text-gray-700 text-sm font-bold mb-2"
                    htmlFor="slug"
                  >
                    FormId
                  </label>
                  <input
                    value={FormId}
                    onChange={(e) => setFormId(e.target.value)}
                    className="mb-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="formId"
                    type="text"
                    placeholder="Form Id"
                  />
                  <button
                    onClick={saveQrCode}
                    className="bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Save
                  </button>
                </div>

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
