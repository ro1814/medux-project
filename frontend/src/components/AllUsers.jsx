import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
  Typography,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Container } from "@mui/system";

const COntainer = styled(Container)`
  margin: 2% auto 0 auto;
  & > div {
    margin-top: 5%;
  }
  & > h4 {
    text-align: center;
  }
  @media (max-width: 768px){
    margin: 0 !important;
    padding: 0 !important
  }
`;
const StyledTable = styled(Table)`
  width: 100%;
  margin: 5% auto 0 auto;
  @media (max-width: 768px){
    margin: 0 !important;
    padding: 0 !important
  }
`;

const THead = styled(TableRow)`
  background: #7fbcd2;
  border: 0.5px solid #7fbcd2;
  & > th {
    color: #16213e;
    font-size: larger;
  }
  @media (max-width: 768px){
    margin: 0 !important;
    font-size: small !important;
    padding: 0 !important

  }
`;

const TBody = styled(TableRow)`
  border: 0.5px solid #7fbcd2;
  & > td {
    font-size: medium;
  }
  @media (max-width: 768px){
    font-size: x-small !important;
    padding: 0 !important;

  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <COntainer>
      <Typography variant="h4">All users</Typography>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: "2%", background: "#42855B" }}
                  component={Link}
                  to={`/edit-user/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: "2%", background: "#850E35" }}
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </COntainer>
  );
};

export default AllUsers;
