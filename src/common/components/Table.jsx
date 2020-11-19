import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Paper,
  styled,
  Table as MUITable,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

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

function Table({ data, title, columns }) {
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
        <MUITable>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => 
                <TableCell key={index}>{column}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => 
              <TableRow key={index}>
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
            )}
          </TableBody>
        </MUITable>
      </TableContainer>
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Table;
