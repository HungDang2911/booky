import React, { useState } from "react";
import "./StayInTouch.scss";

export interface Props {}

export function StayInTouch(props: Props) {
  const [email, setEmail] = useState("");

  const handleInput = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href = "/";
  };

  return (
    <div className="stay-in-touch text-center pb-5">
      <h2 className="playfair homepage__header">
        <i>Stay In Touch</i> with Our Updates
      </h2>
      <hr className="homepage__header__underline" />
      <div className="stay-in-touch__sign-up">
        <input
          type="email"
          placeholder="Enter Your Email Here"
          className="stay-in-touch__sign-up__input"
          onChange={handleInput}
        />
        <button className="stay-in-touch__sign-up__btn" onClick={handleSubmit}>
          SIGN UP
        </button>
      </div>
    </div>
  );
}
