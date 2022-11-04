import axios from "axios";

const BACKEND_URL =
  "https://expensetracker-react-nat-5fce1-default-rtdb.europe-west1.firebasedatabase.app/";

export function storeExpense(expenseData) {
  // First value : in the url, we got it from firebase. we can extend eg expenses.json here.
  // extansion will be translated as node in DB.
  // Second argument : value that should be send. expenseData (here amount, description and date.)
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

// request to GET all expenses
export async function fetchExpenses() {
  // return Promise object that gives you access to other data.
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  // this below lines, will be executed once the response is there.
  const expenses = [];
  // We iterate through data received from firebase to retrieve each expenses.
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount, // we dynamically access the data in [key]
      date: new Date(response.data[key].date), // needs to be converted as date. In Firebase this is string
      description: response.data[key].description,
    };
    expenses.push(expenseObj)
  }
  return expenses;
}
