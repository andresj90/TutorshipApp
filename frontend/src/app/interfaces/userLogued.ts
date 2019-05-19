export interface UserLoguedI {
    success: boolean, 
    usuario : {
    nombre: string,
    apellido: string,
    codigo: number,
    email: string,
    programa: string,
    token: string, 
    role: [], 
    debilidades: [],
    fortalezas: [],
    horario: [] 
    }
}