import { Box, Container, Text, Image as ChakraImage, Flex, Center, SlideFade, Slide } from "@chakra-ui/react";
import Head from "next/head";
import SlideUpWhenVisible from "../components/animation/SlideWhenVisible";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsCard from "../components/newsCard";
import Page2 from "../components/page2";
import styles from "../styles/Home.module.css";
import Image from "next/image";
// import image
import gif1 from "../public/arrow.gif";
export default function Home() {
	function handleScroll() {
		window.scroll({
			top: 700,
			left: 0,
			behavior: "smooth",
		});
	}
	return (
		<div>
			<Header />
			<Box pos={"relative"}>
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
								color={"black"}
								fontFamily={"librefranklin"}
							>
								Women techmakers mongolia
							</Text>
							<Box
								ml="20"
								w="50%"
								display="flex"
								flexDir={{ md: "row", base: "column" }}
								justifyContent={{ md: "flex-end", base: "center" }}
							>
								<Text
									textTransform="uppercase"
									mr="2"
									fontWeight={"thin"}
									letterSpacing={5}
									fontSize={"2xl"}
									color={"white"}
									textAlign="center"
								>
									POWERED BY
								</Text>
								<ChakraImage height={"35px"} w="auto" src="/google.png" />
							</Box>

							<Box pos="absolute" bottom="50px" cursor="pointer" as="a" onClick={handleScroll}>
								<Image src={gif1} alt="my gif" height={50} width={50} />
							</Box>
						</Center>
					</Box>
					<Box
						position={"relative"}
						height="95vh"
						fit="cover"
						w={"full"}
						bgGradient={["linear(to-tr, #f5f5, #f5f225)"]}
					>
						<Box>
							<Box
								backgroundImage="/bg.png"
								bgRepeat="round"
								alt="background"
								w={"full"}
								h={"full"}
								position={"absolute"}
								zIndex={-1}
							/>
						</Box>
					</Box>
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
