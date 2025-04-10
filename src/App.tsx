import { MantineProvider } from '@mantine/core';
import Flowchart from './components/Flowchart';

function App() {
  return (
    <MantineProvider>
      <Flowchart />
    </MantineProvider>
  );
}

export default App;
