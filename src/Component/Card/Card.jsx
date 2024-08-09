import Icon from "../Icon/Icon"
import "./Card.css"
import { memo } from "react"

function Card({player,onplay,index ,gameEnd}){
    
    let icon=<Icon/>
    if(player=='O')
        icon=<Icon name={"circle"}/>
    else if(player=='X')
        icon=<Icon name={"cross"}/>
     
    return (
   
    <div className="card" onClick={()=> !gameEnd&& player==" "&&onplay(index)} >
      {icon}
    </div>
    
    );
}
export default memo(Card);