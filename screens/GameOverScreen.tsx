import { StyleSheet, Text } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import { PrimaryButton } from "../components/Button";

type Props = {
	onRetry: () => void;
};

export default function GameOverScreen(props: Props) {
	return (
		<Container>
			<Title>You Lose</Title>
			<Text style={{ color: "white", fontSize: 18 }}>
				You lose the game. Press "Try again" to play one more time.
			</Text>
			<PrimaryButton onPress={props.onRetry}>Try again</PrimaryButton>
		</Container>
	);
}

const styles = StyleSheet.create({});
