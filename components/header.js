import React from "react";

import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	VisuallyHidden,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton,
	Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// import { Logo } from "@choc-ui/logo";
//next inage
const Header = () => {
	const bg = useColorModeValue("white", "gray.800");
	const mobileNav = useDisclosure();
	return (
		<React.Fragment>
			<chakra.header
				bg={bg}
				w="full"
				px={{
					base: 2,
					sm: 4,
				}}
				py={4}
				shadow="md"
			>
				<Flex alignItems="center" justifyContent="space-between" mx="auto">
					<Flex>
						<chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center">
							<Image height={"80px"} src="/WTM logo_horiz_rgb 1.png" />
							<VisuallyHidden>WTM</VisuallyHidden>
						</chakra.a>
					</Flex>
					<HStack display="flex" alignItems="center" spacing={1}>
						<HStack
							spacing={1}
							mr={1}
							color="brand.500"
							display={{
								base: "none",
								md: "inline-flex",
							}}
						>
							<Button
								px="30px"
								borderColor={"blue.500"}
								color={"blue.500"}
								borderWidth={2}
								borderRadius={0}
								variant="outline"
							>
								IWD 2022
							</Button>
						</HStack>
						{/* <Button colorScheme="brand" size="sm">
							Get Started
						</Button> */}
						<Box
							display={{
								base: "inline-flex",
								md: "none",
							}}
						>
							<IconButton
								display={{
									base: "flex",
									md: "none",
								}}
								aria-label="Open menu"
								fontSize="20px"
								color="gray.800"
								_dark={{
									color: "inherit",
								}}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>

							<VStack
								pos="absolute"
								top={0}
								left={0}
								right={0}
								display={mobileNav.isOpen ? "flex" : "none"}
								flexDirection="column"
								p={2}
								pb={4}
								m={2}
								bg={bg}
								spacing={3}
								rounded="sm"
								shadow="sm"
							>
								<CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

								<Button w="full" variant="ghost">
									IWD 2022
								</Button>
							</VStack>
						</Box>
					</HStack>
				</Flex>
			</chakra.header>
		</React.Fragment>
	);
};
export default Header;
