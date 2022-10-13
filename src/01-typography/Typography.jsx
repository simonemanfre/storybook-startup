import React from "react";
import { string } from "prop-types";

/**
 * Primary UI component for typography
 */
const Typography = (props) => {

  const { title1, title2, title3, title4, title5, title6, titleHuge } = props;

  return (
    <>
      <h1 className="t-title t-title--huge">
        {titleHuge}
      </h1>
      <br />
      <br />
      <h1 className="t-title t-title--1">
        {title1}
      </h1>
      <br />
      <br />
      <h2 className="t-title t-title--2">
        {title2}
      </h2>
      <br />
      <br />
      <h3 className="t-title t-title--3">
        {title3}
      </h3>
      <br />
      <br />
      <h4 className="t-title t-title--4">
        {title4}
      </h4>
      <br />
      <br />
      <h5 className="t-title t-title--5">
        {title5}
      </h5>
      <br />
      <br />
      <h6 className="t-title t-title--6">
        {title6}
      </h6>
    </>
  );
};

Typography.propTypes = {
  title1: string,
  title2: string,
  title3: string,
  title4: string,
  title5: string,
  title6: string,
  titleHuge: string,
}

export default Typography;
