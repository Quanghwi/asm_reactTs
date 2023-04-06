import React from 'react'
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IProduct, IProps } from '../../../interface/interface';

interface DataType {
  key: string | number;
  name: string;
  price: number;
  description: string,
  idCate: number
}

interface IProp extends IProps {
  products: IProduct[],
  onRemove: (id: number) => void
}

const ProductsManagement = (props:IProp) => {

  const removeProduct = (id:number) => {
    props.onRemove(id)
  }

  const data: DataType[] = props.products.map(item => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      idCate: item.idCate
    }
  })


  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text, record, index) => index + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button style={{ backgroundColor: 'blue' }}><Link style={{ color: 'white' }} to={`/${record.key}/update`}>Update</Link></Button>
          <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => removeProduct(record.key)}>Remove</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
  )
}

export default ProductsManagement