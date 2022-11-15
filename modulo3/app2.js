const empleado={
    bruto: 14500,
    hijos: 2,
    pagas: 14
};
let sueldoaño;
let retencion;
let retencionneto;
let sueldomensual;
let retencionfinal;
const aux = empleado.bruto;
console.log(aux);

/*switch(aux){
    case aux < 12000 :
        retencion= 0
break;
    case aux> 12000 && aux < 24000:
        retencion= 8
break;
    case aux> 24000 && aux < 34000:
        retencion= 16
break;
    case aux > 34000:
        retencion= 30
break;
}*/
if(aux <12000){
    retencion= 0
}if(aux> 12000 && aux < 24000){
    retencion= 8
}if(aux> 24000 && aux < 34000){
    retencion=16
}if(aux> 34000){
    retencion=30
}


console.log(retencion);
if(empleado.hijos > 0 && retencion > 0){
    retencion=retencion-2;
    
    retencionfinal=retencion / 100;
   
}
console.log(retencionfinal);
sueldoneto= empleado.bruto-retencionfinal*empleado.bruto;
console.log(sueldoneto);

sueldomensual= sueldoneto/14;
console.log(sueldomensual + " € en 14 pagas");

