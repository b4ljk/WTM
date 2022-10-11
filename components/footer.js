import { Box, Flex, HStack, Image, Link, Stack, Text, VStack, Divider, Icon } from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
	return (
		<Box bg="white" _dark={{ bg: "gray.600" }}>
			<Stack direction={{ base: "column", lg: "row" }} w="full" justify="space-between" p={10} py="7">
				<Box
					display={"flex"}
					flexDir={{ base: "column", md: "row" }}
					alignItems="ce"
					flex={1}
					justifyContent="space-between"
					fontSize={{ base: "12px", md: "16px" }}
					color="gray.800"
					_dark={{ color: "white" }}
					textAlign={{ base: "center", md: "left" }}
					px={{ base: 0, md: 10 }}
					gap={4}
				>
					<Box>
						<Box mb={2}>Follow & join us</Box>
						<HStack justify="center">
							<Link>
								<Box
									display={"flex"}
									height={"30px"}
									width="30px"
									bg={"facebook.600"}
									justifyContent="center"
									alignItems={"center"}
									borderRadius="4px"
								>
									<Icon color="white" _dark={{ color: "white" }} h="20px" w="20px" as={FaFacebookF} />
								</Box>
							</Link>
							<Link>
								<Box
									display={"flex"}
									height={"30px"}
									width="30px"
									bg="red"
									justifyContent="center"
									alignItems={"center"}
									borderRadius="4px"
								>
									<Icon color="white" _dark={{ color: "white" }} h="20px" w="20px" as={FaYoutube} />
								</Box>
							</Link>
							<Link>
								<Box
									display={"flex"}
									height={"30px"}
									width="30px"
									bgGradient={"linear(to-tr, #F58529, #DD2A7B, #8134AF, #515BD4)"}
									justifyContent="center"
									alignItems={"center"}
									borderRadius="4px"
								>
									<Icon color={"white"} h="20px" w="20px" as={GrInstagram} />
								</Box>
							</Link>
							<Link>
								<Box
									display={"flex"}
									height={"30px"}
									width="30px"
									bg={"linkedin.700"}
									justifyContent="center"
									alignItems={"center"}
									borderRadius="4px"
								>
									<Icon color={"white"} h="20px" w="20px" as={FaLinkedinIn} />
								</Box>
							</Link>
							<Link>
								<Box
									display={"flex"}
									height={"30px"}
									width="30px"
									bg={"#7289da"}
									justifyContent="center"
									alignItems={"center"}
									borderRadius="4px"
								>
									<Icon color={"white"} h="20px" w="20px" as={FaDiscord} />
								</Box>
							</Link>
						</HStack>
					</Box>
					<Flex justify="start" direction="column">
						Холбоо барих И-Мейл
						<Link>wtmmongolia@gmail.com</Link>
					</Flex>
					<Flex justify="start" direction="column">
						Илүү дэлгэрэнгүй
						<Link>www.womentechmakers.com</Link>
					</Flex>
				</Box>
			</Stack>
			<VStack py={3}>
				<Text
					fontWeight={"light"}
					textTransform={"uppercase"}
					textAlign="center"
					fontSize="smaller"
					_dark={{ color: "white" }}
				>
					Copyright &copy; WTM Mongolia. 2022 All rights reserved.
				</Text>
			</VStack>
		</Box>
	);
}
