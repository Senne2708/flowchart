import { AppShell, Container } from '@mantine/core';
import Header from './components/Header';
import Flowchart from './components/Flowchart';

function App() {

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Header/>
      </AppShell.Header>
      
      <AppShell.Main>
        <Container>
          <Flowchart />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
