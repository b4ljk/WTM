import { Box, Container, Text, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Page2 from "../components/page2";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<div>
			<Header />
			<Box height={"90vh"} bg="facebook.200"></Box>
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
			<Footer />
		</div>
	);
}
