import React from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import Show from './Show'
import "./tenzis.css"
export default function Main(){
     const [tenzis, setTenzis]= React.useState(false)
	 const [parts,setParts]= React.useState(rollDice())
	 const[rolls, setRolls]= React.useState(0)
   	
   function rollDice(){
     
    let num2=[]
   	for(let i=0; i<10; i++){
      let n= Math.ceil(Math.random()*6) 
      num2.push({randNo:n,isHeld:false, id:nanoid()})
     
   	}
    
   	return num2
   	 
   }
   React.useEffect(()=>{
  let go= parts.every(part=> part.isHeld)
  let hoho=[]
   for(let i=0; i<parts.length; i++){
   	let x= parts[0].randNo;
   	hoho.push( x==parts[i].randNo?  true:false)
   }
   let coho= hoho.every(ho=> ho)
   console.log(hoho)
  
  if(go&& coho){
  	setTenzis(true)
  	console.log('you won')
  }
   },[parts])

  function roller(){
  	if(tenzis==false){
  	setRolls(rolls=>rolls+1)	
  	setParts(parts=>{
  		return parts.map(lik=>{
  			return lik.isHeld? lik:{randNo:Math.ceil(Math.random()*6), isHeld:false, id:nanoid() }
  		})
  	})
  }
  else{
  	window.alert(`it took you ${rolls} rolls`)
  	setRolls(0)
  	setTenzis(false)
  	setParts(rollDice())
  }
  }
   
   function check(id){
   setParts(parts=>{
   	return parts.map(obj=>{
   		return obj.id== id? {...obj, isHeld:!obj.isHeld}:obj
   	})
   })
   }
   
   function newgame(){

    setRolls(0)
    setTenzis(false)
    setParts(rollDice())

   }
  
  


	
	const kk= parts.map(num=>{
		return  <Die value={num.randNo}   key={num.id} isHeld={num.isHeld} Handle={()=>check(num.id)} /> 
	})


	return(
       <div className='m-cont'>
        {tenzis && <Confetti width="1000px" height="500px" style={{marginLeft:"150px"}} />}
       {tenzis && <Show newgame={newgame} score={rolls} />}
        {!tenzis && 
        <div className="borde">
         
        <div className="sub_bord">
       
       
        <h1>Tenzis</h1>

        <p className="talk">Roll until all dices are the same. Click  each die <br/> to freeze it as its current value between role </p>
        <div className="tiny">
        {kk}
           
         </div>
         <button className="roll"  onClick={roller}>{tenzis==true? "New Game":"Roll"}</button>
        </div>



        </div>
        }
         </div>

		)
}