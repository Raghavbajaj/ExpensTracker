import React from "react";
import { Header } from "./componants/Header";
import { Balance } from "./componants/Balance";
import { IncomeExpenses } from "./componants/IncomeExpenses";
import { TransactionList } from "./componants/TransactionList";
import { AddTransaction } from "./componants/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
