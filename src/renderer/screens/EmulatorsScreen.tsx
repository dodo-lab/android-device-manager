import SearchIcon from '@mui/icons-material/Search';
import {Button, List, ListItem, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {RenderMessenger} from 'renderer/renderMessenger';
import {useEmulators} from 'renderer/state/useEmulators';

export const EmulatorsScreen: React.FC = () => {
  const emulators = useEmulators(state => state.emulators);
  const [searchText, setSearchText] = useState('');

  const filteredEmulators = emulators.filter(v => v.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

  return (
    <Stack sx={{height: '100vh'}}>
      <Stack direction="row" sx={{alignItems: 'center', px: 0.5, backgroundColor: '#EEEEEE'}}>
        <SearchIcon />
        <TextField
          value={searchText}
          fullWidth
          sx={{py: 0.5, px: 1}}
          variant="standard"
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search"
        />
      </Stack>
      <List sx={{flex: 1, backgroundColor: '#222222', overflow: 'auto'}}>
        {filteredEmulators.map(emu => (
          <ListItem key={emu}>
            <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
              <Typography color="white">{emu}</Typography>
              <Stack direction="row" sx={{gap: 2}}>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => RenderMessenger.send('bootEmulator', emu, 'boot')}>
                  Boot
                </Button>
                <Button variant="outlined" onClick={() => RenderMessenger.send('bootEmulator', emu, 'cold_boot')}>
                  Cold Boot
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => RenderMessenger.send('bootEmulator', emu, 'wipe_data_boot')}>
                  Wipe Data Boot
                </Button>
              </Stack>
            </Stack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
