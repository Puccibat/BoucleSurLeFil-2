import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC<{ textColor: string }> = ({ textColor }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [x, setX] = useState<number>(-120);
  const [isSticky, setIsSticky] = useState(false);

  const cart = 3;

  const handleClick = () => {
    setOpen(!open);
    open ? setX(0) : setX(-120);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setX(-120);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //

  return (
    <>
      <nav className="hidden font-secondary md:flex lg:flex p-4 justify-between  w-full absolute">
        <div className=" flex justify-between">
          <Link
            className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
            to="/"
          >
            Accueil
          </Link>
          <span className={`text-${textColor}`}>-</span>
          <Link
            className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
            to="/products"
          >
            Bijoux
          </Link>
          <span className={`text-${textColor}`}>-</span>
          <Link
            className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
            to="/cart"
          >
            Panier <span className="text-xs">{cart}</span>
          </Link>
        </div>
        <h1 className={`text-${textColor} text-center pl-10 font-primary`}>
          <Link to="/">BoucleSurLeFil</Link>
        </h1>
        <div className="flex items-center">
          <div className=" flex justify-between">
            <Link
              className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
              to="/about"
            >
              A propos
            </Link>
            <span className={`text-${textColor}`}>-</span>
            <Link
              className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
              to="/contact"
            >
              Contact
            </Link>
            <span className={`text-${textColor}`}>-</span>
            <Link
              className={`px-2 text-${textColor} after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full`}
              to="/signin"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={`hidden font-secondary md:flex lg:flex p-4 justify-between bg-white w-full border z-10 
        ${isSticky ? "sticky-header active" : "sticky-header"}
        `}
      >
        <div className=" flex justify-between">
          <Link
            className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/"
          >
            Accueil
          </Link>
          <span>-</span>
          <Link
            className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Bijoux
          </Link>
          <span>-</span>
          <Link
            className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/cart"
          >
            Panier <span className="text-xs">{cart}</span>
          </Link>
        </div>
        <h1 className="text-center pl-10 font-primary">
          <Link to="/">BoucleSurLeFil</Link>
        </h1>
        <div className="flex items-center">
          <div className=" flex justify-between">
            <Link
              className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
              to="/about"
            >
              A propos
            </Link>
            <span>-</span>
            <Link
              className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
              to="/contact"
            >
              Contact
            </Link>
            <span>-</span>
            <Link
              className="px-2 after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
              to="/signin"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={`md:hidden w-full flex justify-between px-5 py-2 font-secondary h-10 bg-white  ${
          isSticky ? "sticky-header active" : "sticky-header"
        }`}
      >
        <div className="flex flex-col ">
          <motion.div whileTap={{ scale: 1.4 }} onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </motion.div>
          <motion.div className="pt-2 rounded z-10" animate={{ x }}>
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/products">Bijoux</Link>
              </li>
              <li>
                <Link to="/about">A propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/signin">Se connecter</Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <h1 className="font-primary pr-10">
          <Link to="/">BoucleSurLeFil</Link>
        </h1>
        <Link to="/cart" className="self-start">
          Panier <span className="text-xs">{cart}</span>
        </Link>
      </nav>
      <nav className="md:hidden w-full flex justify-between px-5 py-2 font-secondary h-10 absolute">
        <div className="flex flex-col ">
          <motion.div whileTap={{ scale: 1.4 }} onClick={handleClick}>
            <FontAwesomeIcon color={textColor} icon={faBars} />
          </motion.div>
          <motion.div
            className={`text-${textColor} pt-2 ${
              textColor !== "white" ? "bg-white" : ""
            } rounded z-10`}
            animate={{ x }}
          >
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/products">Bijoux</Link>
              </li>
              <li>
                <Link to="/about">A propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/signin">Se connecter</Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <h1 className={`text-${textColor} font-primary pr-10`}>
          <Link to="/">BoucleSurLeFil</Link>
        </h1>
        <Link to="/cart" className={`text-${textColor} self-start`}>
          Panier <span className="text-xs">{cart}</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
