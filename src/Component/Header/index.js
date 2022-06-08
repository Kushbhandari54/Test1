import React from "react";
const Header = () => {
  return (
    <>
      <header className="w-full ">
        <div className=" bg-black">
            <div>
              <a href="#"><img src="logo.png" alt="Company Logo" /></a>
            </div>
            <div>
            <a class="fa fa-shopping-cart"></a>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
