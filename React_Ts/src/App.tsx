import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WebLayout from './page/layout/WebLayout'
import HomePage from './page/HomePage'
import AdminLayout from './page/layout/AdminLayout'
import Dashboard from './page/admin/Dashboard'
import ProductsManagement from './page/admin/ProductsManagement'
import ProductsPage from './page/ProductsPage'
import { deleteProduct, getAll } from './api/product'
import { IProduct } from './interface/interface'
import ProductDetail from './ProductDetail'
function App() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    getAll().then(({ data }) => setProduct(data))
    console.log(products);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< WebLayout />}>
          <Route index element={< HomePage />} />
          <Route path='products'>
            <Route index element={< ProductsPage products={products} />} />
            <Route path=':id' element={< ProductDetail />} />
          </Route>
        </Route>

        <Route path='/admin' element={< AdminLayout />}>
          <Route index element={< Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductsManagement products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
