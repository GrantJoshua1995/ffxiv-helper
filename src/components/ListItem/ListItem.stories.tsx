import { action } from "@storybook/addon-actions";
import React from "react";
import ListItem from "./";

export default {
  title: "List Item",
};

export const Default = () => (
  <ListItem
    imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    header="Test"
  />
);

export const Button = () => (
  <ListItem
    onClick={action("List item clicked")}
    button={true}
    imageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    header="Test"
  />
);
