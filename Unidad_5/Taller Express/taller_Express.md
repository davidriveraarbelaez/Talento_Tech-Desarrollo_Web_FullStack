# Ejercicios Express

1. Crear una tabla de multiplicar de un número ingresado por el usuario. La ruta debe ser /tabla/:numero y debe devolver la tabla de multiplicar del número en formato JSON.
2. Crear un programa que simule una calculadora básica, permitiendo al usuario elegir la operación a realizar. La ruta debe ser /calculadora y debe recibir los parámetros operando1, operando2 y operacion.
3. Crear un programa que solicite al usuario su nombre y edad, y luego muestre un mensaje de bienvenida personalizado. La ruta debe ser /saludo/:nombre/:edad y debe devolver un mensaje de saludo personalizado.
4. Imprimir los números del 1 hasta un número definido por el usuario. La ruta debe ser /numeros/:numero y debe devolver una lista de números desde 1 hasta el número ingresado.
5. Crear una función que convierta grados Celsius a Fahrenheit. La ruta debe ser /celsius-a-fahrenheit y debe recibir el parámetro celsius. Utilizar una arrow function.
6. Creación de un servidor básico.
  -  Crear un servidor Express: Configura un servidor Express básico que escuche en un puerto específico.
  -  Definir una ruta raíz: Crea una ruta raíz (/) que responda con un mensaje simple.
  -  Probar con Postman: Envía una solicitud GET a la ruta raíz y verifica que se reciba la respuesta esperada.
7. Rutas dinámicas.
  -  Crear una ruta con parámetros: Define una ruta que acepte un parámetro de identificación y muestre un mensaje personalizado basado en ese parámetro.
  -  Probar con Postman: Envía solicitudes a la ruta con diferentes valores para el parámetro y verifica que las respuestas sean correctas.
8. Middleware.
  -  Implementar un middleware: Crea un middleware que registre información sobre cada solicitud (método, ruta, fecha y hora) en la consola.
  -  Aplicar el middleware: Aplica el middleware a todas las rutas de la aplicación.
  -  Verificar logs: Observa los registros en la consola para confirmar que el middleware se está ejecutando correctamente.
9. Manejo de solicitudes POST.
  -  Crear una ruta POST: Define una ruta POST que reciba datos en el cuerpo de la solicitud.
  -  Procesar los datos: Extrae los datos del cuerpo de la solicitud y realiza alguna acción con ellos (por ejemplo, guardarlos en una base de datos simulada).
  -  Probar con Postman: Envía una solicitud POST con datos en el cuerpo y verifica que se procesen correctamente.
10. Implementa la autenticación con proveedores externos como Google, Facebook o GitHub utilizando estrategias de autenticación de terceros.
11. Crea middleware personalizados para manejar diferentes tipos de errores y enviar respuestas informativas al cliente.

## Recomendaciones

- Medir el tiempo empleado para cada ejercicio y anotarlo.

## Ejercicios resueltos
- [Ejercicio 2](https://github.com/ingDavidRivera/Talento_Tech-Desarrollo_Web_FullStack/blob/main/Unidad_5/Taller%20Express/Ejercicio2.js)

