import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { Typography, Button, Form, Input } from "antd";
import "tailwindcss/tailwind.css";
import Header from "../Navigations/Header";

const API_URL = "https://api.hermodapp.com/";
const { Title } = Typography;
const { TextArea } = Input;

const mockForm = {
  title: "Mock Form Title",
  fields: [
    {
      field_id: "d2955063-c809-4627-b002-0570ef350e16",
      caption: "What did you like the best about our cafeteria?",
      type: "text",
    },
    {
      field_id: "d2955063-c810-4627-b002-0570ef350e16",
      caption: "Bias in Loona",
      type: "text",
    },
    {
      field_id: "d2955063-c811-4627-b002-0570ef350e16",
      caption: "Best KPOP Group?",
      type: "text",
    },
    {
      field_id: "d2955063-c812-4627-b002-0570ef350e16",
      caption: "NICE",
      type: "text",
    },
  ],
};

export default function SubmitResponse(props) {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const formId = searchParams.get("id");
  const [Responses, setResponses] = useState([]);
  const [Questions, setQuestions] = useState([]);
  const [FormTitle, setFormTitle] = useState("");

  useEffect(() => {
    if (formId === null || formId === "") {
      props.history.push("/");
    }
    /*
    Axios.get(API_URL + `form/submit?id=${formId}`).then((response) => {
      console.log(response);
      setQuestions(response.data.fields);
      setFormTitle(mockForm.data.title);
    }); 
    
    */
    setQuestions(mockForm.fields);
    setFormTitle(mockForm.title);
    let res = [];
    Questions.map((q) => {
      res.push({
        field_id: q.field_id,
        content: "",
      });
    });
    setResponses(res);
    console.log(Responses);
  }, []);

  const submitForm = () => {
    let responseData = {
      responses: Responses,
    };
    /*
    Axios.post(API_URL + `form/submit?id=${formId}`, responseData).then((response) => {
      if (response.status === 200) {
        alert('Response submitted successfully')
        props.history.push('/')
      }
      else {
        alert('Failed to submit response.')
      }
    }); 
    */
    console.log(responseData);
  };

  const inputChange = (field_id, content) => {
    var k = Responses.findIndex((ele) => ele.field_id === field_id);
    Responses[k].content = content;
    setResponses(Responses);
  };

  return (
    <>
      <Header />

      <body className="h-auto w-full justify-center justify-items-center overflow-x-hidden flex flex-col">
        <section className="flex w-full justify-center">
          <div className="flex flex-col border rounded-b-lg w-1/2 h-auto">
            <div className="flex mx-4 my-4">
              <p
                id="ftitle"
                name="fname"
                placeholder="Example Form"
                className="h-10 border-b font-semibold text-2xl text-nord1 pl-2"
              >
                {FormTitle}
              </p>
            </div>
          </div>
        </section>
        <Form onSubmit={submitForm}>
          <section className="flex w-full justify-center">
            <div className="flex flex-col border rounded-lg w-1/2 h-auto mt-6 pb-4">
              {Questions.map((question) => (
                <div>
                  <div className="flex mx-2 my-2">
                    <p
                      id="ftitle"
                      name="fname"
                      className="h-10 border-b font-semibold text-lg mt-2 bg-nord6 w-1/2 ml-2 rounded-md pl-2 pt-1"
                    >
                      {question.caption}
                    </p>
                  </div>
                  <input
                    type={question.type}
                    id={question.field_id}
                    name="name"
                    className="flex font-medium ml-4 p-1 w-1/2 border-b justify-start text-left h-10"
                    onChange={(e) =>
                      inputChange(question.field_id, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="flex w-full justify-center">
            <button
              onClick={submitForm}
              className="border-2 rounded-lg bg-nord10 mx-2 my-6 py-2 px-2 text-nord6 border-nord1 font-bold w-20"
            >
              Submit
            </button>
          </section>
        </Form>
      </body>
    </>
  );
}
