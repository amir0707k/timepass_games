import React from "react";
import "./App.css";
import StepsContainer from "./Components/StepsContainer/StepsContainer";
import { SubscriptionProvider } from "./context/SubscriptionContext";

function App() {
  return (
    <SubscriptionProvider>
      <StepsContainer />
    </SubscriptionProvider>
  );
}

export default App;
