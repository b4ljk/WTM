import { Box, Container, Text, Image as ChakraImage, Flex, Center, SlideFade, Slide } from "@chakra-ui/react";
import Head from "next/head";
import SlideUpWhenVisible from "../components/animation/SlideWhenVisible";
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
				<SlideUpWhenVisible>
					<Box left={0} w={"full"} height={"full"} pos={"absolute"} zIndex={999}>
						<Center h="full" display={"flex"} flexDir={"column"}>
							<Text
								w="80%"
								textAlign={"center"}
								fontSize={"5vw"}
								fontWeight={900}
								textTransform={"uppercase"}
								as={"h1"}
								color={"blue.100"}
								fontFamily={"librefranklin"}
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
				</SlideUpWhenVisible>
			</Box>
			<Box minHeight={"40vh"}>
				<SlideUpWhenVisible>
					<Page2 />
				</SlideUpWhenVisible>
			</Box>
			<Box bg="#d9d9d9" minH={"40vh"}>
				<SlideUpWhenVisible>
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
				</SlideUpWhenVisible>
			</Box>
			<SlideUpWhenVisible>
				<Box minH={"40vh"}>
					<Container py="16" maxW={"container.lg"}>
						<Flex flexDir={{ base: "column", md: "row" }}>
							<NewsCard
								image={"https://filmdaily.co/wp-content/uploads/2021/02/Bliss-lede-1300x731.jpg"}
								title="Сар бүрийн уулзалт"
								description={"Сар бүрийн уулзалт"}
							/>
							<NewsCard />
						</Flex>
					</Container>
				</Box>
			</SlideUpWhenVisible>
			<Footer />
		</div>
	);
}
