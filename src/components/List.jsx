import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { saveLikedProducts } from '../store/likedSlice'

function List({products, setProducts, refresh}) {
  const dispatch = useDispatch()

    useEffect(() => {
        axios("https://dummyjson.com/products").then(res => {
            setProducts(res.data.products.map(item => {
              item.isLiked = false
              return item
            }))
        })
    }, [refresh])

    function handleLikeBtnClick(item) {
      const data = {...item, isLiked:!item.isLiked}
      const updateList = products.map(value => {
        return value.id == item.id ? data : value
      })
      setProducts(updateList)
      dispatch(saveLikedProducts(data))
    }

  return (
    <div className='flex flex-wrap justify-between gap-5 p-5'>
        {products.map(item => <ProductCard width={300} handleLikeBtnClick={handleLikeBtnClick} item={item} key={item.id}/>)}
    </div>
  )
}

export default List