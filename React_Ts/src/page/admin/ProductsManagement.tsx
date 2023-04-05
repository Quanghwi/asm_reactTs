import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProps } from '../../interface/interface';

// interface DataType {
//   key: string | number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
//   idCate: number
// }

const ProductsManagement = (props:IProps) => {

  // const data: DataType[] = props.products.map(item => {
  //   return {
  //     key: item.id,
  //     name: item.name,
  //     price: item.price,
  //     image: item.image,
  //     description: item.description,
  //     idCate: item.idCate,

  //   }
  // })

  // const columns: ColumnsType<DataType> = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: 'Age',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
  // ];


  return <div>
    <h1>ProductManagement</h1>
  </div>
  // <Table columns={columns} dataSource={data}
    
  
}

export default ProductsManagement