
import React,{useState,useEffect} from 'react';


const initstate={
    gamename:"",
    gameauthor: "",
    gametags:"",
    gameprice: "",
    forkids: "",
    gamedesc: "",
    gamerating: "",

}
const Gameinput=()=>{

    const[form,setForm]=useState(initstate)

const inputevent=(e)=>{
    const name=e.target.name;
    let value=e.target.value
  
    // value = e.target.type === 'checkbox' ?e.target.checked : e.target.value;
  
    setForm({...form,[name]:value})
  
}
 
const getdata=()=>{
    fetch("http://localhost:3001/games").then((d)=>d.json()).then((res)=>console.log(res))
}



useEffect(()=>{
    getdata();
 
},[])




 const handleSubmit=(e)=>{
e.preventDefault();
  
 console.log(form);
  fetch("http://localhost:3001/games",{
      method: "POST",
      body: JSON.stringify(form),
      headers: {
          "content-type": "application/json"
      }
  }).then(()=>getdata());
 };







    return(
        <form id="addgame" onSubmit={handleSubmit}>
      <input type="text" placeholder="gamename" name="gamename" onChange={inputevent}/><br/>
       <input type="text" placeholder="gameauthor" name="gameauthor" onChange={inputevent}/><br/>
      <label>tags</label><br/>
      <br/>
        <input type="checkbox" 
               name="gametags" 
               value="action" onChange={inputevent}/>action
       <br/>
        <input type="checkbox" 
              name="gametags"
               value="adventure" onChange={inputevent}/>adventure
      <br/>
        <input type="checkbox" 
              name="gametags"
               value="mestery" onChange={inputevent}/>mestery
     <br/>
        <input type="checkbox" 
            name="gametags"
               value="fiction" onChange={inputevent}/>fiction
<br/>

      <input type="number" placeholder="gameprice" name="gameprice" onChange={inputevent}/><br/> 
     
       is this game for kids?
        <br/>
        <input type="radio"
               name="agree" 
               value="yes" onChange={inputevent} />Yes
     <br/>
        <input type="radio"
               name="agree" 
               value="no" onChange={inputevent}/>No
      <br/>



      <textarea type="text" placeholder="gamedesc" name="gamedesc" onChange={inputevent}/><br/>
       <select placeholder="rating" name="gamerating" onChange={inputevent}>
       <option value="">Rating</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
        </select><br/> 

    
<br/>
      <input type="submit" value="submit"/>
        </form>
    )
}

export default Gameinput;