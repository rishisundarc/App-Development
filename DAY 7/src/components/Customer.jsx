import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
];

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: '********', // Displayed as asterisks for security reasons
  },
  {
    key: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    password: '********',
  },
  // Add more data rows as needed
];

const CustomerTable = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default CustomerTable;
