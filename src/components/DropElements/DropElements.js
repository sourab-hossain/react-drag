import { forwardRef } from 'react';
import './DropElements.css';

function DropElements({ dropContainer }, ref) {
  const dragEnterHandler = (event) => {
    event.preventDefault()

    ref.current = {...ref.current, isDropped: true}
  }

  const dragLeaveHandler = (event) => {
    event.preventDefault()

    setTimeout(() => {
      // it will execute after onDragEnd event
      ref.current = { ...ref.current, isDropped: false }
    })
  }

  return (
    <div
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      className="droppable-container"
    > 
      {dropContainer ?  <p>{dropContainer}</p> : <p style={{pointerEvents: 'none'}}>Drag Element Here</p>}
    </div>
  );
}

export default forwardRef(DropElements);
