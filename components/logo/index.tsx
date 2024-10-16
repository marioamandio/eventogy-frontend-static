import { CheckmarkCircleIcon } from "../icons";

const Logo = () => {
  return (
    <div className="flex items-center font-sans text-black text-2xl">
      <span className="font-bold">event</span>
      <span className="flex items-center justify-center w-4 h-4">
        <CheckmarkCircleIcon size={20} />
      </span>
      <span>gy</span>
    </div>
  );
};

export default Logo;
