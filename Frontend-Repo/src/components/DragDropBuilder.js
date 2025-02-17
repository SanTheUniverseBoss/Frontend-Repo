import React, { useState } from "react";

function DragDropBuilder({ layout, setLayout }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const newElement = { type: "text", content: "New Element" };
    setLayout([...layout, newElement]);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="drag-drop-area"
    >
      {layout.map((el, index) => (
        <div key={index} className="draggable-item">
          {el.content}
        </div>
      ))}
    </div>
  );
}

export default DragDropBuilder;
