import React,{useState} from 'react';
import Tweet from './Tweet';

function App(){
  const [users, setUsers] = useState([
    {name:"Sanjeev", designation:"Businesss Man", likes:3453},
    {name:"Frank", designation:"Banker",likes:3434},
    {name:"Rahul", designation:"Broker",likes:3423}
  ]);
//  const [isRed, setRed] = useState(false);
//  const[count, setCount] = useState(0);

//  const increament = () =>{
//    setCount(count + 1)
//    setRed(!isRed);

//  } 
//  const decreament = () =>{
//    setCount(count - 1)
//  }
  return(
    <div className="app">
     {/* {users.map(user =>(
       <Tweet name={user.name} message={user.message} likes={user.likes}/>
     ))} */}
      {/* <button className="btn" onClick={increament}>Increament</button>
      <h3 className= {isRed ? 'red' : ""}>Change Color</h3>
      <h3>{count}</h3>
      <button className="btn" onClick={decreament}>Decreament</button> */}
      <Tweet name="Raj" designation="developer" likes="1098"/>
      <Tweet name="Nishant" designation="Banker" likes="2675"/>
      <Tweet name="Kishlay" designation="Coder" likes="2345" />
      <Tweet name="Sanjeev" designation="Brother" likes="4785"/>
    </div>
  );
}

export default App;