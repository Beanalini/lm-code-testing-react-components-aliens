import React from "react";
interface errMessageProps {
  errMessage: Array<string>;
}

const FormErrorMessage: React.FC<errMessageProps> = ({ errMessage }) => {
  return (
    <>
      {errMessage.map((errMessage: string, index: number) => (
        <p key={index} className="errMessage" data-testId="errorMsg">
          {errMessage}
        </p>
      ))}
    </>
  );
};

export default FormErrorMessage;
