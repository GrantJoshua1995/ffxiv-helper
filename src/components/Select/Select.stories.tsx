import { action } from "@storybook/addon-actions";
import React, { useState } from "react";

import Select from "./";

export default {
  title: "Select",
};

export const NoPlaceholder = () => {
  const [value, setValue] = useState<unknown>("test");
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    action("option selected");
    setValue(e.target.value);
  };
  return (
    <Select
      value={value}
      options={[
        { label: "Test", value: "test" },
        { label: "Test 2", value: "test2" },
      ]}
      handleChange={handleChange}
    />
  );
};

export const Placeholder = () => {
  const [value, setValue] = useState<unknown>("");
  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    action("option selected");
    setValue(e.target.value);
  };
  return (
    <Select
      placeholder="Placeholder"
      value={value}
      options={[
        { label: "Test", value: "test" },
        { label: "Test 2", value: "test2" },
      ]}
      handleChange={handleChange}
    />
  );
};
