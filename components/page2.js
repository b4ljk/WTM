import { Box, Container, Text, Image } from "@chakra-ui/react";
export default function Page2() {
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
				<Image height={"24"} src="/2_worldwide.png" />
				<Text pt="4" ml="2" fontSize={"5xl"} fontWeight="black">
					190+
				</Text>
				<Image height={"24"} src="/2_women.png" />
				<Text pt="4" ml="2" fontSize={"5xl"} fontWeight="black">
					200k+
				</Text>
			</Box>
			<Text textAlign={"center"}>мянга гаруй эмэгтэйчүүдэд амжилттай хүрсээр байна. </Text>
		</Container>
	);
}
