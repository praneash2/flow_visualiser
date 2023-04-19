
import './App.css';
import Node from './components/nodes/nodes.jsx';
import Button from './components/button/button.jsx';
import {useState} from "react";
function App() {
  let [nodes_count,set_nodes_count]=useState(0);
  let [nodes,set_nodes]=useState([]);
  
  function add_nodes(){
    set_nodes_count(nodes_count+1);
    set_nodes([...nodes,nodes_count]);
    
  }

  
  return (
    <div className="a-wrapper">
      <div className="tools"><Button onClick={add_nodes} ></Button></div>
      <div className="board">
        {nodes.map(i => (
            
            <Node  x={50} y={50} title={"Node "+i} description={""} key={i}>{i}</Node>
          ))}
      </div>
          
    </div>
  );
}

export default App;
