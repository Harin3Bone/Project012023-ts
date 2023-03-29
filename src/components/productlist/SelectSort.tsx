import { ComponentPropsWithoutRef } from "react";

type SelectPropsType = ComponentPropsWithoutRef<"select">;
type SelectSortPropsType = {
  options: { label: string; value: string }[];
} & SelectPropsType;

function SelectSort({ options, ...props }: SelectSortPropsType) {
  return (
    <select {...props}>
      {options &&
        options.map((data, index) => (
          <option key={index} value={data.value}>
            {data.label}
          </option>
        ))}
    </select>
  );
}

export default SelectSort;
