
import React,{useState,useEffect} from 'react';

//import {Tableitem} from "./Tableitem"
 export const Table=()=>{

    const[list,setList]=useState([])


    const getdata=()=>{
        fetch("http://localhost:3001/games").then((d)=>d.json()).then((res)=>setList(res))
   
    }
   

    useEffect(()=>{
        getdata()
    },[])





    return(
        <table id="table">
       <thead>
           <th>gamename</th>
           <th>game author</th>
           <th>game tags</th>
           <th>game price</th>
           <th>gameisforkids</th>
           <th>rating</th>
       </thead>
       <tbody>
    

       </tbody>

       {list.map((e)=>{
           return(
               <tr className="gamerow">
               <td className="gamename">{e.gamename}</td>
           <td>{e.gameauthor}</td>
           <td>{e.gametags}</td>
           <td className="gameprice">{e.gameprice}</td>
           <td>{e.forkids==true?"yes":"no"}</td>
           <td className="gamerating">{e.gamerating}</td>

               </tr>
           )
        
       })}



        </table>
    )
};
