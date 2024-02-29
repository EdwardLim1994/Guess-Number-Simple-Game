import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { ReactNode } from "react";
import { Color } from "../constants/constant";

type Props = {
	children: ReactNode;
	style?: object;
	onPress: () => void;
};

export const PrimaryButton = ({ onPress, children, style }: Props) => {
	return (
		<View style={[styles.outerContainer]}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.container, style, styles.pressEffect]
						: [styles.container, style]
				}
				onPress={onPress}
				android_ripple={{ color: Color.primaryButtonRipple }}
			>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},
	container: {
		backgroundColor: Color.primaryButton,

		paddingHorizontal: 16,
		paddingVertical: 8,
		elevation: 2,
	},
	text: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
	},
	pressEffect: {
		opacity: 0.75,
	},
});
