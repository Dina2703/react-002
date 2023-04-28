import "./App.css";
import ChangedDefaultName from "./components/Default";
import { NamedComponent } from "./components/Named";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <NamedComponent />
      <ChangedDefaultName />
    </div>
  );
}

export default App;
