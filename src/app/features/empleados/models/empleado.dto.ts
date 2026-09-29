/**
 * DTO para los empleados.
 * Define la estructura de los datos recibidos o enviados a través de la API.
 */
export interface EmpleadoDTO {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {name: string};
}