import React from "react";
import { Box, Flex, Icon, Image, chakra } from "@chakra-ui/react";

import { MdEmail, MdHeadset, MdLocationOn, MdCalendarToday } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

export default function App({ title, image, link, date, description }) {
	return (
		<Flex w="full" alignItems="center" justifyContent="center">
			<Box
				m={2}
				w="sm"
				mx="auto"
				bg="white"
				_dark={{ bg: "gray.800" }}
				shadow="lg"
				rounded="lg"
				overflow="hidden"
			>
				<Image
					w="full"
					h={56}
					fit="cover"
					objectPosition="center"
					src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
					alt="avatar"
				/>

				{/* <Flex alignItems="center" px={6} py={3} bg="gray.900">
					<Icon as={MdHeadset} h={6} w={6} color="white" />

					<chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
						Focusing
					</chakra.h1>
				</Flex> */}

				<Box py={4} px={6}>
					<chakra.h1 fontSize="xl" fontWeight="bold" color="gray.800" _dark={{ color: "white" }}>
						Patterson johnson
					</chakra.h1>

					<chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
						Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.
					</chakra.p>

					{date && (
						<Flex alignItems="center" mt={4} color="gray.500" _dark={{ color: "gray.200" }}>
							<Icon as={MdCalendarToday} h={5} w={6} mr={1} />

							<chakra.h1 px={2} fontSize="sm">
								{date}
							</chakra.h1>
						</Flex>
					)}
				</Box>
			</Box>
		</Flex>
	);
}
