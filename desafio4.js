alert ('Bienvenido a "Glops"');

alert ('Presione "F12" para ver el menu');

console.log ('""""""""""""""""""""""""GLOPS""""""""""""""""""""""""');
console.log ('~~~~~~~~~~~~~~~~BEBIDAS ALCOHOLICAS~~~~~~~~~~~~~~~~');
console.log ('VINO: $500');
console.log ('CERVEZA: $300');

console.log ('~~~~~~~~~~~~~~~~BEBIDAS SIN ALCOHOL~~~~~~~~~~~~~~~~');
console.log ('COCA: $200');
console.log ('JUGO: $100');
console.log ('~~~~~~~~~~~~~~~~DELIVERY~~~~~~~~~~~~~~~~');
console.log ('ENVIO A DOMICILIO: $200');

console.log ('~~~~~~~~~~~~~~~~SI ESTA REGISTRADO 10% OFF~~~~~~~~~~~~~~~~');


var usuario = prompt('Esta registrado? si/no');
var vino = 500;
var cerveza = 300;
var coca = 200;
var jugo = 100;
var precioEnvio = 200;
var total = 0;
var totalDescuento = 0;

function pedido (producto){

    if (producto == 'vino'){

        total = total + vino;
    
    }else if(producto == 'cerveza'){
    
        total = total + cerveza;
    
    }else if(producto == 'coca'){
    
        total = total + coca;
    
    }else if(producto == 'jugo'){
    
        total = total + jugo;
    
    }else{
    
        alert ('PRODUCTO FUERA DEL MENU');
    
    }

}

function descuento(registrado){

    if (registrado == 'si'){

        totalDescuento = total - (total * 0.10);

    }else{

    }


}


const sumaTotal = (a,b) => a + b;

function delivery (envioDomicilio){


    if (envioDomicilio == "si" && usuario == 'si'){

        let totalEnvio = sumaTotal(totalDescuento, precioEnvio);
        console.log('Su total con el envio y el 10% OFF es de: $' + totalEnvio);
        let direccion = prompt ('Ingrese su direccion');
        console.log ('Su pedido sera enviado a ' + direccion);
        console.log('Gracias por su Compra');

    }else if (envioDomicilio == 'no' && usuario == 'si') {

        console.log('Su total con el 10% OFF es de: $' + totalDescuento);
        console.log('Gracias por su Compra');

    }else if (envioDomicilio == 'si' && usuario == 'no'){

        let totalEnvio = sumaTotal(total, precioEnvio);
        console.log('Su total con el envio es de: $' + totalEnvio);
        let direccion = prompt ('Ingrese su direccion');
        console.log ('Su pedido sera enviado a ' + direccion);
        console.log('Gracias por su Compra');

    }else{

        console.log('Retirar por sucursal');
        console.log('Gracias por su Compra');
    }

}



do{

    var bebida = prompt ('Que bebida del menu quiere comprar?');

    pedido(bebida);

    console.log('Se agrego ' + bebida + ' a su pedido');

    var otraCompra = prompt ('Quiere otra bebida? si/no');
    

}
while (otraCompra != 'no');

console.log('Su total es de: $' + total);

var envio = prompt('Quiere que lo enviemos a su domicilio? si/no');

descuento(usuario)

delivery(envio)





