import imgNmx1 from "../../public/imgProjects/imgNmxCourse1.png";
import imgNmx2 from "../../public/imgProjects/imgNmxCourse2.png";
import imgNmx3 from "../../public/imgProjects/imgNmxCourse3.png";

import imgGenerator1 from "../../public/imgProjects/imgGenerator1.png";
import imgGenerator2 from "../../public/imgProjects/imgGenerator2.png";
import imgGenerator3 from "../../public/imgProjects/imgGenerator3.png";

export const projectsUtil = [
	{
		nome: "Novamix Cursos",
		skills: [
			"JavaScript",
			"ReactJS",
			"material UI",
			"Supabase",
			"SQL"
		],
		description: "Essa é uma aplicação que exibe os cursos para os clientes e o administrador pode cadastrá-lo na aula disponível na empresa Nova Mix Food Service.",
		links: [
			{
				href: "https://github.com/Joaovitorcgds/nmx-course",
				name: "Code"
			},
			{
				href: "https://nmx-course.vercel.app/",
				name: "Demo"
			}
		],
		images: [
			{
				img: imgNmx3,
				name: "Primeira imagem do projeto Novamix Courses" 
			},
			{
				img: imgNmx2,
				name: "Segunda imagem do projeto Novamix Courses"
			},
			{
				img: imgNmx1,
				name: "Terceira imagem do projeto Novamix Courses"
			}
		]
	},
	{
		nome: "Gerador de Imagem",
		skills: [
			"JavaScript",
			"ReactJS",
			"redux",
			"styled-components"
		],
		description: "Esse projeto é para gerar uma capa personalizada para o LinkedIn de acordo com a sua stack de programação",
		links: [
			{
				href: "https://github.com/Joaovitorcgds/image-generator",
				name: "Code"
			},
			{
				href: "https://image-generator-ecru.vercel.app/",
				name: "Demo"
			}
		],
		images: [
			{
				img: imgGenerator1,
				name: "Primeira imagem do projeto gerador de capa para o linkedin" 
			},
			{
				img: imgGenerator2,
				name: "Segunda imagem do projeto gerador de capa para o linkedin"
			},
			{
				img: imgGenerator3,
				name: "Terceira imagem do projeto gerador de capa para o linkedin"
			}
		]
	}
];