// Calculos
function calculakm(){
    var dias_semana = parseFloat(document.km.txt_dias_semana.value);
    var chs = parseFloat(document.km.txt_chs.value);;
    var ist = parseFloat(document.km.txt_ist.value);    ;
    var total;
    var arredondado;
    
    total = (dias_semana / chs) * (1 + ist/100);
    arredondado = parseFloat(total.toFixed(4));

    document.km.txt_resultado_km.value = "" + arredondado;
    document.qp.txt_km.value = "" + arredondado;
}

function calculaqp(){
    var km = parseFloat(document.qp.txt_km.value);;
    var num_pacientes = parseFloat(document.qp.txt_num_pacientes.value);
    var the = document.getElementById('op_the').value;
    var total;
    var total_pessoas_parcial = parseFloat(document.total.txt_total_pessoas.value);

    total = km * (num_pacientes * the);
    arredondado = parseFloat(total.toFixed(4)); 

    document.qp.txt_resultadoqp.value = arredondado;
    
    document.total.txt_total_pessoas.value = total_pessoas_parcial + arredondado;
    
}

function limparTotal(){
    document.total.txt_total_pessoas.value = 0;
}
