import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import type { ReactNode } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import WinGameScreen from "./screens/WinGameScreen";

export default function App() {
	const [screen, setScreen] = useState<ReactNode>(
		<StartGameScreen onStartGame={startGame} />
	);

	function startGame() {
		setScreen(
			<GameScreen onLoseGame={handleLoseGame} onWinGame={handleWinGame} />
		);
	}

	function handleRestart() {
		setScreen(<StartGameScreen onStartGame={startGame} />);
	}

	function handleLoseGame() {
		setScreen(<GameOverScreen onRetry={handleRestart} />);
	}

	function handleWinGame() {
		setScreen(<WinGameScreen onRetry={handleRestart} />);
	}

	return (
		<LinearGradient
			colors={["#72063c", "#ddb52f"]}
			style={styles.container}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode='cover'
				style={styles.container}
				imageStyle={{ opacity: 0.2 }}
			>
				<SafeAreaView style={[styles.container, styles.innerContainer]}>
					{screen}
				</SafeAreaView>
			</ImageBackground>
			<StatusBar style='auto' />
		</LinearGradient>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		width: "100%",
	},
	innerContainer: {
		marginHorizontal: 24,
		width: "95%",
	},
});
