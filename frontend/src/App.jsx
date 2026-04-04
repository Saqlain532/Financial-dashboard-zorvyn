import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Insights from './pages/Insights';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage />} >
          <Route index element={<Dashboard />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='insights' element={<Insights />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
