import styles from "../styles/Header.module.css";

export default function Header(){
	return(
		<header className={styles.container}>
			<ul className={styles.content}>
				<a className={styles.liText} href="#">Home</a>
				<a className={styles.liText} href="#">Habilidades</a>
				<a className={styles.liText} href="#">Sobre mim</a>
				<a className={styles.liText} href="#">Últimos projetos</a>
			</ul>          
		</header>
	);
}
