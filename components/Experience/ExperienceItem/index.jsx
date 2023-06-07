import { Reveal } from "../../utils/Reveal";

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}) => {
  return (
    <div className="mb-10 pt-0 py-10 ">
      <div className="flex items-center justify-between md:mb-5 mb-3">
        <Reveal>
          <span className="md:text-3xl text-lg  font-poppins font-bold dark:text-slate-200">
            {title}
          </span>
        </Reveal>
        <Reveal>
          <span className="font-poppins md:text-base text-sm dark:text-darkText">
            {time}
          </span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between md:mb-5 mb-3">
        <Reveal>
          <span className="text-light dark:text-dark font-bold md:text-xl  text-base font-poppins">
            {position}
          </span>
        </Reveal>
        <Reveal>
          <span className="font-poppins md:text-base text-sm md:pr-0 pr-5 dark:text-darkText">
            {location}
          </span>
        </Reveal>
      </div>
      <Reveal>
        <p className="md:mb-7 mb-4 font-poppins text-gray-600 dark:text-darkText md:text-base text-sm">
          {description}
        </p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap md:gap-5 gap-3">
          {tech.map((item) => (
            <span
              className="font-poppins bg-slate-300 dark:bg-[#232323] dark:text-darkText px-2.5 py-1 rounded-2xl text-base font-medium"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
