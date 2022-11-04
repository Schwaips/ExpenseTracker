import { StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect } from "react";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";

// to add or edit an expense.
function ManageExpense({ route, navigation }) {
  const expensesContext = useContext(ExpensesContext);

  // is it to edit or add.
  // the "?" is here to prevent issue if there isn't any expenseId value
  const editedExpenseId = route.params?.expenseId;
  // !! convert to boolean if edited expense id is undefined
  const isEditing = !!editedExpenseId;

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmeHandler = () => {
    if (isEditing) {
      expensesContext.updateExpense(
        editedExpenseId, {
        description: "test update",
        amount: 29.99,
        date: new Date('2022-05-23'),
      });
    } else {
      expensesContext.addExpense({
        description: "test add",
        amount: 19.99,
        date: new Date('2022-05-20'),
      });
    }

    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
    // dependencies
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmeHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
