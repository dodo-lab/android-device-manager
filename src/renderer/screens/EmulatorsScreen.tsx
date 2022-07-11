import {Button, List, ListItem, Stack, Typography} from '@mui/material';
import React from 'react';
import {useEmulators} from 'renderer/state/useEmulators';

export const EmulatorsScreen: React.FC = () => {
  const emulators = useEmulators(state => state.emulators);

  return (
    <List sx={{height: '100vh', backgroundColor: '#444444', overflow: 'auto'}}>
      {emulators.map(emu => (
        <ListItem key={emu}>
          <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
            <Typography color="white">{emu}</Typography>
            <Stack direction="row" sx={{gap: 2}}>
              <Button variant="outlined" color="success">
                Boot
              </Button>
              <Button variant="outlined">Cold Boot</Button>
              <Button variant="outlined" color="error">
                Wipe Data Boot
              </Button>
            </Stack>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};
