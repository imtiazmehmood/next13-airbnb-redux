"use client";

interface MenuItemProps {
  onClick: () => void;
  lable: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, lable }) => {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100">
      {lable}
    </div>
  );
};

export default MenuItem;
