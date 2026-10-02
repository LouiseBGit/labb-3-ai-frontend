import { useState } from "react";

function InvitationPage() {
    //state för användarens text, AI-resultatet och eventuella felmeddelanden
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    //skickar användarens text till backend och hanterar svaret
    const handleInvitation = async () => {
        //rensar tidigare felmeddelanden och resultat
        setError("");
        setResult("");
        const response = await fetch(
            "https://localhost:7111/api/ai/invitation",
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
        if (!response.ok) {
            setError("Ett fel uppstod: " + data.result);
            return;
        }
        //sparar ett lyckat API-svar i state för att visa det på sidan
        setResult(data.result);
    };

    return (
        <div className="page-container">
            <h1>Skapa Mötesinbjudan</h1>
            <p>
                Ange information om mötet så hjälper AI-assistenten dig att
                skapa en inbjudan.
            </p>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ange till exempel mötets syfte, datum, tid och plats..."
            />
            <button className="ai-button" onClick={() => handleInvitation()}>
                Skapa Mötesinbjudan
            </button>
            {result && (
                <div className="result-box">
                    <h2>Mötesinbjudan:</h2>
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

export default InvitationPage;
