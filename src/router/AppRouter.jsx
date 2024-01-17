import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ComponentView from '../component/pages/ComponentView'
import Stocks from '../stocks/pages/Stocks'
import Invoice from '../invoice/pages/Invoice'
import Finishgood from '../finishgood/Finishgood'
import Landing from '../Landing/pages/Landing'


export const AppRouter = () => {
  return (
    <Routes>
        {/* Landing Page */}
        <Route path='/*' element={<Landing />} />
        
        {/* Vista componente */}
        <Route path='/component_view/*' element={<ComponentView />} />
        
        {/* Vista Finish Good */}
        <Route path='/finish_good/*' element={<Finishgood />} />
        
        {/* Vista de stocks */}
        <Route path='/stocks/*' element={<Stocks />} />

        {/* Vista de facturacion */}
        <Route path='/invoice/*' element={<Invoice />} />

    </Routes>
  )
}