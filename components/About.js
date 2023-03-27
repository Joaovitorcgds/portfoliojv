import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";
import imagePerson from "../public/image3.png";
import imageLinkedin from "../public/linkedin2.png";
import imageGithub from "../public/github3.png";

export default function About(){
	return(
		<section className={styles.container}>
			<div className={styles.containerInfo}>
				<div className={styles.content}>
					<p className={styles.title}>Olá, eu sou João Vitor</p>
					<h1 className={styles.subTitleAbout}>Sou desenvolvedor Frontend Web usando ReactJs e NodeJs</h1>
					<div className={styles.socialNetworks}>
						<a href="https://github.com/Joaovitorcgds" target="_blank" rel="noreferrer">
							<Image src={imageGithub} width={30}/>
						</a>
						<a href="https://www.linkedin.com/in/joaovitorcgds/" target="_blank" rel="noreferrer">
							<Image src={imageLinkedin} width={30}/>
						</a>
					</div>
				</div>
				<Image src={imagePerson} alt="Imagem da pessoa" width={288}/>
			</div>
			<div className={styles.containerButtonsInfo}>
				<button className={styles.buttonInfo}>Download CV</button>
				<button className={styles.buttonInfo}>Vamos conversar</button>
			</div>
		</section>
	);
}