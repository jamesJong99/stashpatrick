import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Level 0', 'after registration', '-', '-', 'no refund available'),
  createData('Level 1', 'after 150$', '-0.10$', '-', 'Trust 95%, if lower - no refund available'),
  createData('Level 2', 'after 350$', '-0.20$', '-', 'Trust 90%, if lower - no refund available'),
  createData('Level 3', 'after 700$', '-0.30$', '-', 'Trust 85%, if lower - no refund available'),
  createData('Level 4', 'after 1,200$', '-0.40$', '-', 'Trust 75%, if lower - no refund available'),
  createData('Level 5', 'after 2,000$n', '-0.50$', '-', 'Trust 70%, if lower - no refund available'),
  createData('Level 6', '	after 5,000$', '-0.60$', '-', 'Trust 68%, if lower - no refund available'),
  createData('- EXCELLENT BUYER', 'after 10,000$', '-1$', 'EXCELLENT BUYER', 'Trust 68%, if lower - no refund available'),
  createData('Level 7', '	after 10,000$', '-1$', 'EXCELLENT BUYER', 'Trust 65%, if lower - no refund available'),
  createData('- MAJOR BUYER', '	after 20,000$', '-1.50$', 'MAJOR BUYER', 'Trust 65%, if lower - no refund available'),
  createData('Level 8', '	after 25,000$', '-1.50$', 'MAJOR BUYER', 'Trust 63%, if lower - no refund available'),
  createData('Level 9', '	after 35,000$', '-1.50$', 'MAJOR BUYER', 'Trust 61%, if lower - no refund available'),
  createData('Level 10', 'after 50,000$', '-1.50$', 'MAJOR BUYER', 'Trust 60%, if lower - no refund available'),
];

export default function LevelTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Level</TableCell>
            <TableCell align="left">Top-up</TableCell>
            <TableCell align="left">Discount</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Trust score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}