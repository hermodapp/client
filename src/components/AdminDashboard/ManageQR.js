import "tailwindcss/tailwind.css";
import Dashboard from "../Navigations/Dashboard";
import QRCard from "../QRCode/QRCard";
import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../services/authHeader";

const API_URL = "https://test.hermodapp.com/";
axiosRetry(Axios, { retries: 5 });

export default function ManageQR() {
  const [QRCodes, setQRCodes] = useState([]);

  useEffect(() => {
    Axios.get(API_URL + `qr_codes`, {
      headers: authHeader(),
    }).then((response) => {
      setQRCodes(response.data.qr_codes);
    });
  }, []);

  const renderCards = QRCodes.map((qr, index) => {
    return (
      <Col lg={8} md={12} xs={24}>
        <QRCard
          payload={qr.payload}
          uuid={qr.id}
          phoneNumber={qr.phone_number}
          email={qr.email}
        />
      </Col>
    );
  });
  return (
    <>
      <Dashboard />
      <body className="pl-24 h-screen">
        <div className="w-4/5 my-12 mx-auto">
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      </body>
    </>
  );
}
