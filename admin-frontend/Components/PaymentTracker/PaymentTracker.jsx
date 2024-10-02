import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Dummy data for table
const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    number: "1234567890",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    number: "9876543210",
    paymentStatus: "Partial Paid",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    number: "5555555555",
    paymentStatus: "Not Paid",
  },
  // Add more dummy data as needed
];

export function PaymentTracker() {
  const [filter, setFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handlePaymentFilterChange = (event) => {
    setPaymentFilter(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      (paymentFilter === "all" ||
        row.paymentStatus.toLowerCase().includes(paymentFilter)) &&
      (row.name.toLowerCase().includes(filter) ||
        row.email.toLowerCase().includes(filter) ||
        row.number.toLowerCase().includes(filter))
  );

  return (
    <div className="py-[4vw] px-[2vw]">
      <TableContainer component={Paper}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <TextField
            variant="outlined"
            label="Filter"
            value={filter}
            onChange={handleFilterChange}
            style={{ marginLeft: 10 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControl
            variant="outlined"
            style={{ marginLeft: 10, margin: 20 }}
          >
            <InputLabel id="payment-status-label">Payment Status</InputLabel>
            <Select
              labelId="payment-status-label"
              value={paymentFilter}
              onChange={handlePaymentFilterChange}
              label="Payment Status"
              style={{ minWidth: 150 }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="partial paid">Partial Paid</MenuItem>
              <MenuItem value="not paid">Not Paid</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Table>
          <TableHead>
            <TableRow style={{ background: "lightgray" }}>
              <TableCell>Sl No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mail</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
