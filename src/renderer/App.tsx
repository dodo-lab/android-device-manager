import {CssBaseline} from '@mui/material';
import {MemoryRouter as Router, Route, Routes} from 'react-router-dom';
import {RenderMessenger} from './renderMessenger';
import {EmulatorsScreen} from './screens/EmulatorsScreen';
import {useEmulators} from './state/useEmulators';

RenderMessenger.on('updateEmulators', emulators => {
  const {setEmulators} = useEmulators.getState();
  setEmulators(emulators);
});

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<EmulatorsScreen />} />
        </Routes>
      </Router>
    </>
  );
}
