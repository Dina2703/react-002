import "./App.css";
import ChangedDefaultName from "./components/Default";
import EventHandler from "./components/EventHandler";
import InlineStyle from "./components/InlineStyle";
import { Jsx } from "./components/Jsx";
import { NamedComponent } from "./components/Named";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Props from "./components/Props";
import State from "./components/State";
import StyleSheet from "./components/StyleSheet";

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
      <NameList />
      <StyleSheet />
      <InlineStyle />
    </div>
  );
}

export default App;
