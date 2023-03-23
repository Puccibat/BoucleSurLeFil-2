import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import contactUs from "../assets/img/contact_us.jpg";

const Contact = () => {
  return (
    <div>
      <Header textColor="black" />
      <section className="pt-40 md:pt-32 flex flex-col items-center">
        <img src={contactUs} className="md:max-w-md md:w-full w-4/5 rounded" />
        <div className=" md:px-28 px-10 pt-6 md:pt-0 font-secondary flex flex-col items-start w-full">
          <h2 className="pb-2">Vous pouvez me contacter:</h2>
          <ul className="pb-6">
            <li>
              Sur{" "}
              <Link
                to="https://www.instagram.com/bouclesurlefil/"
                target="_blank"
                className="text-sm"
              >
                Instagram <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              Sur{" "}
              <Link
                to="https://www.pinterest.fr/BoucleSurLeFil/"
                target="_blank"
                className="text-sm"
              >
                Pinterest <FontAwesomeIcon icon={faPinterest} />
              </Link>
            </li>
            <li>Par email: contact@surlefil.com</li>
          </ul>
          <p>Si vous devez faire un retour, contactez-moi par email</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
