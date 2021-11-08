import {
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";

export default function AdminLogin() {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack
					spacing={4}
					w={"full"}
					maxW={"md"}
					style={{
						border: "2px solid",
						borderColor: useColorModeValue("rgb(178,25,255)", "rgb(0,200,100)"),
						borderRadius: "1rem",
						padding: "1.2em",
						boxShadow: "0 0 3px 3px rgba(10,10,10,0.3)",
					}}>
					<Heading fontSize={"2xl"}>Sign in to your account</Heading>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input type="password" />
					</FormControl>
					<Stack spacing={6}>
						<Stack
							direction={{ base: "column", sm: "row" }}
							align={"start"}
							justify={"space-between"}>
							<Checkbox>Remember me</Checkbox>
							<Link color={"blue.500"}>Forgot password?</Link>
						</Stack>
						<Button colorScheme={"blue"} variant={"solid"}>
							Sign in
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={"Login Image"}
					objectFit={"cover"}
					boxSize="100%"
					src={
						"https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					}
					style={{
						borderRadius: "1rem",
						boxShadow: "0 0 10px 5px rgba(10,10,10,0.5)",
					}}
				/>
			</Flex>
		</Stack>
	);
}
