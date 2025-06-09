// Definición del tipo para una tarifa
export type Tarifa = {
  id: number; // Identificador único de la tarifa
  nombre: string; // Nombre de la tarifa (ej. "Plan Básico")
  descripcion: string; // Descripción de la tarifa
  precioMensual: number; // Precio mensual de la tarifa
  minutosIncluidos: number; // Minutos incluidos en la tarifa
  datosIncluidos: string; // Datos incluidos (ej. "5GB", "Ilimitados")
  mensajesIncluidos: number; // Mensajes SMS incluidos
};

// Definición del tipo para un móvil
export type Movil = {
  id: number; // Identificador único del móvil
  marca: string; // Marca del móvil (ej. "Samsung", "Apple")
  modelo: string; // Modelo del móvil (ej. "Galaxy S21", "iPhone 14")
  almacenamiento: string; // Capacidad de almacenamiento (ej. "128GB", "256GB")
  ram: string; // Memoria RAM (ej. "4GB", "8GB")
  camara: string; // Resolución de la cámara (ej. "48MP", "108MP")
  bateria: string; // Capacidad de la batería (ej. "4000mAh", "5000mAh")
  precio: number; // Precio del móvil
};