import React from 'react'
import { Button, Card, Form, Upload, Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Row, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { IProduct } from '../../../interface/interface';

interface IProps{
  onAdd:(product:IProduct) =>void
}

const AddProduct = (props:IProps) => {

  const navigate = useNavigate()

  const onFinish = (values: any) => {
    props.onAdd(values)
    navigate('/admin/products')
    window.location.reload()
  };


  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1000, margin: 'auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2>Thêm mới sản phẩm</h2>
        <Card
          hoverable
        >    <Row>
            <Col span={6}>
              <Form.Item label="Thêm ảnh"><br /><br />
                <Upload action="./public" listType="picture-card" name='image'>
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                label="Tên sản phẩm "
                name="name"
                rules={[{ required: true, message: 'Nhập tên sản phẩm!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Giá sản phẩm"
                name="price"
                rules={[{ required: true, message: 'Nhập giá sản phẩm!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Nhập mô tả sản phẩm!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phân loại"
                name="idCate"
                rules={[{ required: true, message: 'Chọn phân loại sản phẩm!' }]}
              >
                <Select
                  showSearch
                  style={{ width: 160 }}
                  placeholder="Select category"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Sản phẩm sách',
                    },
                    {
                      value: '2',
                      label: 'Sản phẩm công nghệ',
                    }
                  ]}
                />
              </Form.Item>
            </Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ margin: '20px' }}>
                Thêm mới
              </Button>
            </Form.Item>
          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default AddProduct