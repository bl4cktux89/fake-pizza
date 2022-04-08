'use strict';
//variáveis
let somaMuçarela = 0;
let somaMista = 0;
let somaCalabresa = 0;

let vendaMuçarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');

let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e)
{
    if(document.getElementById('muçarela').checked)
    {
        somaMuçarela = somaMuçarela + 1;
        vendaMuçarela = vendaMuçarela + 25.00;
        document.getElementById('resultadoMuçarela').innerHTML = somaMuçarela;
        document.getElementById('vendaMuçarela').innerHTML = vendaMuçarela;
    } else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 25.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista;
    } else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa +1;
        vendaCalabresa = vendaCalabresa + 25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
    }

}

function estorno(e)
{
    if(document.getElementById('muçarela').checked)
    {
        somaMuçarela = somaMuçarela - 1;
        vendaMuçarela = vendaMuçarela - 25.00;
        if(somaMuçarela<0)
        {
            somaMuçarela = 0;
            vendaMuçarela = 0;
        }
        document.getElementById('resultadoMuçarela').innerHTML = somaMuçarela;
        document.getElementById('vendaMuçarela').innerHTML = vendaMuçarela;
    } else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 25.00;
        if(somaMista<0)
        {
            somaMista = 0;
            vendaMista = 0;
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista;
    } else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa<0)
        {
            somaCalabresa = 0;
            vendaCalabresa = 0;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa;
    }

}