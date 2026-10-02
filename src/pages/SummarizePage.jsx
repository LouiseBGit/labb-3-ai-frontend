import { useState } from "react";

function SummarizePage() {
    //state för användarens text, AI-resultatet och eventuella felmeddelanden
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    //skickar användarens text till backend och hanterar svaret
    const handleSummarize = async () => {
        //rensar tidigare felmeddelanden och resultat
        setError("");
        setResult("");

        //POST-anrop till vårt ASP.NET Web API
        const response = await fetch(
            "https://localhost:7111/api/ai/summarize",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                //gör om texten till JSON som matchar AiRequestDto-modellen i backend
                body: JSON.stringify({
                    text: text,
                }),
            },
        );
        const data = await response.json();

        //om backend returnerar ett fel, sätt felmeddelandet i state
        if (!response.ok) {
            setError("Ett fel uppstod: " + data.result);
            return;
        }

        //sparar ett lyckat API-svar i state för att visa det på sidan
        setResult(data.result);
    };

    return (
        <div className="page-container">
            <h1>Sammanfatta mötesanteckningar</h1>
            <p>Här kan du skapa en sammanfattning av dina mötesanteckningar.</p>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Skriv dina mötesanteckningar här..."
            />
            <button className="ai-button" onClick={() => handleSummarize()}>
                Sammanfatta
            </button>
            {result && (
                <div className="result-box">
                    <h2>Sammanfattning:</h2>
                    <p>{result}</p>
                </div>
            )}
            {error && (
                <div className="error-box">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default SummarizePage;
