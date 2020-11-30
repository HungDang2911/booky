import React from "react";
import "./Footer.scss";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <Container fluid={true} className="footer">
      <div className="footer__info">
        <div className="footer__info__social text-center">
          <a
            href="https://www.facebook.com/tuan.hung.2911"
            className="footer__info__social__facebook"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
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
