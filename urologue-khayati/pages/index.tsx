import React from 'react';
import { Stack } from '@mui/material';

export default function Home() {


  return (
    <>
    <Stack style={{background:"var(--primary)"}} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <h1 style={{color:"white"}}>Demnächst!</h1>
    </Stack>
    </>
  );
}
