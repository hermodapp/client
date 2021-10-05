import React, {useState} from "react";
import { NavLink, Link} from "react-router-dom";
import "tailwindcss/tailwind.css";

export default function SubmitForm() {
    const [value, setValue] = useState("");

    const handleLocation = (event: any) => {
        setValue(event.currentTarget.value)
    }
      return (
          <>
            <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p className="w-2/3 mx-auto leading-relaxed text-base">We are sorry for the inconvenience. Please submit a service request form to alert our employees to further assist your inconvenience.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-1/2">
                    <div className="relative">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                        <label htmlFor="location" className="leading-7 test-sm text-gray-600">Location: </label>
                        <select className="rounded border" value={value} onChange={handleLocation}>
                            <option value="none"></option>
                            <option value="restroom">Restroom</option>
                            <option value="other">Other</option>
                        </select>
                        {value === "other" &&
                            <input type="location" id="location" name="location" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        }
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button className="mt-6 inline-flex text-nord1 bg-nord7 border-0 py-2 px-6 focus:outline-none hover:bg-nord8 hover:text-nord3 rounded text-lg">Submit</button>
                    </div>
                </div>
                </div>
            </div>
            </section>
          </>
       )

}
