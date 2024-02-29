import { StyleSheet, Text, View } from "react-native";
import React, { type ReactNode } from "react";
import { Color } from "../constants/constant";

type Props = {
	children: ReactNode;
};

export default function Title(props: Props) {
	return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontWeight: "700",
		fontSize: 28,
		paddingVertical: 18,
		paddingHorizontal: 24,

		color: Color.secondary,
		borderWidth: 2,
		borderColor: Color.secondary,
		borderRadius: 6,
	},
});
