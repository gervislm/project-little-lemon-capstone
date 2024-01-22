import React from "react";
import recipes from "../../recipes";
import Swal from "sweetalert2";

export const MenuCard = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You might like more menu items!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#bbb",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been processed.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="cards">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="menu-items">
          <img src={recipe.image} alt="" />
          <div className="menu-content">
            <div className="heading">
              <h5>{recipe.title}</h5>
              <p>{recipe.price}</p>
            </div>
            <p>{recipe.description}</p>
            <button
              className="order-btn"
              onClick={() => {
                handleOrder(recipe.id);
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
