import React, {useContext} from 'react'
import './s.css'
export default function Task({v,del,dn}) {
  return (
    <div className='task'>
      <input type="text" value={v}  readOnly/><button className='Delete' onClick={del}><img src="trash.png" alt="" /></button><button className='complete-btn' onClick={dn}><i>&#x2713;</i></button>
    </div>
  )
}
