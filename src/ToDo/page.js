import React, { useContext, useRef, useState } from 'react'
import Task from './task'
import './s.css'
// import DTask from './Dtask'
import {Cont1} from '../Context/mycontext'
import DTask from './Dtask'

export default function ToDo2() {
  const {t,addtask,setT,tasks,deleteTask,Done,dtasks,deleteTask2,show1,show2,shown,shown2,tt}=useContext(Cont1)
  return (
    <div className="c">

      
      <h1>To-Do List</h1>
      <hr /><br />
      <div className='input-field'>
        <input type="text"  onChange={(e)=>{setT(e.target.value);}} value={t} placeholder='Add Task'/> <button className='add-button' onClick={addtask}><img src="plus.png" width={"30px"} alt="" /></button>
      </div>
      <br />
      <div>
        <div className={ tt ?'titles':'none'}>
        <h1 onClick={show1} className={ shown2 ?'gery':'gery2'}><i>All</i></h1> <h1 onClick={show2} className={ shown ?'gery':'gery2'}><i>Completed</i></h1>
        </div>

        <hr className={ tt ?'titles':'none'}/>
        <div className="items">

            <div className={shown2 ? 'all-tasks' : 'none' }>
            {
                tasks.map((e)=>(
                        <Task  key={e.id} v={e.name} del={()=>deleteTask(e.id)} dn={()=>Done(e.id,e.name)}/>
                    ))
            }
            <br /><br /><br />
            <br />
            {
                    dtasks.map((e)=>(
                            <DTask  key={e.id} v={e.name} del2={()=>deleteTask2(e.id)}/>
                        ))
            }
            </div>

            <div className={shown ? 'completed' : 'none' }>
                {
                    dtasks.map((e)=>(
                            <DTask  key={e.id} v={e.name} del2={()=>deleteTask2(e.id)}/>
                        ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}
