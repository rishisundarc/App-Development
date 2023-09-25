import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Stock ID',
    dataIndex: 'stockId',
    key: 'stockId',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
];

const data = [
  {
    key: '1',
    stockId: '1',
    name: 'Product A',
    cost: 10.99,
    stock: 100,
  },
  {
    key: '2',
    stockId: '2',
    name: 'Product B',
    cost: 19.99,
    stock: 50,
  },
  // Add more data as needed
];

const StockTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default StockTable;
