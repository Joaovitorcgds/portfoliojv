import Image from "next/image";
import styles from "../styles/About.module.css";
import imagePerson from "../public/image3.png";
import imageLinkedin from "../public/linkedin2.png";
import imageGithub from "../public/github3.png";

const imageLink = [
	{
		link: "https://github.com/Joaovitorcgds",
		image: imageGithub,
		nome: "Logo Github"
	},
	{
		link: "https://www.linkedin.com/in/joaovitorcgds/",
		image: imageLinkedin,
		nome: "Logo Linkedin"
	}
];

export default function About(){
	return(
		<section className={styles.container}>
			<div className={styles.containerInfo}>
				<div className={styles.content}>
					<p className={styles.title}>Olá, eu sou João Vitor</p>
					<h1 className={styles.subTitleAbout}>Sou desenvolvedor Frontend Web usando ReactJs e NodeJs</h1>
					<div className={styles.socialNetworks}>
						{imageLink.map((link) => {
							return(
								<a href={link.link} target="_blank" rel="noreferrer" key={link.nome}>
									<Image src={link.image} alt={link.nome} width={30}/>
								</a>
							);
						})}
					</div>
				</div>
				<Image priority src={imagePerson} alt="Imagem da pessoa" width={288}/>
			</div>
			<div className={styles.containerButtonsInfo}>
				<button className={styles.buttonInfo}>Download CV</button>
				<button className={styles.buttonInfo}>Vamos conversar</button>
			</div>
		</section>
	);
}