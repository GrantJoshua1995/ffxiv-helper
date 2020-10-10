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
  // TODO: type this better in future
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  value,
  handleChange,
  options,
  placeholder,
}) => {
  return (
    <FormControl>
      {placeholder && <InputLabel>{placeholder}</InputLabel>}
      <MaterialSelect value={value} onChange={handleChange}>
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
