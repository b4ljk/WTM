import { Box, Container, Text, Image as ChakraImage } from "@chakra-ui/react";
import gif1 from "../public/3_light-bulb.gif";
import Image from "next/image";

export default function Page2() {
	function Page2More() {
		return (
			<Box mt="24" display="flex">
				<Box flex="2">
					<Text fontFamily="montserrat" fontWeight="700" as="h2" fontSize="3xl" textTransform="uppercase">
						Зорилго
					</Text>
					<Box mb="26" height={2.5} w="8" bg="#4684ed" />
					<Text>
						Бид 2021 оноос эхлэн Women Techmakers Mongolia нэртэйгээр, технологийн салбарын болон тус
						салбарт сонирхолтой охидууд эмэгтэйчүүдээ дэмжих, уриалах, дуу хоолой нь болох зорилготойгоор
						тус хөтөлбөрийг албан ёсоор Монголд хэрэгжүүлж байна.
					</Text>
				</Box>
				<Box ml={5} mt="15" flex="1">
					<Image src={gif1} height={200} width={200} />
				</Box>
			</Box>
		);
	}
	return (
		<Container py="16" maxW={"container.md"}>
			<Text fontSize={18} textAlign={"center"} letterSpacing="wider" fontWeight={"medium"}>
				Google компани 2012 оноос эхлэн технологийн салбар дахь эмэгтэйчүүдийг дэмжих, урам зориг өгөх, мөн энэ
				салбар дахь хүйсийн тэнцвэрт байдлыг нэмэгдүүлэх зорилгоор Women Techmakers хөтөлбөрийг эхлүүлсэн нь
				өнөөг хүртэл дэлхийн
			</Text>

			<Box
				py="12"
				display={"flex"}
				flexDir={{ base: "column", md: "row" }}
				justifyContent="center"
				alignItems={"center"}
			>
				<ChakraImage height={"24"} src="/2_worldwide.png" />
				<Text pt="4" ml="2" fontSize={"5xl"} fontWeight="black">
					190+
				</Text>
				<ChakraImage height={"24"} src="/2_women.png" />
				<Text pt="4" ml="2" fontSize={"5xl"} fontWeight="black">
					200k+
				</Text>
			</Box>
			<Text textAlign={"center"}>мянга гаруй эмэгтэйчүүдэд амжилттай хүрсээр байна. </Text>
			<Page2More />
		</Container>
	);
}
