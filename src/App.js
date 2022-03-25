import './App.css';
import DropElements from "./components/DropElements/DropElements";
import Draggable from './components/Draggable/Draggable';
import { useState, useRef } from 'react'

function App() {
  const dragElementRef = useRef({
    element: '',
    isDropped: false
  })

  const [data, setData] = useState({
    dropContainer: '',
    draggable: [
      'draggable Element 1',
      'draggable Element 2',
      'draggable Element 3',
      'draggable Element 4',
      'draggable Element 5',
      'draggable Element 6',
      'draggable Element 7',
    ]
  })

  const setDrop = (droppableData) => {
    const newDraggableList = data.draggable.filter(
        element => element !== droppableData
    )
    
    setData({
      dropContainer: droppableData,
      draggable: newDraggableList
    })
  }
  
  const draggableElements = data.draggable.map(str => (
    <Draggable
      ref={dragElementRef}
      setDrop={setDrop}
      dropContainer={data.dropContainer}
      key={Math.random().toString(32).substring(2)}>
      { str }
     </Draggable>
  ))

  return (
    <div className="App">
      <DropElements
        ref={dragElementRef}
        dropContainer={data.dropContainer}
      />
      {draggableElements}
    </div>
  );
}

export default App;
