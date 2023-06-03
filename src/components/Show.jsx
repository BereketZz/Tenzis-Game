export default function Show(props){

	return(
        <div className="show-holder">
        
        
      <div className="mshow">

    
      <p>High score: --Rolls</p>
      <p>Your score: {props.score} Rolls</p>
      <button className="okay" onClick={props.newgame} >New Game</button>

      </div>
      </div>



		)
}
//
//