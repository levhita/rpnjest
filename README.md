# Notación Polaca Inversa
En este ejercicio vamos a implementar una versión simplificada de la [notación polaca inversa](https://en.wikipedia.org/wiki/Reverse_Polish_notation), utilizando los **métodos** básicos disponibles en los **Arrays** y un poco de manipulación de **Stings**.
 
La notación polaca inversa requiere de muy poca memoría y es relativamente amigable para el humano, por su simplicidad fue inventada independientemente por varios cientificos.

Fue ampliamente usada en las primeras calculadoras por su bajo consumo de memoria y lo extremadamente fácil que es de programar.

 ## Formato
- En **NPI** los parámetros son colocados primero, seguidos del operador:

Regular:
```1 + 2```
 NPI:
```1 2 + ```


- En **NPI** los parentesís no son necesarios, se obtiene el mismo resultado con un ordén adecuado de los parámetros y operadores-

Regular:
```( 1 + 2) - ( 3  + 4)```
NPI:
```1 2 + 3 4 + -```

### Resolver una operación en Notación Polaca Inversa

Necesitaremos tener una entrada desde la cual leeremos los valores y operadores; y una pila donde almacenaremos los resultados parciales: 

```
// 1 + 2
Input: [ 1, 2, + ]
Stack: [ ]
```

El resultado se forma al leer consecutivamente de la entrada y aplicar las siguientes reglas, hasta que se termine la entrada: 

- Sí es un valor, añadirlo al tope de la pila.
- Sí es un operador:
  1. Sacar los últimos 2 operadores de la pila.
  2. Aplicar el operador.
  3. Poner el resultado en el tope de la pila.

#### Ejecución Simple
Una sola operación **1 + 2**

Paso 0:
```
Input: [ 1, 2, + ]
Stack: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, + ]
Stack: [ 1 ]
Operación: 
```

Paso 2:
```
Input: [ + ]
Stack: [ 1, 2]
Operación: 
```

Paso 3:
```
Input: [  ]
Stack: [ 3 ]
Operación:  1 + 2 = 3
```

#### Ejecución Avanzada
Ahora un ejemplo con parentesis **(1 +2) - ( 3 + 4)**

Paso 0:
```

Input: [ 1,  2, +,  3,  4, +, - ]
Stack: [ ]
Operación:
```

Paso 1:
```
Input: [ 2, +,  3,  4, +, - ]
Stack: [ 1 ]
Operación:
```

Paso 2:
```
Input: [ +,  3,  4, +, - ]
Stack: [ 1, 2 ]
Operación:
```

Paso 3:
```
Input: [ 3,  4, +, - ]
Stack: [ 3 ]
Operación: 1 + 2 = 3
```

Paso 4:
```
Input: [ 4, +, - ]
Stack: [ 3 , 3]
Operación: 
```

Paso 5:
```
Input: [ +, - ]
Stack: [ 3, 3, 4]
Operación: 
```

Paso 6:
```
Input: [ - ]
Stack: [ 3, 7 ]
Operación: 3 + 4  = 7
```

Paso 7:
```
Input: [ ]
Stack: [ -4 ]
Operación: 3 - 7 = -4
```

## TDD
Test Driven Development es una forma de desarrollo en la que las pruebas se hacen antes del código que la resuelva.

  1. Haz una prueba que represente a un requerimiento, deja que falle.
  2. Haz el código mínimo que pase la prueba.
  3. Repite con el siguiente requerimiento.
  4. Refactorea de ser necesario, debes de seguir pasando las pruebas anteriores.

### Requerimientos
  
  1. Si se introduce 1 solo valor, debería simplemente retornarlo.
  2. Debe de poder con todas las operaciones comunes: + * / -
  3. En caso de *, / y -, el ordén es importante: 2 4 - == -2
  4. "2 +", no tiene la cantidad suficiente de operandos para aplicar la operación, debería lanzar un error.
  5. Debe de soportar números negativos, flotantes y de más de 1 digito.
  6. Operaciones invalidas deben de lanzar un error.
  7. Cadenas vacias deben de lanzar un error.
  8. ¿Soporta cantidad de espacios variables sin tronar?
  9. Operaciones unitarias como sin, ln, log deberían de poderse utilizar.