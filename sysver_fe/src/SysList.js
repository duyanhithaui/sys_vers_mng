import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//import Page from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(NoCount, SystemName, Version,ReleasedDate ){
  return {NoCount,SystemName,Version,ReleasedDate}
};

const DataRows = [
  createData(1,'案件登録', '1.0.0.0','2024/01/05'),
  createData(2,'スケジュール登録', '1.0.0.0','2024/01/05'),
  createData(3,'案件帳票出力', '1.0.0.0','2024/01/05'),
  createData(4,'案件見積', '1.0.0.0','2024/01/05'),
  createData(5,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(6,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(7,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(8,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(9,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(10,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(11,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(12,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(13,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(14,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(15,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(16,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(17,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(18,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(19,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(20,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(21,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(22,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(23,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(24,'在庫簡易日報','1.0.0.0','2024/01/05'),
  createData(25,'在庫簡易日報','1.0.0.0','2024/01/05'),
];


function SystemsList() {
  return (
    <div className="App">
      <TableContainer style={{height:588,width:'100%'}}>
        <Table sx={{minWidth:700}} arial-label="システムバージョン情報一覧">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell >発行システム名</StyledTableCell>
              <StyledTableCell align='center'>最新バージョン</StyledTableCell>
              <StyledTableCell align='center'>発行日付</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              DataRows.map((row) => (
                <StyledTableRow key={row.NoCount}>
                  <StyledTableCell component="th" scope="row" align="center">{row.NoCount}</StyledTableCell>
                  <StyledTableCell >{row.SystemName}</StyledTableCell>
                  <StyledTableCell align='center'>{row.Version}</StyledTableCell>
                  <StyledTableCell align='center'>{row.ReleasedDate}</StyledTableCell>
                </StyledTableRow>
              ) )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SystemsList;
