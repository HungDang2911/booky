import React from "react";
import "./Footer.scss";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <Container fluid={true} className="footer">
      <div className="footer__info mx-auto">
        <div className="footer__info__social d-flex justify-content-center mb-3">
          <a
            href="https://www.facebook.com/tuan.hung.2911"
            target="_blank"
            className="footer__info__social__facebook text-center d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon className="d-inline-block" icon={faFacebookF} size="2x" />
          </a>
          <a 
            href="https://github.com/HungDang2911"
            target="_blank"
            className="footer__info__social__github text-center d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon className="d-inline-block" icon={faGithub} size="2x" />
          </a>
          <a 
            href="https://www.instagram.com/hungpolo/"
            target="_blank"
            className="footer__info__social__instagram text-center d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon className="d-inline-block" icon={faInstagram} size="2x" />
          </a>
        </div>

        <div className="footer__info__detail">
          <p className="text-center">
            Đặng Tuấn Hưng <br />
            Đại học Công nghệ
          </p>
        </div>
      </div>
    </Container>
  );
};
