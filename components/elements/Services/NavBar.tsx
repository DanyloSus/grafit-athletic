import React from "react";

type NavBarProps = {
  page: number;
  setNewPage: (newPage: number) => void;
};

const NavBar = (props: NavBarProps) => {
  return (
    <div className="absolute bottom-[75px] left-1/2 -translate-x-1/2">
      <div
        className="w-[46px] h-[46px] rounded-full bg-green absolute top-1/2 -translate-y-1/2 transition-all"
        style={{
          left: `${66 * props.page + 6 * props.page}px`,
        }}
      />
      <div className="flex items center gap-[30px] text-[52px] relative z-10 px-2 pb-2">
        <button
          onClick={() => {
            props.setNewPage(0);
          }}
        >
          <h5>1</h5>
        </button>
        <button
          onClick={() => {
            props.setNewPage(1);
          }}
        >
          <h5>2</h5>
        </button>
        <button
          onClick={() => {
            props.setNewPage(2);
          }}
        >
          <h5>3</h5>
        </button>
        <button
          onClick={() => {
            props.setNewPage(3);
          }}
        >
          <h5>4</h5>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
