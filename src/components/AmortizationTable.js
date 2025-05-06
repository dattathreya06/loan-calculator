import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Box,
} from "@mui/material";
import { useAppContext } from "../context/AppContext";

const AmortizationTable = ({ schedule }) => {
  const { currency } = useAppContext();

  return (
    <Box sx={{ maxHeight: 400, overflow: "auto" }}>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.month}</TableCell>
                <TableCell>
                  {Number(row.principal).toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {Number(row.interest).toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {Number(row.balance).toFixed(2)} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AmortizationTable;
