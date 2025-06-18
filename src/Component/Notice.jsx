import React from 'react'

const Notice = () => {
  return (
    <div className='Notice-board'>
        <h4 style={{textAlign:'center', color: "#e4ff00"}}>নোটিশ বোর্ড</h4> 
        <ul>
            <li> <a href="/notice.pdf" target='_blank' rel='noopener noreferer' style={{color:'white', textDecoration:'none'}}>Notice for Eid-Ul-Azhar</a>
              </li>
            <li><a href="/exam-25.pdf" target='_blank' rel='noopener noreferer' style={{color:'white', textDecoration:'none'}} >Notice for Mid Term Exam</a>
              </li>
        </ul>
        
    </div>
  )
}

export default Notice