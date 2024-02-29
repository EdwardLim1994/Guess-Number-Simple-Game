import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Title from "../components/Title";
import { PrimaryButton } from "../components/Button";
import Container from "../components/Container";

type Props = {
	onStartGame: () => void;
};

export default function StartGameScreen(props: Props) {
	return (
		<Container>
			<View style={{ alignItems: "center" }}>
				<Title>Guess Number Game</Title>
			</View>
			<Text style={styles.content}>
				Let start playing number guessing game
			</Text>
			<PrimaryButton
				style={{ width: "100%", fontSize: 30 }}
				onPress={props.onStartGame}
			>
				Start
			</PrimaryButton>
		</Container>
	);
}

const styles = StyleSheet.create({
	content: {
		color: "white",
		fontSize: 24,
		textAlign: "center",
	},
});
