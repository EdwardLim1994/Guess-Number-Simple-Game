import { StyleSheet, Text, View } from "react-native";
import { type ReactNode } from "react";

import { Color } from "../constants/constant";

type Props = {
	children: ReactNode;
};

export default function Container(props: Props) {
	return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		rowGap: 16,
		padding: 32,
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.3,
		backgroundColor: Color.primary,
	},
});
