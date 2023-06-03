import React from 'react'
export default function Die(props){
	const[hit,setHit]=React.useState(false);
     const float=[]
	for(let i=0; i<props.value; i++){
      float.push(i)
	}

	const nfloat= float.map(float=>{
		
		return < div className="dot1"   key={float}> </div>
	})
let style={
     backgroundColor:props.isHeld?"lightgreen":"",
     
	}
	
	

	return(
       <div className="die" style={style} onClick={props.Handle}>
          
          {nfloat}
          
       </div>


		)
}