/**
 * Función para mapear un EmpleadoDTO a la estructura interna de Empleado.
 */
import { EmpleadoDTO } from "./empleado.dto";
import { RolEmpleado } from "./empleado.model";

export function mapearEmpleado(dto: EmpleadoDTO){
    return{
        id: dto.id,
        nombre: dto.name,
        email: dto.email,
        rol: 'Desarrollador' as RolEmpleado,
        habilidades: [],
        disponible: dto.id%2 === 0,
        proyectoActualID: null,
        fechaIncorporacion: new Date()
    };
}