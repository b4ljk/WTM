import { Box, Container, Text, Image as ChakraImage, Flex, Center, SlideFade, Avatar } from "@chakra-ui/react";
import Head from "next/head";
import SlideUpWhenVisible from "../components/animation/SlideWhenVisible";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsCard from "../components/newsCard";
import Page2 from "../components/page2";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { ParticlesContainer } from "../components/particles";
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

	const page4data = [
		{
			title: "Нээлттэй, олныг хамарсан хүрээлэл бий болгох",
			image: "4_global-network.png",
		},
		{
			title: "Бодит, хэрэгцээт контент мэдээллээр хангах",
			image: "4_content.png",
		},
		{
			title: "Үйл ажиллагаа, арга хэмжээ зохион байгуулах",
			image: "4_event_whitebg.png",
		},
	];
	return (
		<div>
			<Header />
			<Box pos={"relative"}>
				<SlideUpWhenVisible>
					<Box left={0} w={"full"} height={"full"} pos={"absolute"} zIndex={999}>
						<Center h="full" display={"flex"} flexDir={"column"}>
							<Text
								w="60%"
								textAlign={"center"}
								fontSize={{ md: "3.5vw", base: "30px" }}
								fontWeight={900}
								textTransform={"uppercase"}
								as={"h1"}
								color={"black"}
								fontFamily={"librefranklin"}
								mt={"-130px"}
							>
								Women techmakers mongolia
							</Text>
							<Box
								ml={{ md: "20", base: "0" }}
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
								<ChakraImage
									margin={{ base: "auto", md: 0 }}
									width={{ base: "120px" }}
									src="/google.png"
								/>
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
						// bgGradient={["linear(to-tr, #f5f5, #f5f225)"]}
						bgGradient={["linear(to-tr, #249ad7, #86e2e0)"]}
						zIndex={-2}
					>
						<Box></Box>
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
						<Flex flexDir={{ base: "column", md: "row" }}>
							{page4data.map((item, index) => {
								return (
									<Flex flexDir="column" alignItems="center">
										<ChakraImage
											padding={"20px"}
											bg="white"
											borderRadius="400px"
											maxH={"200px"}
											src={item.image}
											my="20px"
										/>
										<Text fontWeight={"bold"} textAlign={"center"}>
											{item.title}
										</Text>
									</Flex>
								);
							})}
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
			<ParticlesContainer />
			<Footer />
		</div>
	);
}
