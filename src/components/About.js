//This component renders About page for Pen'n'Cils ecommerce site
//This component is styled with custom styling and react-bootstrap elements
import React from "react";
import Figure from "react-bootstrap/Figure";
import TotalPrice from "./TotalPrice";

function About(props) {
  return (
    <>
      {/* Total price only displayed after user clicks buy */}
      <TotalPrice
        visibility={props.h2Visibility}
        totalPrice={props.totalPrice}></TotalPrice>
      {/* Figure imported from react-bootstrap and 
      displays shop's logo, description and some images
       along with contact us section */}
      <Figure id="About">
        <div>
          <Figure.Image
            width={200}
            height={180}
            alt="171x180"
            src="./logo.jpg"
          />
          <Figure.Caption
            style={{
              width: "80%",
              margin: "auto",
              color: "whitesmoke",
              fontSize: "1.15rem",
            }}>
            Welcome to Pen'n'Cils, your one-stop e-commerce destination for all
            your writing needs! At Pen'n'Cils, we specialize in providing a wide
            variety of high-quality pens, pencils, sharpeners, and erasers to
            cater to students, professionals, artists, and stationery
            enthusiasts alike. Our mission is to bring you the best tools for
            your creativity and productivity, with products that range from
            everyday essentials to premium writing instruments. With easy
            navigation, secure payment options, and swift delivery, Pen'n'Cils
            is dedicated to making your shopping experience seamless and
            enjoyable. Explore our collection today and discover the perfect
            tools to express yourself!
          </Figure.Caption>
        </div>
        <div id="storeImgs">
          <Figure.Image
            width={300}
            height={280}
            alt="picture of our store"
            src="./store1.jpg"
          />
          <Figure.Image
            width={300}
            height={280}
            alt="Another picture of our store"
            src="./store2.jpg"
          />{" "}
        </div>
        <Figure.Caption>
          <ul>
            <li>CONTACT US</li>
            <ul>
              <li>Customer Service: </li>

              <ul>
                <li>Email: support@penncils.com</li>
                <li>Phone: 1-800-123-4567</li>
                <li> Hours: Monday to Friday, 9 AM - 6 PM (BST)</li>
              </ul>

              <li>
                Mailing Address: Pen'n'Cils, 123 Stationery Lane, Cityville ,
                AB10 2CD, UK
              </li>
            </ul>
          </ul>
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default About;
