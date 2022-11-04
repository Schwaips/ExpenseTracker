import { StyleSheet, View, Text} from "react-native";
import { useState } from "react";
import Input from "./Input";
import Button from "../ui/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  // const [amountValue, setamountValue] = useState('');
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangeHandler = (inputIdentifer, enteredValue) => {
    // currentInputValues retrieves the current data in inputValues state
    setInputValues((currentInputValues) => {
      return {
        ...currentInputValues, // retrieve the values
        [inputIdentifer]: enteredValue, // set the data of key from Inputvalue state to the typed valued
      };
    });
  };

  const submitHandler = () => {
    // collect the values pass in the form.
    const expenseData = {
      amount: +inputValues.amount, // "+" converts string to number
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"), //(this is the method, 'amount' is inputidentifer, last value will be passed automatically)
            value: inputValues.amount, // useState
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description
          // autoCorrect: false, // default is true
          // autoCapitalize: 'sentences', // default value is sentences.
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowInput: {
    flex: 1,
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
});
