import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Header from "../Navigations/Header";
const API_URL = "https://api.hermodapp.com/";

const mockResponse = {
  title: "Mock Form Title",
  questions: {
    "7eef1849-19ee-47bf-8f9e-52ce1f3d1914": "Best CS Class",
    "52f9b11d-77d9-442d-ab69-d5d19a01ff19": "UA vs Auburn",
    "300b4dab-823c-4028-88de-eedfcb8cbd8d": "Football vs Basketball",
    "3df72a38-ef86-479a-b6e7-ca20b2b71d40": "Online vs In-person",
  },
  responses: [
    {
      response_id: "cd9237f9-0a86-4e97-a322-eb5e79a26f6b",
      replies: [
        {
          form_input_id: "300b4dab-823c-4028-88de-eedfcb8cbd8d",
          content: "Football",
        },
        {
          form_input_id: "3df72a38-ef86-479a-b6e7-ca20b2b71d40",
          content: "In-person",
        },
        {
          form_input_id: "52f9b11d-77d9-442d-ab69-d5d19a01ff19",
          content: "UA",
        },
        {
          form_input_id: "7eef1849-19ee-47bf-8f9e-52ce1f3d1914",
          content: "CS 495",
        },
      ],
    },
    {
      response_id: "23d04728-2d4e-48fb-b17a-5e5670d9646f",
      replies: [
        {
          form_input_id: "300b4dab-823c-4028-88de-eedfcb8cbd8d",
          content: "Basketball",
        },
        {
          form_input_id: "3df72a38-ef86-479a-b6e7-ca20b2b71d40",
          content: "Online",
        },
        {
          form_input_id: "52f9b11d-77d9-442d-ab69-d5d19a01ff19",
          content: "UA",
        },
        {
          form_input_id: "7eef1849-19ee-47bf-8f9e-52ce1f3d1914",
          content: "CS 403",
        },
      ],
    },
  ],
};

export default function ViewResponse(props) {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const formId = searchParams.get("id");
  const [FormTitle, setFormTitle] = useState("");
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    if (formId === null || formId === "") {
      props.history.push("/");
    }
    /*
    Axios.get(API_URL + `form/view?id=${formId}`).then((response) => {
      console.log(response);
      setQuestions(response.data.fields);
      setFormTitle(mockForm.data.title);
    }); 
    
    */
    setFormTitle(mockResponse.title);
    let questions = [];
    let newResponses = mockResponse.responses;
    Object.keys(mockResponse.questions).map((key) => {
      let data = {
        id: key,
        content: mockResponse.questions[key],
        responses: {},
      };
      questions.push(data);
    });
    for (var x = 0; x < questions.length; x++) {
      for (var i = 0; i < newResponses.length; i++) {
        var k = newResponses[i].replies.findIndex(
          (ele) => ele.form_input_id === questions[x].id
        );
        questions[x].responses[newResponses[i].response_id] =
          newResponses[i].replies[k].content;
      }
    }

    setQuestions(questions);
  }, []);

  return (
    <>
      <Header />
      <body className="h-auto w-full justify-center justify-items-center overflow-x-hidden flex flex-col">
        <section className="flex w-full justify-center">
          <div className="flex flex-col border rounded-b-lg w-1/2 h-auto pb-6">
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

        <section className="flex w-full justify-center">
          <div className="flex flex-col border rounded-lg w-1/2 h-auto mt-6 pb-4">
            {Questions.map((question) => (
              <div>
                <div className="flex mx-2 my-2">
                  <p
                    id="ftitle"
                    name="fname"
                    className="h-10 border-b font-semibold text-lg mt-2 bg-nord6 w-1/2 ml-2 rounded-md pl-2"
                  >
                    {question.content}
                  </p>
                </div>

                {Object.keys(question.responses).map((responseId) => (
                  <>
                    <div className="flex mx-4 mt-2">
                      <p
                        type="text"
                        id="text1"
                        name="textbox1"
                        placeholder="Issues:"
                        className="font-semibold ml-2 w-1/2 border-b text-left"
                      >
                        {" "}
                        Answer: {question.responses[responseId]}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            ))}
          </div>
        </section>
      </body>
    </>
  );
}
