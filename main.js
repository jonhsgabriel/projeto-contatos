const form = document.getElementById('form-agenda');
const imgAprovado = '<img src="./images/certo.png" alt="correto"/>'; 
const imgReprovado = '<img src="./images/errado.png" alt="errado"/>';
const nomes = [];
const telefones = [];
const spancadastrado = '<span class="valor cadastrado">Aprovado</span>';
const spanNaoCadastrado = '<span class="valor naoCadastrado">Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaContatosFinal();
    console.log(nomes);
    console.log(telefones);
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomeContato.value)){
        alert (`O nome: ${inputNomeContato.value} já foi inserido`);
    }else{
    nomes.push(inputNomeContato.value);
    telefones.push(inputNumeroContato.value);
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas+=linha;
    }
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaContatosFinal(){
    const atualizaFinal = calculaContatosFinal();
    document.getElementById('valor').innerHTML = atualizaFinal;
    console.log(atualizaFinal);
};

function calculaContatosFinal(){
    return telefones.length;
};