import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/Home.module.css";
import Presentation from "@/components/Presentation";
import Skills from "@/components/Skills";
import LatestProjects from "@/components/LatestProjects";
import About from "@/components/About";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfólio João Vitor Costa</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon3.png" />
			</Head>
			<main className={styles.main}>
				<Header/>
				<Presentation/>
				<Skills/>
				<About/>
				<LatestProjects/>
			</main>
		</>
	);
}
