let producto;
let prodmay;
let prodmen;
let precio;
let may;
let men;
let i=1;
let bandera=true;
let suma=0;
let total=0;
let descuento=0;
let recargo=0;
let pago;
while(i!=0) {
    precio=parseInt(prompt("ingrese precio del producto. Si acabo, ingrese 0."));
    suma=(precio+suma);
    if (precio===0) {
        i=0
    } else {
        producto=prompt("ingrese nombre del producto.");
        if (bandera){
        may=precio;
        men=precio;
        bandera=false
        prodmay=producto;
        prodmen=producto;
        } 
        if (precio>may) {
        may=precio;
        prodmay=producto;
        } else {
            if (precio<men) {
                men=precio;
                prodmen=producto;
            }
        }
    }
}
pago=parseInt(prompt("ingrese medio de pago: 1-credito, 2-debito, 3-efectivo."))
if (pago===1) {
    recargo=suma*0.25
} else {
    if (pago===2) {
        recargo=suma*0.15
    } else {
        descuento=suma*0.2
    }
}
document.write("el producto de mayor precio es "+prodmay+", costando $"+may+"<br>");
document.write("el producto de menor precio es "+prodmen+", costando $"+men+"<br>");
document.write("el total a pagar es $"+(suma-descuento+recargo))