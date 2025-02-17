import React from "react";
import "./App.css";
import StepsContainer from "./Components/StepsContainer/StepsContainer";
import { SubscriptionProvider } from "./context/SubscriptionContext";

function App() {
  return (
    <SubscriptionProvider>
      <div className="h-full w-full flex justify-center items-center">
        <StepsContainer />
      </div>
    </SubscriptionProvider>
  );
}

export default App;
