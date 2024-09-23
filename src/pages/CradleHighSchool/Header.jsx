import React from "react";

function Header() {
  const headerItems = [
    { text: "UI/UX", className: "" },
    { text: "By Johnson Ogbonna", className: "" },
    { text: "2023", className: "text-right" },
  ];

  return (
    <header className="flex gap-5 justify-between text-xl text-center text-white max-md:mr-1 max-md:max-w-full">
      {headerItems.map((item, index) => (
        <div key={index} className={item.className}>
          {item.text}
        </div>
      ))}
    </header>
  );
}

export default Header;