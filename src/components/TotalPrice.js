//This component displays the total price after use clicks to buy

import React from "react";

function TotalPrice(prop) {
  return (
    <h2 id="totalPrice" style={{ visibility: `${prop.visibility}` }}>
      Total Price: £{prop.totalPrice}
    </h2>
  );
}

export default TotalPrice;
