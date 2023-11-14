import React from "react";
import { Table } from "antd";
import "./index.css";
import { useEffect } from "react";
import { useApiCaller } from "../../../../services/apiCommon";

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
    name: 1,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: 2,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: 2,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: 2,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: 2,
    age: 32,
    address: "New York No. 1 Lake Park",
  },
];

function App() {
  const apiCaller = useApiCaller();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const configAPI = {
          url: "https://bedtidev.quangnam.gov.vn/api/quyens?keyword=&page=1&size=10",
          method: "GET",
          data: {},
          params: {},
          isShowMessage: true,
        };

        const getName = "user";

        const response = await apiCaller(configAPI, getName);
        console.log(response);
        // Xử lý dữ liệu response
      } catch (error) {
        console.error(error);
        // Xử lý lỗi
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
      />
    </>
  );
}

export default App;
