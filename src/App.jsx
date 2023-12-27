import React, { useState } from "react";
import './TodoList'
import ToDo from "./TodoList";
const App=()=>{
  const [inputList,setInputList]=useState("")
  const [items,setItems]=useState([])
  const itemEvent=(e)=>{
      setInputList(e.target.value);
  };
  const listOfItems=()=>{
      setItems((oldItems)=>{
          return [...oldItems,inputList];
      });
      setInputList("");
  };
  const deleteItem=(id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((_arrElem,index)=>{
        return index!== id;
      })
    })
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input
          type="text"
          value={inputList}
          placeholder="Add a item" onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>
        <ol>
          
          {items.map((itemval,index)=>{
             return <ToDo key={index} 
             id={index}
             text={itemval}
             onSelect={deleteItem}
             />;
              
          }
          )}
          
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;