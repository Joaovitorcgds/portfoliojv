import Image from "next/image";
import styles from "../styles/Skills.module.css";
import { skillsUtil } from "./util/skillsUtil";

export default function Skills(){
	return(
		<>
			<section id="skills" className={styles.containerSkills}>
				<h2 className={styles.titleSkill}>Habilidades</h2>
				<div className={styles.contentSkill}>
					{skillsUtil.map((skill) => {
						return(
							<div key={skill.nome} className={styles.cardSkill}>
								<Image src={skill.img} alt={skill.nome} style={{width: "6.25rem", height: "auto"}}/>
								<span className={styles.spanSkill}>{skill.nome}</span>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}