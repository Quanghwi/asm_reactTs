import React from 'react'
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'antd';


const ProductDetail = (props) => {
  const { id } = useParams()
  const currentProduct = props.products.find((item: number) => item.id == id)

  return (
    <div> <h2 style={{ fontWeight: 500 }}>Chi tiết sản phẩm</h2>
      <Row>
        <Col flex={2}>
          <Card
            hoverable
            style={{ width: 400 }}
            cover={<img alt={currentProduct?.name} src={`http://localhost:5173/${currentProduct?.image}`} />}
          >
          </Card>
        </Col>
        <Col flex={8}>
          <h3 style={{ fontWeight: 500 }}>Thông tin chi tiết</h3>
          <Card
            hoverable
          >
            <p>Tên Sản Phẩm: <a>{currentProduct?.name}</a></p>
            <p>Đơn giá: <a style={{ color: 'red' }} href="">{currentProduct?.price}đ</a></p>
            <p>Mô Tả Sản Phẩm: <a>{currentProduct?.description}</a></p>
            <p>Phân Loại Sản Phẩm: <a>{currentProduct.idCate == 1 ? 'Sách' : 'Sản Phẩm Công Nghệ'}</a></p>

          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default ProductDetail