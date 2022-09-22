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

  const Title = styled(Typography)`
    margin-bottom: 2%;
    margin-top: 1%;
    & > div {
      margin-top: 5%;
    }
    & > h4 {
      text-align: center;
    }
  `;

  const Paragraph = styled(Typography)`
    margin-bottom: 2%;
    font-size: large;
    & > p {
      text-align: center;
    }
  `;
  return (
    <Container>
      <Title variant="h4">Welcome to: 'Technical Test Medux'</Title>
      <Title variant="h5">Description of the Technical Test:</Title>
      <Paragraph variant="p">
        Se pide desarrollar una API REST, que implemente un sencillo CRUD, para
        ser consumida por un frontend (aplicación web) en el que se visualizarán
        los cambios que se realicen sobre los datos.
      </Paragraph>
      <Title variant="h5">Requirements:</Title>
      <List>
        <ListItem style={{ display: "list-item" }}>
          -Backend (API Rest):
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Total libertad en el uso de librerías/frameworks
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -CRUD: al menos GET, POST, PUT y DELETE
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -No obligatorio (se valorará):
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Manejo de errores</ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Validación de los datos
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Conexión a una BBDD
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Frontend:</ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Total libertad en el framework elegido
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Total libertad en el modelo de datos elegido para las pruebas
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Tendrá al menos:</ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Un formulario para añadir datos
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Una lista/tabla para visualizar los datos
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Permitir editar y eliminar datos
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Otras cosas a valorar:
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Bundle y compilación
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-CSS</ListItem>
      </List>
      <Title variant="h5">Technologies used:</Title>
      <List>
        <ListItem style={{ display: "list-item" }}>
          -Backend (API Rest):
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -NodeJS and ExpressJS
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -CRUD: made out with mongoose methods.
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -No obligatorio (se valorará):
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Manejo de errores</ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Some of the data is validated by different functions.
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Database connected to MongoDB (by Atlas).
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Frontend:</ListItem>
        <ListItem style={{ display: "list-item" }}>
          -ReactJS
        </ListItem>
        <ListItem style={{ display: "list-item" }}>
          -Forms provided by Material UI.
        </ListItem>
        <ListItem style={{ display: "list-item" }}>-Styles done by Styled components (provided by MUI).</ListItem>
      </List>
    </Container>
  );
};

export default MeduxCrud;
