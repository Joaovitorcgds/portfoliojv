import Image from "next/image";
import imgGeek from "../public/geek.png";

import styles from "../styles/About.module.css";

export default function About(){
	return(
		<section id="about">
			<div className={styles.containerAbout}>
				<Image src={imgGeek} alt="Imagem ilustrativa sobre mundo geek" className={styles.imageAbout}/>
				<div className={styles.contentAbout}>
					<h1 style={{color: "#211b12e5"}}>Sobre mim</h1>
					<p className={styles.textAbout}>Sou apaixonado pelo universo geek e programação. Atualmente, estou cursando Ciência da Computação na modalidade EAD pela Faculdade Descomplica e me esforço para me manter atualizado assistindo conteúdos relevantes no YouTube e fazendo projetos práticos que aplicam conceitos aprendidos em casos reais. Estou totalmente disposto a enfrentar novos desafios e me adaptar a novas tecnologias.
						<br/>
						<br/>
          Meu foco atual é a programação web, em particular o desenvolvimento Front-end usando as tecnologias Javascript com ReactJs e NodeJs, que proporcionam o melhor desempenho e uma excelente experiência do usuário. Além disso, sempre priorizo a escrita de códigos limpos (clean code), visando facilitar futuras modificações e a legibilidade do código.</p>

					{/* <p className={styles.textAbout}>Procuro manter contato com pessoas da área de programação para ajudar aqueles que estão iniciando e para esclarecer dúvidas sobre qualquer conteúdo. Essas conversas também me proporcionam a oportunidade de aprender algo novo e de me conectar com outros profissionais da área.</p> */}
				</div>
			</div>
		</section>
	);
}