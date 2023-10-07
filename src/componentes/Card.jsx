import React from 'react'

export default function Card(props) {
  return (<>
  
            
                <div className="contimg">
                 <img src={props.link}   />
                 </div>
          
                  <div className="textd">
                  <h3>{props.title}</h3>
                  </div>
            </>
            



        
      
  )
}
