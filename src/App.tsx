import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <NavBar />
      <Container />
    </TodoProvider>
  );
}

export default App;
