import { AddTaskInput } from '../AddTaskInput/AddTaskInput';
import { Container } from '../Container';
import style from './App.module.scss';

function App() {
  return (
    <>
      <main className={style.main}>
        <section>
          <Container>
            <h1 className={style.title}>TODO</h1>
            <AddTaskInput />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
