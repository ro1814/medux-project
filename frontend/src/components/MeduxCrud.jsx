import React from "react";
import { FormGroup, Typography, styled, List, ListItem } from "@mui/material";

const MeduxCrud = () => {
  const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 5%;
    }
    & > h4 {
      text-align: center;
    }
  `;

  return (
    <Container>
      <Typography variant="h4">Welcome to: 'Technical Test Medux'</Typography>
      <Typography variant="h5">Description of the Technical Test:</Typography>
      <Typography variant="p">
        Se pide desarrollar una API REST, que implemente un sencillo CRUD, para
        ser consumida por un frontend (aplicación web) en el que se visualizarán
        los cambios que se realicen sobre los datos.
      </Typography>
      <Typography variant="h5">Requirements:</Typography>
      <List>
        <ListItem>Backend (API Rest)</ListItem>
      </List>
    </Container>
  );
};

export default MeduxCrud;
