import React from "react";
import Image from "next/image";
import { Code, CheckFat } from "@phosphor-icons/react";
import styles from "../../styles/LayoutCSS/Card.module.css";
import block from "../../public/block.png";

CardProjects.propTypes = {
	project: {
		nome: "string",
		skills: ["string"],
		description: "string",
		links: {
			href: "string",
			name: "string"
		},
	}
};

export default function CardProjects({project}){
	return(
		<div key={project.nome} className={styles.containerCard}>
			<Image src={block} alt="ilustrar imagem" width={380}/>
			<div>
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
							<a href={link.href} key={link.name} className={styles.linksProjectSkill} target="_blank" rel="noreferrer"> 
								{link.name === "Code" ? <Code size={28} weight="bold" /> : <CheckFat size={28} weight="bold" />}
								{link.name}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}