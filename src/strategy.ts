/**
 * Interfaz que va a exigir implementar los métodos
 * necesarios para que funcione nuestro patrón
 * strategy, en este caso solo se requiere un método.
 */
export interface Strategy {
    execute(data: number[]): void;
}
