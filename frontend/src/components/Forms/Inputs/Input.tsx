import React from "react";

type Props = {
  placeholder: string;
  type: string;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <input
      className="p-2 rounded-md border focus:outline-none border-light-veryDarkGrayishBlue bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue"
      placeholder={props.placeholder}
      type={props.type}
      id={props?.id}
      name={props.name}
      onChange={props.onChange}
    />
  );
};

export default Input;
