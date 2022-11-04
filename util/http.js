import axios from 'axios';

export function storeExpense(expenseData) {
  // First value : in the url, we got it from firebase. we can extend eg expenses.json here.
  // extansion will be translated as node in DB.
  // Second argument : value that should be send. expenseData (here amount, description and date.)
  axios.post(
    "https://expensetracker-react-nat-5fce1-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}

