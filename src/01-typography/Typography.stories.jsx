import React from "react";
import Typography from "./Typography";

export default {
  title: "Global/Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  title1: "Lorem ipsum dolor sit amet",
  title2: "Lorem ipsum dolor sit amet",
  title3: "Lorem ipsum dolor sit amet",
  title4: "Lorem ipsum dolor sit amet",
  title5: "Lorem ipsum dolor sit amet",
  title6: "Lorem ipsum dolor sit amet",
  titleHuge: "Lorem ipsum dolor sit amet",
};
