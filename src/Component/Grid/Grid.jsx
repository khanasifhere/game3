import {useCallback, useState } from "react";
import React  from "react";
import Card from "../Card/Card";
import "./Grid.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function IsWinner(board,symbol){
 if(board[0]==board[1]&&board[1]==board[2]&&board[2]==symbol) return symbol;
if(board[3]==board[4]&&board[4]==board[5]&&board[5]==symbol) return symbol;
if(board[6]==board[7]&&board[7]==board[8]&&board[8]==symbol) return symbol;
 if(board[0]==board[3]&&board[3]==board[6]&&board[6]==symbol) return symbol;
if(board[1]==board[4]&&board[4]==board[7]&&board[7]==symbol) return symbol;
if(board[2]==board[5]&&board[5]==board[8]&&board[8]==symbol) return symbol;
if(board[0]==board[4]&&board[4]==board[8]&&board[8]==symbol)  return symbol;
if(board[2]==board[4]&&board[4]==board[6]&&board[6]==symbol)   return symbol;
return null;
}
function Grid({numberOfCards}){
    const [turn ,setturn]=useState(true);//true (O) false(X);
    const [board,setboard]=useState(Array(numberOfCards).fill(" "));
    const [Winner,SetWinner]=useState(null);
    const play=useCallback( function plaay(index){
        console.log("played clicked")
        if(turn)
            board[index]='O';
        else board[index]='X';
        
        const win=IsWinner(board,turn? 'O':'X');
        if(win)
            {SetWinner(win);
             toast.success(`Congratulations ${Winner } won the game`);
            }
        setboard([...board]);
        setturn(!turn);
    },[turn]);
    function reset(){
        setboard(Array(numberOfCards).fill(" "));
        setturn(true);
        SetWinner(null);
    }
   return (
  <div>  {
    Winner&&
    (  <>
        
    <h1 className="turn">winner is {Winner}
    </h1>
    <ToastContainer  position="top-center" />
           
    
    </>
    )
    }
    <button className="reset" onClick={reset} > reset the game</button>
  <h1 className="turn"> current turn : {(turn) ? 'O' :'X'} </h1>
  <div className="grid">
    {
        
        board.map((ele,idx)=>{
            return <Card gameEnd={Winner?true:false} onplay={play} player={ele} key={idx} index={idx}/>
        })
    }
    </div>
    </div>
   )
}
export default Grid;