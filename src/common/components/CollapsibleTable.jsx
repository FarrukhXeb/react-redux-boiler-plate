import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Paper,
  styled,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Collapse,
  Box,
  IconButton,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
  tableContainer: {
    border: '1px solid #000',
    borderTopLeftRadius: 0,
  },
  tableTitle: {
    width: 180,
    padding: 14,
    border: '1px solid #000',
    borderRadius: 0,
    borderBottom: '1px solid #fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    top: 2,
  },
});

const StyledPaper = styled(Paper)({
  boxShadow: 'none',
});

function Row(props) {
  const { row, subColumns } = props;
  const [open, setOpen] = React.useState(false);

  console.log(row);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.calories}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fat}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.carbs}
        </TableCell>
        <TableCell component="th" scope="row">
          {row.protein}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {subColumns.map((col, index) => 
                      <TableCell key={index}>{col}</TableCell>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detail, key) => 
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {detail.date}
                      </TableCell>
                      <TableCell>{detail.customerId}</TableCell>
                      <TableCell align="right">{detail.amount}</TableCell>
                      <TableCell align="right">{detail.amount}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.object.isRequired,
  subColumns: PropTypes.array.isRequired,
};

function CollapsibleTable({ data, title, columns, subColumns }) {
  const classes = useStyles();

  console.log(data);
  return (
    <>
      <Typography
        className={classes.tableTitle}
        component={StyledPaper}
        variant={'h4'}
      >
        {title}
      </Typography>
      <TableContainer
        className={classes.tableContainer}
        component={StyledPaper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              {columns.map((column, index) => 
                <TableCell key={index}>{column}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => 
              <Row row={row} key={index} subColumns={subColumns} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

CollapsibleTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subColumns: PropTypes.array.isRequired,
};

export default CollapsibleTable;
