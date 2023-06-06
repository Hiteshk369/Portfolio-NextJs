import { RiSunFill, RiMoonFill } from "react-icons/ri";

const ToggleTheme = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-md shadow shadow-gray-800 bg-[#232323] flex items-center justify-center"
        >
          <RiSunFill size="1.5rem" className="text-dark" />
        </button>
      ) : (
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-md shadow shadow-gray-300 bg-slate-200 flex items-center justify-center"
        >
          <RiMoonFill size="1.5rem" className="text-light" />
        </button>
      )}
    </>
  );
};

export default ToggleTheme;

{
  /* <button
className=" bg-white dark:bg-[#232323] border-2    dark:border-[#111111] rounded-3xl cursor-pointer flex text-xs justify-between my-0 mx-auto overflow-hidden p-2 relative w-20 h-8 items-center"
onClick={toggleTheme}
>
<RiSunFill className="h-auto w-5 transition-all duration-300 ease-linear" />
<RiMoonFill className="h-auto w-5 transition-all duration-300 ease-linear" />
</button> */
}
