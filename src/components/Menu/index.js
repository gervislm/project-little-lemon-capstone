import React from "react";

import { MenuCard } from "../MenuCard";

export const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This week's special menu!</h2>
        <button>Order Menu</button>

        {/* menu cards */}

        <MenuCard />
      </div>
    </div>
  );
};
