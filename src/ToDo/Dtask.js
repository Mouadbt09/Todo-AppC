import React, {useContext} from 'react'
import './s.css'
export default function DTask({v,del2}) {
  return (
    <div className='task completed-task'>
      <input type="text" value={v}  readOnly/><button className="null"> </button><button className='Delete' onClick={del2}><img src="trash.png" alt="" /></button>
    </div>
  )
}
