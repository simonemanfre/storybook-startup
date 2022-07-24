import React from "react";

/**
 * Primary UI component for user interaction
 */
export const Typography = (props) => {
  return (
    <>
      <h1 className="t-title t-title--1">
        {props.title1 || "Lorem ipsum dolor sit amet"}
      </h1>
      <br />
      <br />
      <h2 className="t-title t-title--2">
        {props.title2 || "Lorem ipsum dolor sit amet"}
      </h2>
      <br />
      <br />
      <h3 className="t-title t-title--3">
        {props.title3 || "Lorem ipsum dolor sit amet"}
      </h3>
      <br />
      <br />
      <h4 className="t-title t-title--4">
        {props.title4 || "Lorem ipsum dolor sit amet"}
      </h4>
      <br />
      <br />
      <h5 className="t-title t-title--5">
        {props.title5 || "Lorem ipsum dolor sit amet"}
      </h5>
      <br />
      <br />
      <h6 className="t-title t-title--6">
        {props.title6 || "Lorem ipsum dolor sit amet"}
      </h6>
    </>
  );
};
