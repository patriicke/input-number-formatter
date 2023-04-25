import { ChangeEvent, useState } from "react";

export const InputElement = () => {
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState("");

  const formatInput = (value: string) => {
    const digitsOnly = value.replace(/[^\d]/g, "");
    const chunks = digitsOnly.match(/.{1,3}/g);
    const formattedValue = chunks ? "Rs." + chunks.join(",") : "";
    return formattedValue;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(formatInput(value));
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setDisplay(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor='input'>Input:</label>
      <input
        type='text'
        id='input'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      <div>
        <span>Display:</span>
        <span>{display}</span>
      </div>
    </div>
  );
};
