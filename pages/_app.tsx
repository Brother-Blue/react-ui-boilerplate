import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "@components/Wrapper";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
		</ChakraProvider>
	);
}

export default MyApp;
