import CardProjects from "./layout/CardProjects";
import styles from "../styles/LastProjects.module.css";
import { projectsUtil } from "./util/projectsUtil";

export default function LatestProjects(){
	return(
		<section className={styles.containerLastProjects}>
			<h1 className={styles.titleLastProjects}>Últimos Projetos</h1>
			<div  className={styles.contentCardProjects}>
				{projectsUtil.map((project) => {
					return(
						<CardProjects key={project.nome} project={project}/>
					);	
				})}
			</div>
		</section>
	);
}