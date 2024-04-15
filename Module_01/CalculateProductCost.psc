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