import { Routes, Route } from 'react-router-dom'
import WebLayout from './page/layout/WebLayout'
import HomePage from './page/HomePage'
import AdminLayout from './page/layout/AdminLayout'
import Dashboard from './page/admin/Dashboard'
import ProductsManagement from './page/admin/ProductsManagement'
import ProductsPage from './page/ProductsPage'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< WebLayout/>}>
          <Route index element={< HomePage/>}/>
          <Route path='products'>
            <Route index element={< ProductsPage/>}/>
            <Route path=':id' element={< ProductsPage/>}/>
          </Route>
        </Route>

        <Route path='/admin' element={< AdminLayout/>}>
          <Route index element={< Dashboard/>}/>
          <Route path='products'>
            <Route index element={<ProductsManagement/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
