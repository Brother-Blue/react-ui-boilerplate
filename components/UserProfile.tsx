import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";

export const UserProfile = () => {
	return (
		<Center py={6}>
			<Box
				maxW={"270px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
				style={{
					border: "2px solid",
					borderColor: useColorModeValue("rgb(178,25,255)", "rgb(0,200,100)"),
				}}>
				<Image
					h={"120px"}
					w={"full"}
					src={
						"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					}
					objectFit={"cover"}
				/>
				<Flex justify={"center"} mt={-12}>
					<Avatar
						size={"xl"}
						src={
							"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
						}
						alt={"Author"}
						css={{
							border: "2px solid white",
						}}
					/>
				</Flex>

				<Box p={6}>
					<Stack spacing={0} align={"center"} mb={5}>
						<Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
							John Doe
						</Heading>
						<Text color={"gray.500"}>Frontend Developer</Text>
					</Stack>
				</Box>
			</Box>
		</Center>
	);
};
