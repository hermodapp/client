import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosRetry from "axios-retry";
import { useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Header from "../Navigations/Header";
import authHeader from "../services/authHeader";

const API_URL = "https://test.hermodapp.com/";
axiosRetry(Axios, { retries: 3 });

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

    Axios.get(API_URL + `form/view?id=${formId}`, {
      headers: authHeader(),
    }).then((response) => {
      setFormTitle(response.data.title);
      let questions = [];
      let newResponses = response.data.responses;
      Object.keys(response.data.questions).map((key) => {
        let data = {
          id: key,
          content: response.data.questions[key],
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
    });
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
