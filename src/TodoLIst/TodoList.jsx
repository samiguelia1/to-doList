'user client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
function TodoList(){
const [lists,setLists]=useState([]);
const [newtask,setNewtask]=useState("");
useGSAP(()=>{
        gsap.fromTo(".input-class",{
            opacity:0

        },{
            duration:1,
            opacity:1
            
        })
},[])
useGSAP(()=>{
        gsap.fromTo(".button-class",{
            opacity:0,
           

        },{
            duration:2,
            opacity:1,
            delay:0.5
        })
},[])
useGSAP(()=>{
        gsap.fromTo("li",{
            y:50,
            duration:2,
            ease:"sine.inOut"

            
        },{
            y:0,

            
        })
},[lists])

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
                { lists.map((list,index)=> <li  className="li-class " key={index}>{list} <span onClick={()=>DeletTask(index)} className="cursor-pointer">✖</span> </li> )} 
            </ul>
    </div>
</div>
    )







}
export default TodoList;