import "./App.css";
import ChangedDefaultName from "./components/Default";
import EventHandler from "./components/EventHandler";
import { Jsx } from "./components/Jsx";
import { NamedComponent } from "./components/Named";
import ParentComponent from "./components/ParentComponent";
import Props from "./components/Props";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <NamedComponent />
      <ChangedDefaultName />
      <Jsx />
      <Props name="Ann" />
      <Props name="Sun" />
      <Props name="Jane">
        <p>This is childen props</p>
      </Props>
      <State />
      <EventHandler />
      <ParentComponent />
    </div>
  );
}

export default App;
