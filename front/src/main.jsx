import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="container">
            <h1 className="name">Thiago Larangeira de Souza</h1>
        </div>
    </StrictMode >
)