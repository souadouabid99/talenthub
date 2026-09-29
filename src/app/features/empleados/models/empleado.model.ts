/**
 * Modelos y tipos relacionados con los empleados.
 * Se definen los roles, habilidades y la estructura de los empleados.
 * Contiene también tipos auxiliares para crear, actualizar y resumir empleados.
 * Se incluye una funcion para validar si un valor es un empleado.
 */
export type RolEmpleado = 'Desarrollador' | 'Diseñador' | 'QA' | 'DeVops' | 'Manager';

export interface Habilidad {
    nombre: string;
    nivel: 'Junior' | 'Mid' | 'Senior';
}

export interface Empleado {
    id: number;
    nombre: string;
    email: string;
    rol: RolEmpleado;
    habilidades: Habilidad[];
    disponible: boolean;
    proyectoActualID: number | null;
    fechaIncorporacion: Date;
}
export type NuevoEmpleado = Omit<Empleado, 'id' | 'fechaIncorporacion'>;
export type ActualizarEmpleado = Partial<Pick<Empleado, 'rol' |'disponible' | 'proyectoActualID' | 'habilidades'>>;
export type EmpleadoResume = Pick<Empleado, 'id' | 'nombre' | 'rol' | 'disponible'>;

export function esEmpleado(valor: unknown): valor is Empleado {
    return (
        typeof valor === 'object' && valor !== null && 'nombre' in valor && 'email' in valor && 'rol' in valor
    );
}