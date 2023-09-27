import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber } from 'antd';

const StockTable = () => {
  // Sample data for the stock table
  const [data, setData] = useState([
    {
      stockId: '1',
      name: 'Product 1',
      description: 'Description of Product 1',
      available: 10,
    },
    {
      stockId: '2',
      name: 'Product 2',
      description: 'Description of Product 2',
      available: 5,
    },
    // Add more data as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const generateUniqueId = () => {
    // Generate a unique ID here (you can use a library like 'uuid' for this)
    // For simplicity, we'll use a random number here
    return Math.floor(Math.random() * 1000).toString();
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle the form submission and update the data
    if (editingRecord) {
      // Editing an existing record
      const updatedData = data.map((record) =>
        record.stockId === editingRecord.stockId ? { ...record, ...values } : record
      );
      setData(updatedData);
    } else {
      // Adding a new record
      const newRecord = {
        stockId: generateUniqueId(), // Generate a unique ID
        ...values,
      };
      setData([...data, newRecord]);
    }
    setIsModalVisible(false);
    setEditingRecord(null); // Clear the editing record
    form.resetFields(); // Reset the form fields
  };

  // Define columns for the table
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
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Available',
      dataIndex: 'available',
      key: 'available',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.stockId)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  // Function to handle the "Edit" button click
  const handleEdit = (record) => {
    // Populate the form fields with the existing record data
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      available: record.available,
    });
    setEditingRecord(record);
    setIsModalVisible(true);
  };

  // Function to handle the "Delete" button click
  const handleDelete = (stockId) => {
    // Implement delete logic here
    const updatedData = data.filter((record) => record.stockId !== stockId);
    setData(updatedData);
  };

  return (
    <div>
      <h3>Stock Table</h3>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add
      </Button>
      <Table columns={columns} dataSource={data} />

      <Modal
        title={editingRecord ? 'Edit Product' : 'Add Product'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingRecord(null);
          form.resetFields(); // Reset the form fields
        }}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item
            name="available"
            label="Available"
            rules={[{ required: true, message: 'Please enter the available quantity' }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? 'Save' : 'Add'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StockTable;
