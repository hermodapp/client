import "tailwindcss/tailwind.css";
import {useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {Select, Switch, MenuItem, IconButton, AccordionDetails, AccordionSummary, Accordion, Typography} from '@material-ui/core'
import Dashboard from "../Navigations/Dashboard";
import {AiOutlinePlusSquare, AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import {BsRecord2, BsTrash, BsThreeDotsVertical} from 'react-icons/bs'
import {MdSubject, MdShortText, MdCropOriginal} from 'react-icons/md'
import {BiImageAdd, BiCheckboxChecked} from 'react-icons/bi'
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
import { useParams } from "react-router";
import axios from "axios";

function GenerateForm() {

    const [questions,setQuestions] =useState([]);
    const [documentName,setDocName] =useState("Untitled Form");  
    const [documentDescription,setDocDesc] =useState(""); 
    const [questionType,setType] =useState("text");
    const [questionRequired,setRequired] =useState("true"); 
    let { id } = useParams();

    console.log(id)
    useEffect(()=>{
        var newQuestion = {questionText: "Question",answer:false,questionType:"text", answervalue: "", open: true, required:false}

           setQuestions([...questions, newQuestion])
      
    },[])

    function addMoreQuestionField(){
        expandCloseAll();

        setQuestions(questions=> [...questions, {questionText: "Question", questionType:"text", answervalue: "", open: true, required:false}]);
    }

    function saveForm(){
        
    }

    function addQuestionType(i,type){
        let qs = [...questions];  
        console.log(type)
        qs[i].questionType = type;
        
        setQuestions(qs);
        
      }
    
  
    function copyQuestion(i){
      expandCloseAll()
      let qs = [...questions]
      var newQuestion = qs[i]

      setQuestions([...questions, newQuestion])

    }
    
      function deleteQuestion(i){
        let qs = [...questions]; 
        if(questions.length > 1){
          qs.splice(i, 1);
        }
        setQuestions(qs)
      }

      function handleAnswerValue(text,i){
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].optionText = text;
        setQuestions(optionsOfQuestion);
      }

      function handleQuestionValue(text, i){
        var optionsOfQuestion = [...questions];
        optionsOfQuestion[i].questionText = text;
        setQuestions(optionsOfQuestion);
      }

      function onDragEnd(result) {
        if (!result.destination) {
          return;
        }
        var itemgg = [...questions];
        const itemF = reorder(
          itemgg,
          result.source.index,
          result.destination.index
        );
        setQuestions(itemF);
    }
    
    function requiredQuestion(i){
        var requiredQuestion = [...questions];
      
          requiredQuestion[i].required =  ! requiredQuestion[i].required
        
        console.log( requiredQuestion[i].required+" "+i);
        setQuestions(requiredQuestion)
      }

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    function expandCloseAll(){
        let qs = [...questions]; 
         for (let j = 0; j < qs.length; j++) {  
          qs[j].open = false;
         }
         setQuestions(qs);
      }
    
      function handleExpand(i){
        let qs = [...questions]; 
        for (let j = 0; j < qs.length; j++) {
          if(i ===j ){
            qs[i].open = true;
     
          } else{
            qs[j].open = false;
           }
        }
         setQuestions(qs);
      }

      function questionsUI(){
        return  questions.map((ques, i)=> (
            <section onChange={()=>{handleExpand(i)}} expanded={questions[i].open} className="flex w-full justify-center">
                    <div className="flex flex-col border rounded-lg w-3/4 h-auto mt-6 pb-4 border-nord9">
                        <div className="flex flex-row justify-between mx-2 my-2">
                            <input type="text" id="ftitle" name="fname" placeholder={ques.questionText} value={ques.questionText} onChange={(e)=>{handleQuestionValue(e.target.value,i)}} className="h-10 border-b font-semibold text-lg mt-2 focus:bg-nord6 w-1/2 ml-2 pl-2 outline-none"></input>
                            <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                                <BsTrash />
                            </IconButton>
                        </div>
                        <div>
                            <div className="flex mx-4 mt-2">
                                <input type={ques.questionType} id="text1" name="textbox1" placeholder="Issues:" value={ques.answervalue} onChange={(e)=>{handleAnswerValue(e.target.value,i)}} className="font-semibold ml-2 w-4/5 border-b outline-none"/>
                                <IconButton>
                                    <span style={{color:"#5f6368",fontSize:"13px"}}>Required </span> <Switch name="checkedA" color="primary" checked={ques.required} onClick={()=>{requiredQuestion(i)}}/>
                                    <MoreVertIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </section>
         )
        )
      }

    return(
        <>
        <Dashboard/>
        <body className="h-auto w-full justify-center justify-items-center overflow-x-hidden flex flex-col">
            <section className="flex w-full justify-center">
                <div className="flex flex-col border rounded-b-lg w-3/4 h-auto pb-6 border-t-8 border-nord9">
                    <div className="flex mx-4 my-4">
                        <input type="text"  id="ftitle" name="fname" placeholder={documentName} value={documentName} onChange={(e)=>{setDocName(e.target.value)}} className="h-10 border-b font-semibold text-2xl text-nord10 pl-2 outline-none focus:bg-nord6"></input>
                    </div>
                    <div className="flex mx-4 mt-2">
                        <input type="text" id="fmsg" name="fmessage" placeholder="Message:   e.g. We are sorry for the inconvenience...." value={documentDescription} onChange={(e)=>{setDocDesc(e.target.value)}} className="h-12 border-b w-full pl-2 overflow-scroll resize-y outline-none"></input>
                    </div>
                </div>
            </section>
            <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {questionsUI()}

                            {provided.placeholder}
                        </div>
                        )} 
                    </Droppable>
                </DragDropContext>
            <section className="flex w-full justify-center">
                <AiOutlinePlusSquare  onClick={addMoreQuestionField} className="cursor-pointer h-8 w-8 mt-2"/>
            </section>
            <section className="flex w-full justify-center">
                <button className="border-2 rounded-lg bg-nord10 mx-2 my-6 py-2 px-2 text-nord6 border-nord1 font-bold w-20"> Save</button>
            </section>
        </body>
        </>
    )
}

export default GenerateForm

/**<section className="flex w-full justify-center">
        <div className="flex flex-col border rounded-lg w-3/4 h-auto mt-6 pb-4 border-nord9">
            <div className="flex mx-2 my-2">
                <input type="text"  id="ftitle" name="fname" placeholder="Subject" className="h-10 border-b font-semibold text-lg mt-2 focus:bg-nord6 w-1/2 ml-2 pl-2 outline-none"></input>
            </div>
            <div>
                <div className="flex mx-4 mt-2">
                    <input type="text" id="text1" name="textbox1" placeholder="Issues:" className="font-semibold ml-2 w-4/5 border-b outline-none"/>
                </div>
            </div>
        </div>
    </section>**/

/**<section className="flex w-full justify-center">
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
</section>**/