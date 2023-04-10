import Image from "next/image";
import styles from "../styles/Header.module.css";
import ImageContent from "../public/icon3.png";

export default function Header(){
	return(
		<header className={styles.container}>
			<a href="#"><Image src={ImageContent} alt="logo" width={50}/></a>
			<ul className={styles.content}>
				<a className={styles.liText} href="#">Habilidades</a>
				<a className={styles.liText} href="#">Últimos projetos</a>
				<a className={styles.liText} href="#">Portfolio</a>
				<a className={styles.liText} href="#">Vamos conversar</a>
			</ul>          
		</header>
	);
}
