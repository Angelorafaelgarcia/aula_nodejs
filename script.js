function aula3(){
    let resultado = document.getElementById("box3");
    
    let valor1 = parseFloat(document.getElementById("txtvalor1").value);
    let valor2 = parseFloat(document.getElementById("txtvalor2").value);
    let valor3 = parseFloat(document.getElementById("txtvalor3").value);
    let maior = 0;
    
    if(valor1 > valor2 && valor1 >valor3 ){
        maior = valor1;
    }else if(valor2 > valor1 && valor2 > valor3 ){
        maior = valor2;
    }else{
     maior = valor3;
    }
    resultado.innerHTML = maior;
    
    }
    