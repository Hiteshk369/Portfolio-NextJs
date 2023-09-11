import { SectionHeader } from "../utils/SectionHeader";
import CourseItem from "./CourseItem";
import courseraImg from "../../public/assets/issuingAuthority/Coursera-Logo.png";
import mongoImg from "../../public/assets/issuingAuthority/mongo.png";

const Courses = () => {
  return (
    <section
      className="w-full z-10 md:h-auto lg:h-auto xl:h-screen lg:px-36 md:px-24 md:py-6 py-6 px-6"
      id="courses"
    >
      <div className="max-w-[1240px] m-auto mt-16">
        <SectionHeader title="Courses" dir="1" />
        <div className="flex flex-wrap md:justify-between justify-center gap-5">
          {course.map((item) => (
            <CourseItem course={item} key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const course = [
  {
    title: "Full Stack Web Development with React",
    IssuingAuthority: "Coursera",
    time: "Dec 2022",
    certificateURL:
      "https://www.coursera.org/account/accomplishments/specialization/H3DEDX2MSAWT",
    IssuingAuthorityImg: courseraImg,
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    IssuingAuthority: "Coursera",
    time: "Oct 2022",
    certificateURL:
      "https://www.coursera.org/account/accomplishments/verify/B7FQXMAYHU9C",
    IssuingAuthorityImg: courseraImg,
  },
  {
    title: "M001: MongoDB Basics",
    IssuingAuthority: "MongoDb University",
    time: "Oct 2022",
    certificateURL:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/ff1a1d6b-0a63-5a8f-ab15-384b2560c2f2-hitesh-kumar-0abdafc3-4bac-5def-b86e-d9fb52f42ede-certificate.pdf",
    IssuingAuthorityImg: mongoImg,
  },
];

export default Courses;
