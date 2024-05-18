//This component displays the products page
//All the products are stored in an array
//All the product images are stored in the products folder in public
import React from "react";
import Item from "./ItemCard.js";
import TotalPrice from "./TotalPrice.js";

function Products(props) {
  let productList = [
    {
      image: "1",
      title: "Connect Pen",
      desc: "Available in 3 colors , Red, Black and Blue",
      price: "5",
    },
    {
      image: "2",
      title: "Clicker Pen",
      desc: "One of a kind Clicker pen. Available in 3 colors , Red, Black and Blue",
      price: "5",
    },
    {
      image: "3",
      title: "Ball point pen",
      desc: "Versatile Ball point pen. Available Available in 3 colors , Red, Black and Blue",
      price: "3",
    },
    {
      image: "4",
      title: "Bic Pen",
      desc: "Great Bic pen. Available in 3 colors, Red, Black and Blue",
      price: "3",
    },
    {
      image: "5",
      title: "Art Marker Pen",
      desc: "Great art marker pen with dual tips.  Currently available in 3 colors , Red, Black and Blue",
      price: "6",
    },
    {
      image: "6",
      title: "Wooden Pencil",
      desc: "Lovely warm wooden pencil with marble effect tip. Currently only available in 3 colors , Red, Black and Blue",
      price: "2",
    },
    {
      image: "7",
      title: "Oversize pencil",
      desc: "A large oversize pencil to last a lifetime. Available in 3 colors , Red, Black and Blue",
      price: "10",
    },
    {
      image: "8",
      title: "Crayola Colored pencil",
      desc: " One of Crayola colored pencils are great to color with. Only 3 colors left! Blue, Red and Black",
      price: "1",
    },
    {
      image: "9",
      title: "Eraser",
      desc: "Regular standard sized eraser. Can erase most types of pencil marks without smudging. Availabel in Red, blue and black  ",
      price: "1",
    },
    {
      image: "10",
      title: "Sharpner",
      desc: "Pencil and Crayon Sharpner. Available in Red, Black and Blue",
      price: "2",
    },
  ];
  return (
    <>
      <TotalPrice
        visibility={props.h2Visibility}
        totalPrice={props.totalPrice}></TotalPrice>
      <div id="products">
        {productList.map((item, i) => {
          return (
            <Item
              image={`${productList[i].image}.jpg`}
              title={productList[i].title}
              desc={productList[i].desc}
              price={parseFloat(productList[i].price)}
              setH2Visibility={props.setH2Visibility}
              setTotalPrice={props.setTotalPrice}
              totalPrice={props.totalPrice}></Item>
          );
        })}
      </div>
    </>
  );
}

export default Products;
