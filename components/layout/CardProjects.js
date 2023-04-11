import PropTypes from "prop-types";
import { useEffect } from "react";
import Image from "next/image";
import { Code, CheckFat } from "@phosphor-icons/react";
import styles from "../../styles/LayoutCSS/Card.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

CardProjects.propTypes = {
	project: PropTypes.shape({
		nome: PropTypes.string.isRequired,
		skills: PropTypes.array.isRequired,
		description: PropTypes.string.isRequired,
		links: PropTypes.arrayOf(PropTypes.shape({
			href: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})),
		images: PropTypes.arrayOf(PropTypes.shape({
			img: PropTypes.object.isRequired,
			name: PropTypes.string.isRequired
		}))
	})
};

export default function CardProjects({project}){

	useEffect(() => {
		console.log(project.images);
	}, []);

	return(
		<div className={styles.containerCard}>
			<Carousel showThumbs={false} autoPlay={true} swipeable={true} transitionTime={3} infiniteLoop={true}>
				{
					project.images.map((element) => {
						return(
							<Image style={{borderRadius: "10px 10px 0 0", width: "100%", height: "auto"}} key={element.img} src={element.img} alt="ilustrar imagens"/>
						);
					})
				}
			</Carousel>
			<div style={{padding:"10px"}}>
				<h2>{project.nome}</h2>
				<div className={styles.containerSkillsProject}>
					{project.skills.map((skill) => {
						return(
							<div key={skill} className={styles.boxSkills}>
								<div>
									{skill}
								</div>
							</div>
						);
					})}
				</div>
				<p className={styles.descriptionSkillsProject}>
					{project.description}
				</p>
				<div className={styles.containerLinksProject}>
					{project.links.map((link) => {
						return(
							<a href={link.href} key={link.name} target="_blank" rel="noreferrer">
								<button className={styles.linksProjectSkill}>
									{link.name === "Code" ? <Code size={28} weight="regular" /> : <CheckFat size={28} weight="regular" />}
									<span className={styles.spanProjectSkill}>{link.name}</span>
								</button> 
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}