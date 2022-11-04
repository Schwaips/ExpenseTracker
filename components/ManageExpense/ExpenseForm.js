import { StyleSheet, View, Text} from "react-native";
import { useState } from "react";
import Input from "./Input";

function ExpenseForm() {
  // const [amountValue, setamountValue] = useState('');
  const [inputValues, setinputValues] = useState({
    amount: '',
    date: '',
    description: ''
  });

  const inputChangeHandler = (inputIdentifer, enteredValue) => {
    // currentInputValues retrieves the current data in inputValues state
    setamountValue((currentInputValues) => {
      return {
        ...currentInputValues, // retrieve the values
        [inputIdentifer]: enteredValue // set the data of key from Inputvalue state to the typed valued
      };
    });
  }


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
            onChange: inputChangeHandler.bind(this, "date"),
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChange: inputChangeHandler.bind(this, 'description')
          // autoCorrect: false, // default is true
          // autoCapitalize: 'sentences', // default value is sentences.
        }}
      />
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
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowInput: {
    flex: 1,
  }
})
