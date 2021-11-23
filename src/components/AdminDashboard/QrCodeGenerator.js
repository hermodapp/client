import "tailwindcss/tailwind.css";
import QRCode from "react-qr-code";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../services/authHeader";
import Dashboard from "../Navigations/Dashboard";

axiosRetry(Axios, { retries: 5 });

export default function QrCodeGenerator(props) {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Payload, setPayload] = useState("");
  const [FormId, setFormId] = useState("");
  const [Uuid, setUuid] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  let base_url = "https://test.hermodapp.com/";

  const saveQrCode = () => {
    let qrData = {
      phone_number: PhoneNumber,
      email: Email,
      payload: Payload,
    };

    Axios.post(base_url + "qr_code/generate", qrData, {
      headers: authHeader(),
    })
      .then((response) => {
        alert("QR Code saved to server!");
        setResponseMessage("QR saved to server successfully!");
        setUuid(response.data.id);
        return response.data;
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setResponseMessage("Slug has already existed in the database.");
        }
      });
  };

  const printQrCode = () => {
      var printContent = document.getElementById("printQR").innerHTML;

      document.body.innerHTML = printContent;
      window.print();
      props.history.push("/manageqr");
      window.location.reload();
  };

  return (
    <>
      <Dashboard />
      <header className="font-bold text-2xl text-nord0 pl-4"> Generate QR</header>
      <body className="pt-4 mx-36 md:w-4/5 lg:w-10/12">
        <div className="container">
          <section className="text-gray-600 body-font">
            <form className="flex justify-left bg-white shadow-sm rounded px-8 pt-6 mb-4 border">
              <div className="mb-4 w-full">
                <div className="flex flex-row content-center text-center w-full justify-between">
                  <label
                    className="flex text-gray-700 text-sm font-bold mb-2"
                    htmlFor="payload"
                  >
                    Payload
                  </label>
                  <input
                    value={Payload}
                    onChange={(e) => setPayload(e.target.value)}
                    className="mb-2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-4/5"
                    id="slug"
                    type="text"
                    placeholder="Payload"
                  />
                  <button
                    onClick={saveQrCode}
                    className="bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Save
                  </button>
                </div>
                <div className="flex flex-row">
                  <label
                      className="flex text-gray-700 text-sm font-bold mb-2 pr-4"
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
                      className="flex text-gray-700 text-sm font-bold mb-2 pr-4 pl-4"
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
                </div>
              </div>
            </form>
            <div className="mt-4 mb-4 flex justify-center flex-col">
              {responseMessage && (
                  <label
                    className="block text-nord11 text-sm font-bold mb-2"
                    htmlFor="success save!"
                  >
                    {responseMessage}
                  </label>
                )}
              <div id="printQR" className="flex justify-center">
                {Uuid !== "" && 
                  <QRCode value={"https://test.hermodapp.com/scan?id=" + Uuid} />
                }
              </div>
            </div>
            {Uuid !== "" &&
              <button
                onClick={printQrCode}
                className="bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Print
              </button>
            }
          </section>
        </div>
      </body>
    </>
  );
}
