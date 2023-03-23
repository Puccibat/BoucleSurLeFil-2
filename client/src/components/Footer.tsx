import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className="divide-y divide-solid divide-blslate-700ack md:px-28 pt-20 font-secondary">
      <div></div>
      <div className="pb-10">
        <h1 className="text-4xl text-black font-primary pt-8 pl-4">
          BoucleSurLeFil
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-10 pl-6 md:pl-0">
          <div className="flex flex-col">
            <p className="text-sm">contact@surlefil.com</p>
            <p className="text-sm">78646 Versailles</p>
          </div>
          <div className="flex flex-col md:items-center">
            <Link to="" className="text-sm">
              Mentions légales
            </Link>
            <Link to="" className="text-sm">
              Conditions générales
            </Link>
          </div>
          <div className="flex flex-col md:items-end">
            <Link
              to="https://www.pinterest.fr/BoucleSurLeFil/"
              target="blank"
              className="text-sm"
            >
              Pinterest <FontAwesomeIcon icon={faPinterest} />
            </Link>
            <Link
              to="https://www.instagram.com/bouclesurlefil/"
              target="blank"
              className="text-sm"
            >
              Instagram <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
