import { Link } from "react-router-dom";

function HomePage() {
    return (
        <main className="page-container">
            <h1>Välkommen till AI Mötesassistent</h1>
            <p>
                Här kan du få hjälp att sammanfatta mötesanteckningar, skapa en agenda eller skriva en professionell mötesinbjudan. Välj en av funktionerna nedan för att komma igång.
            </p>

            <div className="homepage-links">
                <Link to="/summarize" className="home-card">
                    <h2>Sammanfattning</h2>
                    <p>Skapa en sammanfattning av dina mötesanteckningar</p>
                </Link>

                <Link to="/agenda" className="home-card">
                    <h2>Mötesagenda</h2>
                    <p>Skapa en mötesagenda</p>
                </Link>
                
                <Link to="/invitation" className="home-card">
                    <h2>Mötesinbjudan</h2>
                    <p>Skapa en mötesinbjudan</p>
                </Link>
            </div>
        </main>
    );
}

export default HomePage;
