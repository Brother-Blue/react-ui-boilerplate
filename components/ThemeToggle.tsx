import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";

import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle: FC = () => {
	const { toggleColorMode: toggleMode } = useColorMode();
	const ToggleIcon = useColorModeValue(FiMoon, FiSun);

	return (
		<IconButton
			icon={<ToggleIcon fontSize="1.5rem" />}
			variant="ghost"
			aria-label="Toggle Theme"
			onClick={toggleMode}
		/>
	);
};
