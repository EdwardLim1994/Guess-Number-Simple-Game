import { View, StyleSheet, Text, Alert } from "react-native";
import { PrimaryButton } from "../components/Button";
import { NumberInput } from "../components/Input";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import Container from "../components/Container";

type Props = {
	onLoseGame: () => void;
	onWinGame: () => void;
};

export default function GameScreen(props: Props) {
	const [chance, setChance] = useState<number>(3);
	const [number, setNumber] = useState<string>("");
	const [guessNumber, setGuessNumber] = useState<number>(0);

	useEffect(() => {
		setGuessNumber(generateRandomNumber());
	}, []);

	function generateRandomNumber() {
		return Math.floor(Math.random() * 99) + 1;
	}

	function onResetHandler() {
		setNumber("");
	}

	function onConfirmHandler() {
		if (chance === 0) {
			props.onLoseGame();
			return;
		}

		const currentNumber = parseInt(number);

		if (
			isNaN(currentNumber) ||
			currentNumber <= 0 ||
			currentNumber >= 100
		) {
			Alert.alert("Invalid", "Input must be a number between 1 to 99.", [
				{ text: "Okay", style: "destructive", onPress: onResetHandler },
			]);
			onResetHandler();
			return;
		}

		if (currentNumber === guessNumber) {
			props.onWinGame();
			return;
		} else {
			Alert.alert(
				"Miss",
				`You didn't hit the number. You have ${
					chance - 1
				} chance left.`,
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: () => {
							setChance((c) => c - 1);
							onResetHandler();
						},
					},
				]
			);
		}
	}

	return (
		<Container>
			<Title>Let Guess Number</Title>
			<Text style={{ color: "white" }}>
				Guess a number between 1 to 99
			</Text>
			<Text style={{ color: "red", fontSize: 18 }}>
				You have {chance} chance
			</Text>
			<NumberInput number={number} onChange={setNumber} />
			<View style={styles.buttonContainer}>
				<View style={styles.buttonWrapper}>
					<PrimaryButton onPress={onResetHandler}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.buttonWrapper}>
					<PrimaryButton onPress={onConfirmHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
	},
	buttonWrapper: {
		flex: 1,
	},
});
