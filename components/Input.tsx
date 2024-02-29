import { StyleSheet, TextInput } from "react-native";
import React, { SetStateAction, Dispatch } from "react";

import { Color } from "../constants/constant";

type Props = {
	number: string;
	onChange: Dispatch<SetStateAction<string>>;
};

export const NumberInput = (props: Props) => {
	return (
		<TextInput
			style={styles.numberInput}
			maxLength={2}
			keyboardType='number-pad'
			autoCapitalize='none'
			autoCorrect={false}
			defaultValue={props.number}
			value={props.number}
			onChangeText={props.onChange}
		/>
	);
};

const styles = StyleSheet.create({
	numberInput: {
		height: 50,
		fontSize: 32,
		fontWeight: "700",
		borderBottomColor: Color.secondary,
		borderBottomWidth: 2,
		color: Color.secondary,
		marginVertical: 8,
		width: 50,
		textAlign: "center",
	},
});
