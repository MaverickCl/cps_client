import React from 'react'
import Navbar from '../../components/Navbar'
import CardList from '../components/Card'
import TableComponent from '../../components/TableComponent'


const Landing = () => {
  return (
    <div>
    <Navbar/>
    <CardList/>
    <TableComponent/>
    </div>
  )
}

export default Landing