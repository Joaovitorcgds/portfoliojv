import Image from "next/image";
import styles from "../styles/Presentation.module.css";
import imagePerson from "../public/image3c.png";
import imageLinkedin from "../public/linkedin2.png";
import imageGithub from "../public/github3.png";

const imageLink = [
	{
		link: "https://github.com/Joaovitorcgds",
		image: imageGithub,
		nome: "Github"
	},
	{
		link: "https://www.linkedin.com/in/joaovitorcgds/",
		image: imageLinkedin,
		nome: "Linkedin"
	}
];

export default function Presentation(){
	return(
		<section id="presentation" className={styles.container}>
			<div className={styles.containerInfo}>
				<div className={styles.content}>
					<p className={styles.subTitlePresentation}>Olá, eu sou</p>
					<h1 className={styles.title}>João Vitor Costa</h1>
					<p className={styles.subTitlePresentation2}>Desenvolvedor Front-end</p>
					<div className={styles.socialNetworks}>
						{imageLink.map((link) => {
							return(
								<a href={link.link} target="_blank" rel="noreferrer" key={link.nome}>
									<button className={styles.buttonInfo}>
										<Image src={link.image} alt={link.nome} width={20}/>
										<span>{link.nome}</span>
									</button>
								</a>
							);
						})}
					</div>
				</div>
				<Image priority className={styles.animationImage} src={imagePerson} alt="Imagem da pessoa"/>
			</div>
		</section>
	);
}