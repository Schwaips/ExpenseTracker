import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function RecentExpenses(params) {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;
