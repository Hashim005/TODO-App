import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDos,setTodos] = useState([]);
  const [toDo,setTodo]=useState('');
  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>This is Travelix  Staff 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
            if (toDo.trim() !== '') {
              setTodos([...toDos, { id: Date.now(), text: `${toDo} ( ${getCurrentDateTime()})`, status: false }]);
              setTodo('');
            }
          }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        toDos.map((obj)=>{
          return ( <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.checked);
                  console.log(obj);
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))

                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>setTodos(toDos.filter((obj2)=>obj2.id !== obj.id))} className="fas fa-times"></i>
              </div>
            </div> ) 
       })
      }
      <div className="completed-todos">
          <h3>Completed Todos:</h3>
      {
        toDos.map((obj)=>{
          if(obj.status){
            return(<p key={obj.id}>{obj.text}</p>)
          }
          return null

        })
      }
      </div>
      </div>

    </div>
  );
}


export default App;
