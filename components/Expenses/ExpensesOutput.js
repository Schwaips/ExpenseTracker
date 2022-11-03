import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 100.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'Computer',
    amount: 100.99,
    date: new Date('2021-12-21')
  },
  {
    id: 'e3',
    description: 'Plastique',
    amount: 200.99,
    date: new Date('2021-12-30')
  },
  {
    id: 'e4',
    description: 'Bananas',
    amount: 10.99,
    date: new Date('2022-11-01')
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 12.99,
    date: new Date('2022-11-02')
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1
  }
})
