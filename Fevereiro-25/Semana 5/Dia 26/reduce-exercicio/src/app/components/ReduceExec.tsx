// Versão Aprimorada com Tratamento Completo
export default function ReduceExec {
  const dados = [
      { item:"Monitor 4k", precoUnitario: -1200, unidadesVendidas:5 },
      { item:"Teclado Mecânico", precoUnitario:350 , unidadesVendidas:8 },
      { item:"Mouse Gamer", precoUnitario:250 , unidadesVendidas:15 }
  ];

  const total = dados.reduce((acc, curr) => {
      const precoValido = Math.max(curr.precoUnitario || 0)
      const quantidadeValida = Math.max(curr.unidadesVendidas || 0)
      return acc + (precoValido * quantidadeValida)
  }, 0);

  const formatador = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits:2
  });

  return (
      <div>
          Total Bruto: {formatador.format(total)}
      </div>
  )
}