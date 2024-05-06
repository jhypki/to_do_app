import React from "react";

type Props = {
  disabled: boolean;
  children: React.ReactNode;
};

function SubmitButton(props: Props) {
  return (
    <button
      className="w-full bg-light-veryDarkGrayishBlue dark:bg-dark-darkGrayishBlue
      text-light-veryLightGray dark:text-dark-veryLightGray 
      p-2 rounded-md focus:outline-none transition-all cursor-pointer"
      type="submit"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default SubmitButton;
