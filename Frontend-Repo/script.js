const backendURL = "https://your-backend.onrender.com/api"; // Use your Render backend URL

async function saveLayout() {
    const layoutData = { userId: "user123", layout: ["Header", "Footer", "Products"] };

    const response = await fetch(`${backendURL}/save-layout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(layoutData),
    });

    const result = await response.json();
    alert(result.message);
}

async function loadLayout() {
    const response = await fetch(`${backendURL}/load-layout/user123`);
    const result = await response.json();
    alert(JSON.stringify(result.layout));
}