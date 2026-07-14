export interface CursoModel {
    idCurso: number;
    nombre: string;
    descripcion: string;
    horas: number | string;
    modalidad: string;
    idInstructor: number;
    imagen: string;
    destacado?: boolean;
}
