import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import ImageContent from "../public/icon3.png";

export default function Header(){
	return(
		<header className={styles.container}>
			<a href="#"><Image src={ImageContent} alt="logo" width={50}/></a>
			<ul className={styles.content}>
				<a className={styles.liText} href="#">About</a>
				<a className={styles.liText} href="#">What I do</a>
				<a className={styles.liText} href="#">Portfolio</a>
				<a className={styles.liText} href="#">Vamos conversar</a>
			</ul>          
		</header>
		
	);
}





{/* <li className={styles.liText}>Home</li>
<li className={styles.liText}>Sobre</li>
<li className={styles.liText}>Habilidades</li>
<li className={styles.liText}>Contato</li> */}