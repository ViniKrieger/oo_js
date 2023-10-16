function Produto(marca) {
    this.marca = marca;
}

function Tenis(marca, tamanho, cor) {
    
    this.tamanho = tamanho;
    this.cor = cor;

    Produto.call(this, marca);

}

function Camisa(marca, tamanho, cor) {
    
    this.tamanho = tamanho;
    this.cor = cor;

    Produto.call(this, marca);

}

const produto1 = new Tenis ('Nike', '42', 'Preto');
const produto2 = new Tenis ('Adidas', '39', 'Branco');
const produto3 = new Camisa ('Puma', 'G', 'Azul');

console.log (produto1);
console.log (produto2);
console.log (produto3);