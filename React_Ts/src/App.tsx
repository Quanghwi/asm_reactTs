import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import WebLayout from './page/layout/WebLayout'
import HomePage from './page/HomePage'
import AdminLayout from './page/layout/AdminLayout'
import Dashboard from './page/admin/Dashboard'
import ProductsManagement from './page/admin/Products/ProductsManagement'
import ProductsPage from './page/ProductsPage'
import { addProduct, deleteProduct, getAll } from './api/product'
import ProductDetail from './page/ProductDetail'
import AddProduct from './page/admin/Products/AddProduct'
import UpdateProduct from './page/admin/Products/UpdateProduct'
import AddCategory from './page/admin/Category/AddCategory'
import CategoryManagement from './page/admin/Category/CategoryManagement'
import UpdateCategory from './page/admin/Category/UpdateCategory'
import Users from './page/admin/Users/Users'
import { IProduct } from './interface/interface'


function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAll().then(({ data }) => setProducts(data))
    console.log(products);
  }, [])

  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((item: IProduct) => item.id !== id))
    })
  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAll().then(({ data }) => setProducts(data)))
  }

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

          <Route path='addProduct' element={< AddProduct onAdd={onHandleAdd}/>} />
          <Route path='products'>
            <Route index element={<ProductsManagement products={products} onRemove={onHandleRemove} />} />
            <Route path=':id/update' element={<UpdateProduct />} />
          </Route>

          <Route path='addCategory' element={<AddCategory />} />
          <Route path='category'>
            <Route index element={<CategoryManagement />} />
            <Route path=':id/update' element={<UpdateCategory />} />
          </Route>
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App