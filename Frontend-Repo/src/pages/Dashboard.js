import React, { useState, useEffect } from "react";
import DragDropBuilder from "../components/DragDropBuilder";
import { saveLayout, loadLayout } from "../services/api";

function Dashboard() {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const fetchLayout = async () => {
      const userId = "user123"; // Replace with dynamic user ID
      const data = await loadLayout(userId);
      setLayout(data?.layout || []);
    };

    fetchLayout();
  }, []);

  const handleSave = async () => {
    const userId = "user123"; // Replace with dynamic user ID
    await saveLayout(userId, layout);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <DragDropBuilder layout={layout} setLayout={setLayout} />
      <button onClick={handleSave}>Save Layout</button>
    </div>
  );
}

export default Dashboard;
