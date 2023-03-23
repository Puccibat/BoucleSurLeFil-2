import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header textColor="black" />
      <section className=" pt-32 md:px-28 px-10 pb-10 flex flex-col items-center font-secondary">
        <h1 className="text-5xl font-primary">Alix</h1>
        <p className="text-md py-10 md:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          aspernatur delectus asperiores repellat porro beatae commodi sequi,
          dicta minus unde nemo debitis, excepturi cum corrupti ut eum
          voluptatem expedita perferendis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima aspernatur delectus asperiores
          repellat porro beatae commodi sequi, dicta minus unde nemo debitis,
          excepturi cum corrupti ut eum voluptatem expedita perferendis?
          voluptatem expedita perferendis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima aspernatur delectus asperiores
          repellat porro beatae commodi sequi, dicta minus unde nemo debitis,
          excepturi cum corrupti ut eum voluptatem expedita perferendis?
        </p>
        <h2 className="text-3xl font-primary">Merci !</h2>
      </section>
    </>
  );
};

export default About;
