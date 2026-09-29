/**
 * Se definen los estados y la estructura de los proyectos.
 * Contiene también un tipo auxiliar para resumir la información de los proyectos.
 */
export type EstadoProyecto = 'Activo' | 'Pausado' | 'Completado';
export interface Proyecto {
    id: number;
    nombre: string;
    cliente: string;
    estado: EstadoProyecto;
    fechaInicio: Date;
    fechaFin: Date;
    empleadiosIDs: number[];
}

export type ProyectoResume = Pick<Proyecto, 'id' | 'nombre' |'cliente' | 'estado'>;
