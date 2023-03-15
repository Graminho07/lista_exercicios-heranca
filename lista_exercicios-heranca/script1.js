// Fazer um programa para ler os dados de N produtos (N
// fornecido pelo usuário). Ao final, mostrar o preço de cada
// produto na mesma ordem em que foram digitados

const prompt = require('prompt-sync')();

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  
  precoFinal() {
    return this.preco;
  }
}

class ProdutoImportado extends Produto {
  constructor(nome, preco, taxa) {
    super(nome, preco);
    this.taxa = taxa;
  }


  precoFinal() {
    return this.preco + this.taxa;
  }
}

class ProdutoUsado extends Produto {
  constructor(nome, preco, dataFabricacao) {
    super(nome, preco);
    this.dataFabricacao = dataFabricacao;
  }

  
  precoFinal() {
    return this.preco * 0.7; 
  }
}

const n = parseInt(prompt('Quantos produtos deseja cadastrar? '));

const produtos = [];

for (let i = 1; i <= n; i++) {
  console.log(`Produto #${i}`);

  const nome = prompt('Nome: ');
  const preco = parseFloat(prompt('Preço: '));

  let produto;

  const opcao = prompt('É um produto importado (i), usado (u) ou normal (n)? ');

  switch (opcao) {
    case 'i':
      const taxa = parseFloat(prompt('Taxa de alfândega: '));
      produto = new ProdutoImportado(nome, preco, taxa);
      break;

    case 'u':
      const dataFabricacao = prompt('Data de fabricação (DD/MM/AAAA): ');
      produto = new ProdutoUsado(nome, preco, dataFabricacao);
      break;

    default:
      produto = new Produto(nome, preco);
      break;
  }

  produtos.push(produto);
  console.log('Produto cadastrado com sucesso!\n');
}

console.log('Lista de produtos:');

for (const produto of produtos) {
  console.log(`${produto.nome} - Preço: R$ ${produto.precoFinal().toFixed(2)}`);
}
