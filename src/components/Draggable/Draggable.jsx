import React, { useState, forwardRef } from 'react'
import './Draggable.css'

function Draggable({ dropContainer, setDrop, children }, ref) {
    const [isDragging, setDragging] = useState(false);
    const toggleDragging = () => setDragging(!isDragging)
    
    const dragStartHandler = () => {
        toggleDragging()
        // if the drag start then it's stored the children in the ref.current object
        ref.current.element = children
    }
    
    const dragEndHandler = () => {
        toggleDragging()

        if (!dropContainer && ref.current?.isDropped) {
            setDrop(ref.current.element)
        }

        if (ref.current?.isDropped) {
            ref.current.isDropped = false
        }

        ref.current = {
            element: '',
            isDropped: ref.current.isDropped
        }
    }

  return (
      <p
        className={`draggable${isDragging ? ' dragging' : ''}`}
        draggable="true"
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
      >
        {children}
    </p>
  )
}

export default forwardRef(Draggable)