import "tailwindcss/tailwind.css";
import QRCode from "react-qr-code";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../../components/services/authHeader";

import { Card } from "antd";
const { Meta } = Card;
axiosRetry(Axios, { retries: 5 });
const API_URL = "https://test.hermodapp.com/";

export default function QRCard(props) {
  const deleteQrCode = () => {
    Axios.get(API_URL + "qr_code/delete?id=" + props.uuid, {
      withCredentials: true,
      headers: authHeader(),
    })
      .then((response) => {
        alert("QR Code Sucessfully Deleted");
        window.location.reload();
      })
      .catch((error) => {
        alert("QR Code Deletion Failed");
      });
  };

  return (
    <Card
      hoverable={false}
      style={{ width: 256 }}
      cover={
        <QRCode
          value={"https://test.hermodapp.com/scan?id=" + props.uuid}
          size={256}
        />
      }
    >
      <Meta title={props.payload} description={props.email} />
      <p>{props.phoneNumber}</p>
      <button
        onClick={deleteQrCode}
        className="ml-4 bg-nord1 hover:bg-nord4 text-nord4 hover:text-nord1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Delete
      </button>
    </Card>
  );
}
