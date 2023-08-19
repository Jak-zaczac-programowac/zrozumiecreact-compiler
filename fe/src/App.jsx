import { useState } from "react";
import "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";

function App() {
    const [isPanelShown, setIsPanelShown] = useState(true);
    return (
        <>
            <Button
                onClick={() =>
                    setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown)
                }
            >
                {isPanelShown ? "Schowaj panel" : "Pokaż panel"}
            </Button>
            {isPanelShown && <Panel />}
        </>
    );
}

export default App;
