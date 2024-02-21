/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../Api/userApi";
import { useState } from "react";
const { Option } = Select;
const columns = [
  {
    title: "No",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Ratings",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (record: any) => <Link to={`/users/${record.id}`}>Visit </Link>,
  },
];
const Users = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: products, isLoading } = useGetProductsQuery([]);
  const data = products?.products;

  {
    /* Optional */
  }

  const handlePageSizeChange = (value: number) => {
    setLimit(value);
    setPage(1); // Reset to first page when changing page size
  };
  {
    /* Optional */
  }

  return (
    <div className="main-container">
      <h1>users</h1>
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          {/* Optional */}
          <Select
            defaultValue={limit}
            onChange={handlePageSizeChange}
            style={{ width: 120, marginBottom: 16 }}
          >
            <Option value={8}>8</Option>
            <Option value={16}>16</Option>
            <Option value={24}>24</Option>
            <Option value={32}>32</Option>
          </Select>
          {/* Optional */}
          <Table
            pagination={{
              current: page,
              pageSize: limit, // if you want to use select field then use limit otherwise use 10
              total: products?.limit,
              onChange: (page, pageSize) => {
                setPage(page);
                setLimit(pageSize);
              },
            }}
            columns={columns}
            dataSource={data}
            rowKey="id"
          />
        </>
      )}
    </div>
  );
};

export default Users;
