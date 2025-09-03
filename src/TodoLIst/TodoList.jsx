'user client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
function TodoList(){
const [lists,setLists]=useState([]);
const [newtask,setNewtask]=useState("");
useGSAP(()=>{
        gsap.from(".input-class",{
            duration:1,
            opacity:0

        })
},[])
function SetNewTask(event){
        setNewtask(event.target.value);
}
function AddNewTask(){
        if(newtask!=""){
         setLists(l=>[...l,newtask]);
        setNewtask("");
        }
        
}
function DeletTask(i){
       const newList = lists.filter((__,index)=>i!==index);
        setLists(newList);
}





    return (
< div className="h-screen w-screen ">
    <div className=" grid  px-0 justify-center  ">
      
            <div className="grid sm:flex justify-center  sm:w-screen   ">
                <input value={newtask} type="text" onChange={()=>SetNewTask(event)} placeholder="Add new Task" maxLength={45} className=" input-class "  />
                <button onClick={AddNewTask} className=" button-class ">ADD</button>
            </div>
            <ul className="sm:flex flex-col  items-center ">               
                { lists.map((list,index)=> <li onClick={()=>DeletTask(index)} className="li-class  " key={index}>{list} <span className="cursor-pointer">✖</span> </li> )} 
            </ul>
    </div>
</div>
    )







}
export default TodoList;