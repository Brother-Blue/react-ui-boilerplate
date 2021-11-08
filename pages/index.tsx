import { Box, Flex, Text } from "@chakra-ui/react";
import { UserProfile } from "components";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
	return (
		<Box>
			<Text fontSize="5xl" style={{ textAlign: "center" }}>
				Who are we?
			</Text>
			<Flex align="center" justify="center">
				<Box p="5">
					<UserProfile />
				</Box>
				<Box p="5">
					<UserProfile />
				</Box>
				<Box p="5">
					<UserProfile />
				</Box>
				<Box p="5">
					<UserProfile />
				</Box>
			</Flex>
		</Box>
	);
};

export default Home;
