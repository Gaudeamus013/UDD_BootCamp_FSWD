
![Logo](https://github.com/Gaudeamus013/UDD_BootCamp_FSWD/blob/main/images/banner.png)




# Proyecto 1: Calcular Costo de Productos / Módulo Algoritmos

En esta entrega, encontrarás resuelto un algoritmo que aborda el problema planteado.

El problema que se resolvió es el siguiente: un sistema de cálculo de costo de un producto.

A continuación, se explicará el planteamiento, los requerimientos y la solución paso a paso. 




## Planteamiento

Un comercio necesita calcular las ventas realizadas. El objetivo es poder realizar los calculos de las ventas donde se determine si se aplica o no descuento, realizar la aplicación del IVA al artículo, si se aplica descuento por cantidad, el costo del envío dependiendo de donde se haya comprado y el costo final.
## Detalles de Implementación

El programa sigue los siguientes pasos para calcular el costo final del producto:

* **Inicialización de variables**: Se definen las variables necesarias para almacenar los datos del producto y del envío.

* **Ingreso de datos**: Se solicita al usuario ingresar el precio original, el porcentaje de descuento, el porcentaje de impuesto, la cantidad de productos y el peso del paquete en kilogramos.

* **Selección del destino de envío**: Se muestra al usuario una lista de destinos y se solicita que seleccione uno.

* **Cálculo del costo de envío**: Se obtiene el costo de envío correspondiente al destino seleccionado.

* **Cálculo del precio con descuento**: Se calcula el precio con descuento aplicando el porcentaje de descuento al precio original.

* **Cálculo del precio con impuestos**: Se calcula el precio con impuestos sumando el impuesto al precio con descuento.

* **Cálculo del precio con descuento por cantidad**: Se aplica un descuento adicional del 5% si la cantidad de productos es mayor que uno.

* **Cálculo del costo total de envío**: Se suma el costo base de envío al producto del peso por dos.

* **Cálculo del costo final**: Se suma el precio con descuento por cantidad y el costo total de envío para obtener el costo final del producto.
## Diagrama de Flujo de la propuesta de entrega

Se procede a  elaborar una solución a partir del siguiente diagrama de flujo:

![CalculateProductCost's flow diagram](https://github.com/Gaudeamus013/UDD_BootCamp_FSWD/blob/main/images/CalculateProductCost.png)
## Solución explicada paso a paso

Para una mejor comprensión del código, se procede hacer una explicación paso a paso del algoritmo:

1. Primero, se declaran las variables que se utilizarán en el programa:

* `originalPrice`: Precio original del producto (real).
* `discount`: Porcentaje de descuento (real).
* `tax`: Porcentaje de IVA (real).
* `weight`: Peso del paquete en kilogramos (real).
* `shippingCost`: Costo de envío (real).
* `finalCost`: Costo final del producto (real).
* `discountedPrice`: Precio con descuento (real).
* `taxPrice`: Precio con impuestos (real).
* `quantityPrice`: Precio con descuento por cantidad (real).
* `quantity`: Cantidad de productos (entero).
* `destination`: Destino del envío (entero).
* `shippingCostString`: Cadena que contiene el costo de envío del destino seleccionado.
* `destinations`: Matriz bidimensional que almacena los destinos y sus respectivos costos de envío.

```PSeInt
Definir originalPrice, discount, tax, weight, shippingCost, finalCost, discountedPrice, taxPrice, quantityPrice Como Real
Definir quantity, destination Como Entero
Definir shippingCostString Como Cadena
	
Dimensionar destinations[10,2]
```

2. Segundo, se realiza inicialización de variables en el programa:

* Se inicializa la matriz `destinations` con los destinos y sus costos de envío.

```PSeInt

	destinations[1,1] = "New York"
	destinations[1,2] = "10"
	destinations[2,1] = "San Francisco"
	destinations[2,2] = "16"
	destinations[3,1] = "Houston"
	destinations[3,2] = "15"
	destinations[4,1] = "Miami"
	destinations[4,2] = "20"
	destinations[5,1] = "Utah"
	destinations[5,2] = "20"
	destinations[6,1] = "Chicago"
	destinations[6,2] = "18"
	destinations[7,1] = "Orlando"
	destinations[7,2] = "24"
	destinations[8,1] = "Los Angeles"
	destinations[8,2] = "14"
	destinations[9,1] = "Alaska"
	destinations[9,2] = "40"
	destinations[10,1] = "Honolulu"
	destinations[10,2] = "80"
	
```

3. Tercero, se realiza validaciones de entradas:

* Se solicita al usuario ingresar el precio original del producto `originalPrice` hasta que se ingrese un valor mayor que 0.
* Se solicita al usuario ingresar el porcentaje de descuento `discount` hasta que se ingrese un valor mayor o igual a 0.
* Se solicita al usuario ingresar el porcentaje de IVA `tax` hasta que se ingrese un valor mayor o igual a 0.
* Se solicita al usuario ingresar la cantidad de productos `quantity` hasta que se ingrese un valor mayor que 0.
* Se solicita al usuario ingresar el peso del paquete `weight` hasta que se ingrese un valor mayor que 0.


```PSeInt

	Repetir
		Escribir "Ingrese el precio original del producto:"
		Leer originalPrice
	Hasta Que originalPrice > 0
	
	Repetir
		Escribir "Ingrese el % de descuento (0 si no tiene descuento)"
		Leer discount
	Hasta Que discount >= 0
	
	Repetir
		Escribir "Ingrese el % de IVA (0 si no tiene impuesto)"
		Leer tax
	Hasta Que tax >= 0
	
	Repetir
		Escribir "Ingrese la cantidad de productos:"
		Leer quantity
	Hasta Que quantity > 0
	
	Repetir
		Escribir "Ingrese el peso del paquete en Kilogramos:"
		Leer weight
	Hasta Que weight > 0
	
```

4. Cuarto, se procede a realizar la selección del destino:

* Se muestra una lista de destinos y sus respectivos costos de envío.
* Se solicita al usuario ingresar el número del destino seleccionado hasta que se ingrese un valor válido (entre 1 y 10).


```PSeInt

	Escribir "Seleccione el destino del envío:"
	Para i = 1 Hasta 10 Con Paso 1 Hacer
		Escribir i, ". ", destinations[i,1]
	FinPara
	
	Repetir
		Leer destination
	Hasta Que destination >= 1 Y destination <= 10
	
```

5. Quinto, una vez capturada la información ingresada se procede a realizar los cálculos:

* Se obtiene el costo de envío del destino seleccionado.
* Se calcula el precio con descuento: `discountedPrice` = `originalPrice` - (`originalPrice` * (`discount`/100)).
* Se calcula el precio con impuestos: `taxPrice` = `discountedPrice` * (1 + (`tax`/100)).
* Se calcula el precio con descuento por cantidad:
    * Si la cantidad es mayor a 1: `quantityPrice` = (`taxPrice` - (`taxPrice` * (5/100))) * `quantity`
    * Si la cantidad es 1: `quantityPrice` = `taxPrice`
* Se calcula el costo total de envío: `totalShippingCost` = `shippingCost` + (`weight` * 2).
* Se calcula el costo final del producto: `finalCost` = `quantityPrice` + `totalShippingCost`.


```PSeInt

    shippingCostString <- destinations[destination,2]
	shippingCost <- ConvertirANumero(shippingCostString)
	
	Si	discount > 0 Entonces
		discountedPrice = originalPrice - (originalPrice *  (discount/100))
	SiNo
		discountedPrice = originalPrice
	FinSi
	
	taxPrice = discountedPrice * (1 + (tax/100))
	
	Si quantity > 1 Entonces
		quantityPrice = (taxPrice - (taxPrice * (5/100))) * quantity
	SiNo
		quantityPrice = taxPrice
	FinSi
	
	totalShippingCost = shippingCost + (weight * 2)
	finalCost = quantityPrice + totalShippingCost
	
```

6. Finalmente, se visualizan los resultados:

* Se muestra el costo final del producto desglosado por:
    * Precio con descuento
    * Precio con impuestos
    * Precio con descuento por cantidad
    * Costo de envío
    * Costo final


```PSeInt

   	Escribir "Costo final del producto:"
	Escribir  "Precio con descuento: ", discountedPrice
	Escribir "Precio con impuestos: ", taxPrice
	Escribir "Precio con descuento por cantidad: ", quantityPrice
	Escribir "Costo de envío: ", totalShippingCost
	Escribir "Costo final: ", finalCost
	
```

La solución en conjunto sería:

```PSeInt
Proceso CalculateProductCost
	
	Definir originalPrice, discount, tax, weight, shippingCost, finalCost, discountedPrice, taxPrice, quantityPrice Como Real
	Definir quantity, destination Como Entero
	Definir shippingCostString Como Cadena
	
	Dimensionar destinations[10,2]
	
	destinations[1,1] = "New York"
	destinations[1,2] = "10"
	destinations[2,1] = "San Francisco"
	destinations[2,2] = "16"
	destinations[3,1] = "Houston"
	destinations[3,2] = "15"
	destinations[4,1] = "Miami"
	destinations[4,2] = "20"
	destinations[5,1] = "Utah"
	destinations[5,2] = "20"
	destinations[6,1] = "Chicago"
	destinations[6,2] = "18"
	destinations[7,1] = "Orlando"
	destinations[7,2] = "24"
	destinations[8,1] = "Los Angeles"
	destinations[8,2] = "14"
	destinations[9,1] = "Alaska"
	destinations[9,2] = "40"
	destinations[10,1] = "Honolulu"
	destinations[10,2] = "80"
	
	
	Repetir
		Escribir "Ingrese el precio original del producto:"
		Leer originalPrice
	Hasta Que originalPrice > 0
	
	Repetir
		Escribir "Ingrese el % de descuento (0 si no tiene descuento)"
		Leer discount
	Hasta Que discount >= 0
	
	Repetir
		Escribir "Ingrese el % de IVA (0 si no tiene impuesto)"
		Leer tax
	Hasta Que tax >= 0
	
	Repetir
		Escribir "Ingrese la cantidad de productos:"
		Leer quantity
	Hasta Que quantity > 0
	
	Repetir
		Escribir "Ingrese el peso del paquete en Kilogramos:"
		Leer weight
	Hasta Que weight > 0
	
	Escribir "Seleccione el destino del envío:"
	Para i = 1 Hasta 10 Con Paso 1 Hacer
		Escribir i, ". ", destinations[i,1]
	FinPara
	
	Repetir
		Leer destination
	Hasta Que destination >= 1 Y destination <= 10
	
	shippingCostString <- destinations[destination,2]
	shippingCost <- ConvertirANumero(shippingCostString)
	
	Si	discount > 0 Entonces
		discountedPrice = originalPrice - (originalPrice *  (discount/100))
	SiNo
		discountedPrice = originalPrice
	FinSi
	
	taxPrice = discountedPrice * (1 + (tax/100))
	
	Si quantity > 1 Entonces
		quantityPrice = (taxPrice - (taxPrice * (5/100))) * quantity
	SiNo
		quantityPrice = taxPrice
	FinSi
	
	totalShippingCost = shippingCost + (weight * 2)
	finalCost = quantityPrice + totalShippingCost
	
	Escribir "Costo final del producto:"
	Escribir  "Precio con descuento: ", discountedPrice
	Escribir "Precio con impuestos: ", taxPrice
	Escribir "Precio con descuento por cantidad: ", quantityPrice
	Escribir "Costo de envío: ", totalShippingCost
	Escribir "Costo final: ", finalCost
	
FinProceso
```
## Advertencia

En esta versión realizada el programa asume que el usuario ingresará las variables que correspondan, evitando de esta manera que la aplicación se cuelgue.
## Autor

- [@Gaudeamus013](https://www.github.com/Gaudeamus013)

