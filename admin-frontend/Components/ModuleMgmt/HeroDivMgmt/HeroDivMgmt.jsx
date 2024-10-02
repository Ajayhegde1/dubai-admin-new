import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
// import api from "@/utils/apiSetup";

export function HeroDivMgmt() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ram", email: "ram@example.com", rotaryId: "1001" },
    { id: 2, name: "Sita", email: "sita@example.com", rotaryId: "1002" },
    {
      id: 3,
      name: "Lakshman",
      email: "lakshman@example.com",
      rotaryId: "1003",
    },
    { id: 4, name: "Bharat", email: "bharat@example.com", rotaryId: "1004" },
    {
      id: 5,
      name: "Shatrughna",
      email: "shatrughna@example.com",
      rotaryId: "1005",
    },
    { id: 6, name: "Hanuman", email: "hanuman@example.com", rotaryId: "1006" },
    { id: 7, name: "Sugreev", email: "sugreev@example.com", rotaryId: "1007" },
    {
      id: 8,
      name: "Vibhishan",
      email: "vibhishan@example.com",
      rotaryId: "1008",
    },
    { id: 9, name: "Jatayu", email: "jatayu@example.com", rotaryId: "1009" },
    {
      id: 10,
      name: "Indrajit",
      email: "indrajit@example.com",
      rotaryId: "1010",
    },
  ]);

  // const [users, setUsers] = useState([]);
  // const getAllUserData = async () => {
  //   try {
  //     const res = await api.get("/users");
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAllUserData();
  // });
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <></>
    // <div className="px-[2vw] py-[48px]">
    //   <TextField
    //     label="Search by Name"
    //     variant="outlined"
    //     fullWidth
    //     value={searchQuery}
    //     onChange={handleSearchChange}
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <IconButton disabled>
    //             <Search />
    //           </IconButton>
    //         </InputAdornment>
    //       ),
    //     }}
    //     style={{ marginBottom: "1rem" }}
    //   />

    //   <Table style={{ marginTop: 4 }}>
    //     <TableHead>
    //       <TableRow style={{ background: "lightgray" }}>
    //         <TableCell>Select</TableCell>
    //         <TableCell>User Name</TableCell>
    //         <TableCell>Email</TableCell>
    //         <TableCell>User Module</TableCell>
    //         <TableCell>Visa Module</TableCell>
    //         <TableCell>Passport Module</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {filteredUsers.map((user) => (
    //         <TableRow key={user.id}>
    //           <TableCell>
    //             <Checkbox />
    //           </TableCell>
    //           <TableCell>{user.name}</TableCell>
    //           <TableCell>{user.email}</TableCell>
    //           <TableCell>
    //             <Checkbox />
    //           </TableCell>
    //           <TableCell>
    //             <Checkbox />
    //           </TableCell>
    //           <TableCell>
    //             <Checkbox />
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>

    //   <Button>Toggle User Module for Selected Users</Button>
    //   <Button>Toggle Visa Module for Selected Users</Button>
    //   <Button>Toggle Passport Module for Selected Users</Button>
    // </div>
  );
}
