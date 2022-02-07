
import React,{useEffect, useState} from 'react';



 export const Tableitem=()=>{
 const[list,setList]=useState([])


 const getdata=()=>{
     fetch("http://localhost:3001/games").then((d)=>d.json()).then((res)=>setList(res))

 }

 useEffect(()=>{
     getdata()
 },[])




  return(
      <>
          <h1>Tableitem</h1>
      </>
  )

};

