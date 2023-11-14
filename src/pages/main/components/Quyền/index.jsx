import React from "react";
import { Table } from "antd";
import './index.css';

const columns = [
  {
    title: "STT",
    dataIndex: "name",
    key: "name",
    width: "5%", // Độ rộng của cột này
  },
  {
    title: "Tên quyền",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Hành động",
    dataIndex: "address",
    key: "address",
    width: "20%",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  
];

const App = () => <Table columns={columns} dataSource={data} />;

export default App;
