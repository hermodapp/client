import "tailwindcss/tailwind.css";
import Dashboard from "../Navigations/Dashboard";

export default function Setting() {
    return(
        <>
        <Dashboard/>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Setting</title>
            </head>
            <body className="h-screen pl-12 overflow-x-hidden">
                <h1 className="lg:text-2xl md:text-2xl sm:text-base pb-5 text-nord2">Settings</h1>
                <div className="mb-4 flex border mx-4 shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-nord8 via-nord9 to-nord10">
                    <div className="w-full overflow-x-hidden">
                        <div className="flex pb-4 pt-3 pl-4">
                            <text className="text-lg font-bold pointer-events-none text-nord0">Account Info</text>
                        </div>
                        <div className="flex border-b justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Name </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>
                        </div>
                        <div className="flex justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Password </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex border mx-4 shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-nord8 via-nord9 to-nord10">
                    <div className="w-full overflow-hidden">
                        <div className="flex pb-4 pt-3 pl-4">
                            <text className="text-lg font-bold pointer-events-none text-nord0">Contact Info</text>
                        </div>
                        <div className="flex border-b justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Email </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>                        </div>
                        <div className="flex justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Phone </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>                        </div>
                    </div>
                </div>
                <div className="mb-4 flex border rounded-2xl mx-4 shadow-md hover:shadow-lg bg-gradient-to-r from-nord8 via-nord9 to-nord10">
                    <div className="w-full overflow-hidden">
                        <div className="flex pb-4 pt-3 pl-4">
                            <text className="text-lg font-bold pointer-events-none text-nord0">Payment Info</text>
                        </div>
                        <div className="flex border-b justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Card Type </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>                        </div>
                        <div className="flex border-b justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Card Number </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>                        </div>
                        <div className="flex justify-evenly w-full py-3 hover:bg-nord6">
                            <text className="text-sm font-semibold pr-11 pointer-events-none">Subscription Plan </text>
                            <input className="hover:shadow-lg border rounded w-2/5"></input>
                            <button className="border bg-nord6 rounded px-2 hover:shadow-lg hover:bg-nord9">edit</button>                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}