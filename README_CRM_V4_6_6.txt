ESG CRM V4.6.6

REFERIDOS:
- Si llega un código que no existe (ej. ana), el script crea automáticamente una fila provisional en REFERIDOS.
- La fila queda con Nombre = Ana, Estado = Pendiente, Descuento cliente = 5 y Comisión = POR DEFINIR, salvo que exista COMISION_REFERIDO_DEFAULT en CONFIGURACION.
- Para calcular comisión pendiente, escribe en la columna Comisión una regla como 10% o $40.
- Al registrarse un contrato firmado, Ventas aumenta y Comisión pendiente se calcula si la regla está definida.
- Acompañamiento ESG por hora queda excluido de comisión automática.

CALCULO:
- Servicios ESG fijos: Total = Precio base - descuento de referido.
- Ejemplo: $250 con 5% = $237.50.
- El cálculo se vuelve a hacer en Apps Script para no depender solo del navegador.
