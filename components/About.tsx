import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://images.pexels.com/photos/10733390/pexels-photo-10733390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
          Culpa proident irure tempor culpa pariatur fugiat velit. Velit esse
          irure incididunt consequat dolor. Incididunt aliquip elit esse
          consequat in est. Mollit fugiat nostrud reprehenderit exercitation do
          adipisicing irure magna ad fugiat culpa officia consectetur. Ea nisi
          et officia exercitation elit veniam consectetur. Excepteur cillum ut
          pariatur excepteur dolore excepteur reprehenderit sunt voluptate eu
          dolore. Occaecat voluptate id adipisicing ipsum aliquip enim duis
          laboris dolore. Cillum sunt ullamco deserunt occaecat consequat
          labore. Id do exercitation sit do qui eiusmod magna non aute
          incididunt ea. Reprehenderit sunt cillum sint occaecat est laborum
          proident ullamco officia ea sint labore. Irure sunt veniam eiusmod
          consectetur incididunt mollit laborum et fugiat. Duis id sint officia
          ipsum in consectetur quis amet voluptate eu proident. Labore aliqua
          aliqua magna aliqua. Reprehenderit ea eiusmod duis sit id excepteur
          occaecat. Ut cupidatat est officia proident. Est et irure dolore
          incididunt duis ipsum est sint nostrud fugiat nulla.
        </p>
      </div>
    </motion.div>
  );
}
