import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<div>
			<Header />
			<Box height={"90vh"} bg="facebook.200"></Box>
			<Footer />
		</div>
	);
}
