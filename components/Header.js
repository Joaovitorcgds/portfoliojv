import styles from "../styles/Header.module.css";

export default function Header(){
	return(
		<header id="header" className={styles.container}>
			<ul className={styles.content}>
				<a className={styles.liText} href="#presentation">Home</a>
				<a className={styles.liText} href="#skills">Habilidades</a>
				<a className={styles.liText} href="#about">Sobre mim</a>
				<a className={styles.liText} href="#lastedProjects">Últimos projetos</a>
			</ul>          
		</header>
	);
}
