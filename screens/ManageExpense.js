import { Text } from "react-native";
import { useLayoutEffect } from "react";

// to add or edit an expense.
function ManageExpense({ route, navigation }) {
  // is it to edit or add.
  // the "?" is here to prevent issue if there isn't any expenseId value
  const editedExpenseId = route.params?.expenseId;
  // !! convert to boolean if edited expense id is undefined
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
    // dependencies
  }, [navigation, isEditing])

  return <Text></Text>;
}

export default ManageExpense;
