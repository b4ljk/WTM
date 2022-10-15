import { Box, Container, Text, Image as ChakraImage, Flex, Center } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsCard from "../components/newsCard";
import Page2 from "../components/page2";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<div>
			<Header />
			<Box pos={"relative"} bg="#0E2A47" px="5%">
				<Box left={0} w={"full"} height={"full"} pos={"absolute"} zIndex={999}>
					<Center h="full" display={"flex"} flexDir={"column"}>
						<Text
							w="80%"
							textAlign={"center"}
							fontSize={"5vw"}
							fontWeight={"black"}
							textTransform={"uppercase"}
							as={"h1"}
							color={"blue.100"}
						>
							WOmen techmakers mongolia
						</Text>
						<Text
							w="50%"
							textAlign={"end"}
							fontWeight={"thin"}
							letterSpacing={5}
							fontSize={"2xl"}
							color={"white"}
						>
							POWERED BY
						</Text>
					</Center>
				</Box>
				<ChakraImage position={"relative"} maxH={"95vh"} w={"full"} src="/WorldMap.svg" />
			</Box>
			<Box minHeight={"40vh"}>
				<Page2 />
			</Box>
			<Box minH={"40vh"}>
				<Container py="16" maxW={"container.md"}>
					<Flex>
						<Text fontWeight={"bold"} textAlign={"center"}>
							Нээлттэй, олныг хамарсан хүрээлэл бий болгох
						</Text>
						<Text fontWeight={"bold"} textAlign={"center"}>
							Бодит, хэрэгцээт контент мэдээллээр хангах
						</Text>
						<Text fontWeight={"bold"} textAlign={"center"}>
							Үйл ажиллагаа, арга хэмжээ зохион байгуулах
						</Text>
					</Flex>
				</Container>
			</Box>
			<Box minH={"40vh"}>
				<Container py="16" maxW={"container.lg"}>
					<Flex>
						<NewsCard />
						<NewsCard />
					</Flex>
				</Container>
			</Box>
			<Footer />
		</div>
	);
}
