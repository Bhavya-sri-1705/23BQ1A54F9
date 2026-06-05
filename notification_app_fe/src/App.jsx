import { useEffect } from "react";
import { ACCESS_TOKEN } from "./config";
import { Log } from "../../logging_middleware/logger";

function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "page",
      "Home Page Loaded",
      ACCESS_TOKEN
    );
  }, []);

  const handleClick = async () => {
    await Log(
      "frontend",
      "info",
      "component",
      "Button Clicked",
      ACCESS_TOKEN
    );
  };

  return (
    <div>
      <h1>Notification App</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;