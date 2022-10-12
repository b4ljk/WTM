import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

export default function NewsCard() {
	return (
		<Box mx="4" rounded="lg" shadow="md" bg="white" _dark={{ bg: "gray.800" }} maxW="2xl">
			<Image
				rounded="lg"
				w="full"
				h={64}
				fit="cover"
				src="https://static1.squarespace.com/static/5ac589eb8ab722aa77be2eeb/5b479b056d2a73336ed80ffe/5b50d290562fa7d2dabe2955/1532023444871/random_interactive_share.jpg"
				alt="Article"
			/>

			<Box p={6}>
				<Box>
					<Link
						display="block"
						color="gray.800"
						_dark={{ color: "white" }}
						fontWeight="bold"
						fontSize="2xl"
						mt={2}
						_hover={{ color: "gray.600", textDecor: "underline" }}
					>
						I Built A Successful Blog In One Year
					</Link>
					<chakra.p mt={2} fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum
						volutpat vel.
					</chakra.p>
				</Box>

				<Box mt={4}>
					<Flex alignItems="center">
						<chakra.span mx={1} fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
							21 SEP 2015
						</chakra.span>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
