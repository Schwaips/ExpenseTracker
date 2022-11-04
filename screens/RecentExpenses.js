import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ErrorOverlay from "../components/ui/ErrorOverlay";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDay } from "../util/date";
import { fetchExpenses } from "../util/http";

// we don't recreate RecentExpenses if we open the modal to add a new expense.
// therefore, we need to use context to update accordingly.

function RecentExpenses(params) {
  // state to manage loading screen
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesContext = useContext(ExpensesContext);

  // applies when component is re-render
  // We retrieve the data from DB here. with a GET request :)
  useEffect(() => {
    // it is encourage to create an async function within useEffect()
    // instead of applying async await directly to the fetchExpenses method.
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses(); // yield a promise. that needs to be resolved to pursue.
        expensesContext.setExpenses(expenses);
      } catch(error) {
        setError('Could not fetch Expenses!')
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  if(error && !isFetching) {
    return <ErrorOverlay message={error} />
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDay(today, 7);

    return expense.date >= date7daysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallBackText="No expenses for the last 7 days"
    />
  );
}

export default RecentExpenses;
