import CardProjects from "./layout/CardProjects";
import { CaretDoubleRight } from "@phosphor-icons/react";
import styles from "../styles/LastProjects.module.css";
import { projectsUtil } from "./util/projectsUtil";

export default function LatestProjects(){
	return(
		<section  className={styles.containerLastProjects}>
			<h1 id="lastedProjects" className={styles.titleLastProjects}>Últimos Projetos</h1>
			<div  className={styles.contentCardProjects}>
				{projectsUtil.map((project) => {
					return(
						<CardProjects key={project.nome} project={project}/>
					);	
				})}
			</div>
			<div className={styles.containerMoreProject}>
				<a href="https://github.com/Joaovitorcgds?tab=repositories" target="_blank" rel="noreferrer" className={styles.linkMoreProjects}>
					Veja mais Projetos
					<CaretDoubleRight size={20} weight="bold" color="#211b12e5" />
				</a>
			</div>
		</section>
	);
}