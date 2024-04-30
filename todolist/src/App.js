import { useState } from 'react';
import './App.css';
function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

 function addItem(){
  if(!newItem){
    alert("Please add item...");
    return;
  }
  const item = {
    id: Math.floor(Math.random()*1000),
    value: newItem
  }
  setItems(oldList=>[...oldList, item]);
  console.log(items);
  setNewItem("");
 }
 function deleteItem(id){
  const newArray = items.filter(item=>item.id!==id);
  setItems(newArray);
 }
  return (
    <div className="App">
      <h1>My To Do List</h1>
      <input 
      type="text"
      placeholder='Add task'
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}
      />
      <button onClick={()=>addItem()}>Add</button>
      <ul>
        {items.map(item=>{
          return(<li key = {item.id} onClick={()=>deleteItem(item.id)}>{item.value}</li>);
        })}
      </ul>
    </div>
  );
}

export default App;
