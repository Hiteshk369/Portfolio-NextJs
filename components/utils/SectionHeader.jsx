import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className="flex items-center gap-10 mb-10"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[1px] opacity-30 bg-gray-700 dark:bg-slate-400" />
      <h3>
        <Reveal>
          <span className="md:text-5xl text-3xl font-black dark:text-[#ebecf3] text-end">
            {title}
            <span className="text-light dark:text-dark">.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
