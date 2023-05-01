import "./App.css";
import ChangedDefaultName from "./components/Default";
import EventHandler from "./components/EventHandler";
import { Form } from "./components/Form";
import InlineStyle from "./components/InlineStyle";
import { Jsx } from "./components/Jsx";
import { NamedComponent } from "./components/Named";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
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
      <Form />
      <PostList />
      <PostForm />
    </div>
  );
}

export default App;
