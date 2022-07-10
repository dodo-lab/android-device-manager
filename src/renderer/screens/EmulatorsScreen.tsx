import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {useEmulators} from 'renderer/state/useEmulators';

export const EmulatorsScreen: React.FC = () => {
  const emulators = useEmulators(state => state.emulators);

  return (
    <Box>
      {emulators.map(emu => (
        <Typography key={emu}>{emu}</Typography>
      ))}
    </Box>
  );
};
