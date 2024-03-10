import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]:+newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Result input={userInput} />
    </>
  );
}

export default App;
