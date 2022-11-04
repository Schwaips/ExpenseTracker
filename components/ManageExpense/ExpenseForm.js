import { TextInput, View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  const amountChangeHandler = () => {

  }


  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,

        }}
      />
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChange: () => {},
      }} />
      <Input label="Description" textInputConfig={{
        multiline: true,
        // autoCorrect: false, // default is true
        // autoCapitalize: 'sentences', // default value is sentences.
      }} />
    </View>
  );
}

export default ExpenseForm;
