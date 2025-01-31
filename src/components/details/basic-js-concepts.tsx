import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { urlEncoder } from "../../utils";
import { liVariant, ulVariant } from "../../utils/motion";

const BasicJsConcepts = () => {
  return (
    <div className="lg:flex Merriweather">
      <aside className="hidden lg:block lg:bg-gray-900 lg:basis-1/2 min-h-screen"></aside>
      <motion.ul
        className="px-8 md:px-20 lg:px-0 w-full lg:basis-1/2 bg-[#FAF9F5] relative py-20 lg:py-70 min-h-screen"
        variants={ulVariant}
        initial="hidden"
        animate="show"
      >
        {javascriptForDevs.map((tab) => (
          <motion.li
            key={tab.label}
            className="relative font-bold text-black lg:text-[#FAF9F5] pb-10 md:pb-20 text-sm"
            variants={liVariant}
          >
            <div className="text-xs lg:absolute lg:top-0 lg:right-[50vw] w-full lg:text-right lg:mr-20 flex items-center gap-2 lg:block">
              <p>{tab.title}</p>
              <p className="lg:pt-2">{tab.date}</p>
            </div>
            <Link to={`${urlEncoder(tab.label)}`}>
              <div className="lg:ml-20 text-black pt-1 lg:pt-0">
                <p className="font-extrabold text-lg">{tab.label}</p>
                <p className="pt-1 text-gray-500">Learning again</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default BasicJsConcepts;

const javascriptForDevs = [
  { label: "Promise in Javascript", title: "THOUGHT", date: "2024-05-10" },
  // {
  //   label: "Let's talk about Event Loop in Javascript",
  //   title: "BLOG POST",
  //   date: "2024-05-10",
  // },
];
