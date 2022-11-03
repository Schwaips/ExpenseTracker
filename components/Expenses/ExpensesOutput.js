import { View, StyleSheet } from "react-native";

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
    id: 'e4',
    description: 'A book',
    amount: 12.99,
    date: new Date('2022-11-02')
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {

  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
