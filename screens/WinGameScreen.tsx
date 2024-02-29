import { Image, StyleSheet, Text } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import { PrimaryButton } from "../components/Button";

type Props = {
	onRetry: () => void;
};

export default function WinGameScreen(props: Props) {
	return (
		<Container>
			<Title>You Win</Title>
			<Image
				source={require("../assets/images/success.png")}
				style={{ width: 200, height: 200 }}
			/>
			<Text style={{ color: "white", fontSize: 18 }}>
				Congradulation!!! You win the game!!!
			</Text>
			<PrimaryButton onPress={props.onRetry}>Try again</PrimaryButton>
		</Container>
	);
}

const styles = StyleSheet.create({});
