import react,{ createContext, useRef, useState } from "react";
import {v4} from 'uuid'
export const Cont1=createContext()


export default function Mycontext({children}) {
    const [tasks,settasks]=useState([
      
    ])
    const [t,setT]=useState('')
    const [dtasks,setdtasks]=useState([])
    const [shown,setshown]=useState(true)
    const [shown2,setshown2]=useState(false)
    const [tt,settt]=useState(false)
    
    function show1(){
      setshown(false)
      setshown2(true)
    }

    function show2(){
      setshown(true)
      setshown2(false)
    }


    function addtask(){
        if(t.length==0){
          alert('Add task')
        }
        else{
          let table=[...tasks,{id:v4(),name:t,finished:false}]
          settasks(table)
          setT('')
        }
        setshown(false)
        setshown2(true)
        settt(true)
    }

    function deleteTask(idg){
        let newtasks=tasks.filter((t)=>{
          return t.id!=idg
        })
        settasks(newtasks)
    }

    function deleteTask2(idg){
      let newtasks=dtasks.filter((t)=>{
        return t.id!=idg
      })
      setdtasks(newtasks)
  }

    function Done(idg,ng){
      let newtasks=tasks.filter((t)=>{
        return t.id!=idg
      })
      settasks(newtasks)
      let table=[...dtasks,{id:idg,name:ng,finished:true}]
      setdtasks(table)
    }
  return (
    <Cont1.Provider value={{t,addtask,setT,tasks,deleteTask,Done,dtasks,deleteTask2,show1,show2,shown,shown2,tt}}>
        {children}
    </Cont1.Provider>
  )
}
