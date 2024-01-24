import React from 'react'
import Navbar from '../../components/Navbar'
import TableComponent from '../../components/TableComponent'
import CardList from '../components/CardList'


const Landing = () => {
  return (
    <div>
    <Navbar/>
    <CardList />
    <TableComponent/>
    </div>
  )
}

export default Landing