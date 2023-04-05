import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WebLayout from './page/layout/WebLayout'
import HomePage from './page/HomePage'
import AdminLayout from './page/layout/AdminLayout'
import Dashboard from './page/admin/Dashboard'
import ProductsManagement from './page/admin/Products/ProductsManagement'
import ProductsPage from './page/ProductsPage'
import { getAll } from './api/product'
import ProductDetail from './page/ProductDetail'
import AddProduct from './page/admin/Products/AddProduct'
import UpdateProduct from './page/admin/Products/UpdateProduct'
import AddCategory from './page/admin/Category/AddCategory'
import CategoryManagement from './page/admin/Category/CategoryManagement'
import UpdateCategory from './page/admin/Category/UpdateCategory'
import Users from './page/admin/Users/Users'


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
            <Route path=':id' element={< ProductDetail products={products} />} />
          </Route>
        </Route>

        <Route path='/admin' element={< AdminLayout />}>
          <Route index element={< Dashboard />} />

          <Route path='addProduct' element={< AddProduct />} />
          <Route path='products'>
            <Route index element={<ProductsManagement />} />
            <Route path=':id/update' element={<UpdateProduct />} />
          </Route>

          <Route path='addCategory' element={<AddCategory />} />
          <Route path='category'>
            <Route index element={<CategoryManagement />} />
            <Route path=':id/update' element={<UpdateCategory />} />
          </Route>
          <Route path='users' element={<Users/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
