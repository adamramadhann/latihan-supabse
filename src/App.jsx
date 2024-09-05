import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import ListWarga from './pages/ListWarga'
import FormDataWarga from './pages/FormDataWarga'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
          <Route index element={<h1>Silahkan Cek data Warga Rt 100/45</h1>} />
          <Route path='list_warga' element={<ListWarga/>} />
          <Route path='from_data_warga' element={<FormDataWarga/>} />
      </Route>
    </Routes>
  )
}

export default App



