import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import Table from '../Table';
import CollapsibleTable from '../CollapsibleTable';
// import removeAttr from '../../../utils/removeAttr';

const data = [
  {
    name: 'Frozen Yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 25,
    protein: 4,
    details: [{ date: '2020-01-05', customerId: '11091700', amount: 3 }],
  },
  {
    name: 'Ice cream Sandwhich',
    calories: 159,
    fat: 6.0,
    carbs: 25,
    protein: 4,
    details: [{ date: '2020-01-05', customerId: '11091700', amount: 3 }],
  },
  {
    name: 'Cupcake',
    calories: 159,
    fat: 6.0,
    carbs: 25,
    protein: 4,
    details: [{ date: '2020-01-05', customerId: '11091700', amount: 3 }],
  },
  {
    name: 'Frozen Yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 25,
    protein: 4,
    details: [{ date: '2020-01-05', customerId: '11091700', amount: 3 }],
  },
];

const columns = [
  'Dessert (100g serving)',
  'Calories',
  'Fat',
  'Carbs',
  'Protein',
];

const subColumns = ['Date', 'Customer', 'Amount', 'Total Price ($)'];

export default function ListingsTable() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return small ? 
    <CollapsibleTable
      columns={columns}
      subColumns={subColumns}
      title={'Resonsive Table'}
      data={data}
    />
    : 
    <Table
      columns={columns}
      data={data}
      title={'My table'}
    />
  ;
}
