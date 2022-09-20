import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 5% auto 0 auto;
`;

const THead = styled(TableRow)`
    background: #000000;
    & > th {
        color: #fff;
        font-size: larger;
    }
`;

const TBody = styled(TableRow)`
    & > td {
        font-size: medium
    }
`

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
  }

  return (
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
                <Button variant="contained" style={{ marginRight: '2%' }} component={Link} to={`/edit-user/${user._id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
