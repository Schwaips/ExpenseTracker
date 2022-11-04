import { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";


function AllExpenses(params) {
  //not the provider, the context itself needs to be called
  const expensesContext = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
      fallBackText="No expenses register"
    />
  );
}


export default AllExpenses;
