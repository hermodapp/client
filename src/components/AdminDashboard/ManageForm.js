import "tailwindcss/tailwind.css";
import React, {useState, useEffect} from 'react'
import Dashboard from "../Navigations/Dashboard";
import {AiOutlineSearch} from "react-icons/ai"
import {GrFormNext, GrFormPrevious} from "react-icons/gr"
import Axios from "axios";
import axiosRetry from "axios-retry";
import authHeader from "../services/authHeader";
import {BsTrash} from "react-icons/bs";

const API_URL = "https://test.hermodapp.com/";
axiosRetry(Axios, { retries: 5 });

export default function ManageForm(props) {
    const [formlist, setForms] = useState([]);

    useEffect(() => {
        Axios.get(API_URL + `form/view`, {
          headers: authHeader(),
        }).then((response) => {
          setForms(response.data.forms);
        });
      }, []);

      const deleteForm = () => {
        Axios.get(API_URL + "form/delete?id=" + props.form_id, {
          withCredentials: true,
          headers: authHeader(),
        })
          .then((response) => {
            alert("Form Sucessfully Deleted");
            window.location.reload();
          })
          .catch((error) => {
            alert("Form Deletion Failed");
          });
      };

      const renderForms = formlist.map((form, index) => {
        return (
            <>
                <div className="flex flex-row border-b w-full py-3 hover:bg-nord6">
                    <div className="flex flex-row w-full hover:bg-nord6">
                        <input type="checkbox" id="select1" name="selectcheckbox" className="h-4 w-4 mt-1 ml-4"></input>
                        <text className="text-sm font-semibold pr-4 pointer-events-none pl-2 ml-3">{form.title} </text>
                        <a href={`/form/view?id=${form.form_id}`} className="text-sm pr-11 ml-3"> view form</a>
                    </div>
                    <BsTrash className="cursor-pointer mx-4 h-6 w-6" onClick={deleteForm}> Delete </BsTrash>
                </div>
            </>
        );
      });
    
    return(
        <>
        <Dashboard/>
        <body className="flex flex-row justify-center">
        <section className="border rounded-2xl mx-24 bg-gradient-to-r from-nord8 via-nord9 to-nord10 h-auto md:w-full lg:w-3/5">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Manage Form</title>
            </head>
            <h1 className="lg:text-2xl md:text-2xl sm:text-base pb-5 text-nord16 font-semibold mt-4">Forms</h1>
            <body className="h-auto justify-center flex mb-10 mx-4 w-auto border flex-col rounded-t-lg">
                <section>
                    <div className="flex flex-row h-10 border-b w-full pl-4 rounded-t-lg">
                        <input type="checkbox" id="selectall" name="selectcheckbox" className="h-4 w-4 mt-3"></input>
                        <div className="w-4/5 border border-nord5 hover:border-nord1 rounded-lg my-1 ml-4 flex">
                            <AiOutlineSearch className="h-5 w-5 mt-1 ml-2"/>
                            <input type="searchbox" id="searchform" name="searchbox" className="h-6 w-full pl-2 border-none rounded-lg outline-none" placeholder="Search in form"></input>
                        </div>
                        <button className="border border-nord1 h-8 w-12 rounded-lg ml-2 mt-1 bg-nord3 text-nord6 md:mr-4 lg:mr-16"> Search</button>
                        <div className="flex flex-row mt-2 mr-1">
                            <GrFormPrevious className="h-6 w-6 cursor-pointer text-nord1 border rounded-lg mx-1"/>
                            <GrFormNext className="h-6 w-6 cursor-pointer text-nord1 border rounded-lg"/>
                        </div>
                    </div>
                </section>
                <section className="justify-center w-full">
                    <div className="flex flex-col w-full overflow-x-hidden">
                        {formlist && renderForms}
                        {formlist === [] && 
                            <div className="flex flex-row border-b w-full py-3 hover:bg-nord6">
                                <input type="checkbox" id="select1" name="selectcheckbox" className="h-4 w-4 mt-1 ml-4"></input>
                                <text className="text-sm font-semibold pr-4 pointer-events-none pl-2 ml-3">No Forms Available </text>
                            </div>
                        }
                    </div>
                </section>
            </body>
            </section>
            </body>
        </>
    )
};