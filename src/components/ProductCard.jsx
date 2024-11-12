import { DeleteOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

function ProductCard({handleLikeBtnClick, item, width, handleDeleteProduct, classExtra, isDelete}) {

  return (
    <Card
      className={`border-blue-400 hover:!border-blue-400 hover:shadow-md  hover:shadow-blue-400 ${classExtra}`}
      hoverable
      style={{
        width: width,
      }}
      cover={
        <img
          className="h-[300px] object-contain"
          alt="example"
          src={item.images[0]}
        />
      }
    >
      <Meta title={item.title} description={<p className="line-clamp-3">{item.description}</p>}/>
      <Meta description={ isDelete
        ? <Button onClick={() => handleDeleteProduct(item)} className={`w-full mt-5 ${item.isLiked ? "bg-red-500 text-white border-red-500 hover:!bg-transparent hover:!text-red-500 hover:!border-red-500" : ""}`} size="small"><DeleteOutlined className="scale-[1.1]"/></Button>
        : <Button onClick={() => handleLikeBtnClick(item)} className={`w-full mt-5 ${item.isLiked ? "bg-red-500 text-white border-red-500 hover:!bg-transparent hover:!text-red-500 hover:!border-red-500" : ""}`} size="small"><LikeOutlined className="scale-[1.1]"/></Button>}

        />
    </Card>
  );
}

export default ProductCard;
