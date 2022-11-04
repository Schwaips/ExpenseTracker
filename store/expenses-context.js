import { createContext, useReducer } from "react";

// will expose a react component
export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: ((expenses) => {}),
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  // return a new state value
  switch (action.type) {
    case "ADD":
      // if we build our own id, that will be a problem, since the DB does that for us.
      // we will use the ID returns by Firebase.
      
      // action.payload is from dispatch
      return [{ ...action.payload, id: id }, ...state];
    case 'SET':
      const inverted = action.payload.reverse()
      return inverted;
    case "UPDATE":
      // find the index of expense that needs to be updated
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      // access the expense object with the index within array state
      const updatableExpense = state[updatableExpenseIndex];
      // generate new item : we ...updatableExpense takes the existing data of expense.
      // then we merge the new data with ...action.data.payload. We keep original id
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      // we construct a new array spread existing array of state
      const updatedExpenses = [...state];
      //  we access the object that needs to be updated and we make it equal to the new merged data.
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      // we return the state that contains the updated data.
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  // state management logique, usefull if you have complexe management
  // DUMMY EXPENSE here is used as default state.
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    // dispatch is provided by useReducer
    // type : because in expense reducer we check the type of action
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({type: 'SET', payload: expenses})
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
