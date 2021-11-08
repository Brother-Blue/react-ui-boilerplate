import { useColorMode, Button, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle: FC = () => {
	const { toggleColorMode: toggleMode } = useColorMode();
	const ToggleIcon = useColorModeValue(FiMoon, FiSun);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Button
			leftIcon={<ToggleIcon fontSize="1.5rem" />}
			variant="ghost"
			aria-label="Toggle Theme"
			onClick={toggleMode}>
			{colorMode === "light" ? "Dark mode" : "Light mode"}
		</Button>
	);
};
