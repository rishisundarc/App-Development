import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Transaction ID',
    dataIndex: 'transactionId',
    key: 'transactionId',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => `$${text}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const data = [
  {
    key: '1',
    transactionId: '12345',
    date: '2023-09-21',
    customerName: 'John Doe',
    amount: 100.0,
    status: 'Completed',
  },
  {
    key: '2',
    transactionId: '67890',
    date: '2023-09-22',
    customerName: 'Jane Smith',
    amount: 75.5,
    status: 'Pending',
  },
  // Add more data rows as needed
];

const TransactionTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TransactionTable;
