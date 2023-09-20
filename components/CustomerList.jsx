import React from 'react'
import Customer from './Customer';
import {data} from "../data/data.js";
const CustomerList = () => {
  return (
    <div>{data.map((item)=><Customer person={item} key={item.id}/>)}</div>
  )
}

export default CustomerList