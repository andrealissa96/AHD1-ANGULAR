import { CursoModel } from "../models/curso.model";

export const CURSOS: CursoModel[]=[
    {
        idCurso: 1,
        nombre: "HTML5",
        descripcion: "Estructuración semántica con etiquetas.",
        horas: "30 horas",
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "https://cdn-icons-png.flaticon.com/512/3128/3128323.png",
        destacado: false
    },


    {
        idCurso: 2,
        nombre: "CSS3",
        descripcion: "Aplicación de hojas de estilo en cascada.",
        horas: "40 horas",
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png",
        destacado: true
    },

    {
        idCurso: 3,
        nombre: "Javascript",
        descripcion: "Programación Básica.",
        horas: "60 horas",
        modalidad: "Virtual",
        idInstructor: 1,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW41-f13wcfMVqPEl9X70IAV9fvf7oYE6svE8e4xIEA&s=10",
         destacado: false
    },

    {
        idCurso: 4,
        nombre: "MySQL",
        descripcion: "Diseño de base de datos.",
        horas: "80 horas",
        modalidad: "Virtual",
        idInstructor: 3,
        imagen: "https://media.licdn.com/dms/image/v2/D4D12AQGDQQGDyBwIfg/article-cover_image-shrink_720_1280/B4DZmaCgLFGgAI-/0/1759225973086?e=2147483647&v=beta&t=TwwNhxGrlnPiOKrH1dDjSVVALliW025fHghZvPZsP5M",
         destacado: false
    },

     {
        idCurso: 5,
        nombre: "Oracle",
        descripcion: "Diseño de base de datos.",
        horas: "80 horas",
        modalidad: "Virtual",
        idInstructor: 3,
        imagen: "https://www.portaone.com/wp-content/uploads/2022/09/Logo-Oracle-1.webp",
         destacado: false
    }
]



