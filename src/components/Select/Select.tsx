import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
} from "@material-ui/core/";

interface SelectProps {
  value: unknown;
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
  placeholder?: string;
  name?: string;
  // TODO: type this better in future
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  value,
  handleChange,
  options,
  name,
  placeholder,
}) => {
  return (
    <FormControl>
      {placeholder && <InputLabel>{placeholder}</InputLabel>}
      <MaterialSelect name={name} value={value} onChange={handleChange}>
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </MaterialSelect>
    </FormControl>
  );
};

export default Select;
