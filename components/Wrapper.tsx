import React from "react";
import { Navbar, Footer } from "components";
import { Flex } from "@chakra-ui/layout";

interface Props {
	children?: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
	return (
		<Flex direction="column" minH="100vh">
			<Navbar />
			<Flex
				as="main"
				w="90%"
				margin="auto"
				align="center"
				justify="center"
				direction="column"
				flex="auto">
				{children}
			</Flex>
			<Footer />
		</Flex>
	);
};

export default Wrapper;
