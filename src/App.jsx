import {RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


// import { useState } from 'react';

// function App() {
//     const [text, setText] = useState("");
//     const [result, setResult] = useState("");

//     const handleAiRequest = async (endpoint) => {
//       const response = await fetch("https://localhost:7111/api/ai/" + endpoint, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           text: text,
//         }),
//       })
//       const data = await response.json();
//       setResult(data.result);
//     }

//     return (
//         <main>
//             <h1>AI Mötesassistent</h1>

//             <textarea 
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Skriv dina mötesanteckningar här..."
//             />

//             <button onClick={() => handleAiRequest("summarize")}>Sammanfatta</button>
//             <p>{result}</p>
//         </main>
//     );
// }

// export default App;
