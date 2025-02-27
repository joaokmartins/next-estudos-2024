export default function SomaVendas() {

  const totalVendas = [
    {produto:"Macbook", preco:9000, quantidade: 14},
    {produto:"Mala Gucci", preco:14000, quantidade: 5},
    {produto: "Mesa Daslu", preco: 43000, quantidade: 2},
    {produto: "Jaqueta Mercedes", preco: 3000, quantidade: 1},
    {produto: "Calça Diesel", preco:2000, quantidade: 4}
  ];
  
  const SomaVendas = totalVendas.reduce((acumulador, vendaAtual) => 
    acumulador + (vendaAtual.preco * vendaAtual.quantidade),0);

  return(
    <div>
      <h1>
        Soma das vendas: {SomaVendas}
      </h1>
    </div>
  )
};