import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { deleteLikeProducts } from "../store/likedSlice";

function Navbar({ products, setProducts, refresh, setRefresh }) {
  const dispatch = useDispatch()
  const [closeModal, setCloseModal] = useState(false)
  const likedProducts = useSelector(state => state.likedList)

  function handleDeleteProduct(item) {
    const data = { ...item, isLiked: !item.isLiked }
    const updateList = products.map(value => {
      return value.id == item.id ? data : value
    })
    setProducts(updateList)
    dispatch(deleteLikeProducts(item))
  }

  function handleSearchInput(evt) {
    const filteredProducts = products.filter(item => item.title.toLowerCase().includes(evt.target.value.toLowerCase()))
    setProducts(filteredProducts)
    if(!evt.target.value){
      setRefresh(!refresh)
    }
  }

  return (
    <nav className="flex items-center justify-between p-5 bg-blue-400">
      <h1 className="font-bold text-[20px] text-white">Products</h1>
      <div className="flex items-center space-x-5">
        <Input onChange={handleSearchInput} className="w-[300px]" placeholder="Search" allowClear />
        <Button onClick={() => setCloseModal(true)} className="bg-transparent hover:!bg-transparent text-white hover:!border-white hover:!text-white">Like ({likedProducts.length})</Button>
      </div>
      <Modal onOk={() => setCloseModal(false)} className="!w-full h-[100%]" open={closeModal} onCancel={() => setCloseModal(false)}>
        <div className="flex w-full gap-5 overflow-x-auto">
          {likedProducts.map(item => <ProductCard handleDeleteProduct={handleDeleteProduct} isDelete={true} classExtra={`min-w-[300px]`} item={item} width={250} key={item.id} />)}
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
