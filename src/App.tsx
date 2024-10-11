import { useState } from "react";
import marketHubLogo from "@assets/vectors/logo-markethub.svg";
import Button from "./components/atoms/Button";
import Typography from "./components/atoms/Typography";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-page">
      <a>
        <img src={marketHubLogo} className="logo react" alt="logo" />
      </a>

      <div>
        <Button size="medium" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button
        onClick={() => {
          console.log("test");
        }}
      >
        Botón
      </Button>
      <section>
        <Typography tag="h1">Heading</Typography>
        <Typography tag="h2">Heading </Typography>
        <Typography tag="h3">Heading</Typography>
        <Typography tag="h4">Heading</Typography>
        <Typography tag="h5">Heading</Typography>
        <Typography tag="h6">Heading</Typography>
        <Typography tag="p">text</Typography>
        <Typography tag="span">text</Typography>
      </section>
    </div>
  );
}

export default App;
