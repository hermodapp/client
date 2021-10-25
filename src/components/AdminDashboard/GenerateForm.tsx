import "tailwindcss/tailwind.css";
import Dashboard from "../Navigations/Dashboard";
import {AiOutlinePlusSquare, AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'


export default function ManageForm() {
    return(
        <>
        <Dashboard/>
        <body className="h-auto w-full justify-center justify-items-center overflow-x-hidden flex flex-col">
            <section className="flex w-full justify-center">
                <div className="flex flex-col border rounded-b-lg w-3/4 h-auto pb-6">
                    <div className="flex mx-4 my-4">
                        <input type="text"  id="ftitle" name="fname" placeholder="Example Form" className="h-10 border-b font-semibold text-2xl text-nord10 pl-2"></input>
                    </div>
                    <div className="flex mx-4 mt-2">
                        <input type="text" id="fmsg" name="fmessage" placeholder="Message:   e.g. We are sorry for the inconvenience...." className="h-12 border-b w-full pl-2 overflow-scroll resize-y"></input>
                    </div>
                </div>
            </section>
            {/**<section className="flex w-full justify-center">
                <div className="flex flex-col border rounded-lg w-3/4 h-auto mt-6 pb-4">
                    <div className="flex mx-2 my-2">
                        <input type="text"  id="ftitle" name="fname" placeholder="Example Form" className="h-10 border-b font-semibold text-lg mt-2 bg-nord6 w-1/2 ml-2 rounded-md pl-2"></input>
                    </div>
                    <div>
                        <div className="flex mx-4 mt-2">
                            <input type="checkbox" id="option1" name="checkbox1" value="option1" className="mt-1"/>
                            <input type="text" id="op1text" name="textbox1" placeholder="Option 1" className="font-semibold ml-2 w-4/5 border-b"/>
                        </div>
                        <div className="flex mx-4 mt-2">
                            <input type="checkbox" id="option2" name="checkbox2" value="option2" className="mt-1"/>
                            <input type="text" id="op2text" name="textbox2" placeholder="Option 2" className="font-semibold ml-2 w-4/5 border-b"/>
                            <AiOutlinePlus className="cursor-pointer h-6 w-6 ml-2"/>
                            <AiOutlineClose className="cursor-pointer h-6 w-6 ml-2"/>
                        </div>
                    </div>
                </div>
            </section>**/}
            <section className="flex w-full justify-center">
                <div className="flex flex-col border rounded-lg w-3/4 h-auto mt-6 pb-4">
                    <div className="flex mx-2 my-2">
                        <input type="text"  id="ftitle" name="fname" placeholder="Subject" className="h-10 border-b font-semibold text-lg mt-2 bg-nord6 w-1/2 ml-2 rounded-md pl-2"></input>
                    </div>
                    <div>
                        <div className="flex mx-4 mt-2">
                            <input type="text" id="text1" name="textbox1" placeholder="Issues:" className="font-semibold ml-2 w-4/5 border-b"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex w-full justify-center">
                <AiOutlinePlusSquare className="cursor-pointer h-8 w-8 mt-2"/>
            </section>
            <section className="flex w-full justify-center">
                <button className="border-2 rounded-lg bg-nord10 mx-2 my-6 py-2 px-2 text-nord6 border-nord1 font-bold w-20"> Save</button>
            </section>
        </body>
        </>
    )
}