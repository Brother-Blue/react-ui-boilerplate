import { Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const Copyright: FC = () => {
	return (
		<Text fontSize="md">
			Copyright &copy; {new Date().getFullYear()} Group name
		</Text>
	);
};
// so i can commit
export const Footer: FC = () => {
	return (
		<Stack
			as="footer"
			role="content info"
			direction="column"
			align="center"
			justify="space-around"
			p="1rem">
			<Copyright />
		</Stack>
	);
};
