import { Container } from "./Container/Container";
import { Header } from "./widgets/Header/Header";
import { TasksList } from "./widgets/TasksList/TasksList";

function App() {
  return (
    <Container>
      <Header />
      <TasksList />
    </Container>
  );
}

export default App;
