import React from 'react';
import { Container, FormControl, InputLabel, Input } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="sm">
      <FormControl>
        <InputLabel htmlFor="username">username</InputLabel>
        <Input id="username" />

        <InputLabel htmlFor="password">password</InputLabel>
        <Input id="password" />
      </FormControl>
    </Container>
  );
}

export default App;
