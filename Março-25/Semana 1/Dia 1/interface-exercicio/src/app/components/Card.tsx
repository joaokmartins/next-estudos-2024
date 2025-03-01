import { Product } from "../interfaces/Product";
import { ProductList } from "./ProductList";
import { useState } from "react";

export default function Card({ ProductList }: { ProductList: Product[] }) {

  // Criação da interface para uso de propriedades
  interface ProductProps {
    ProductList: Product[]
  }

  // Estado local para armazenar o produto que será editado
  const [HandleEdit, setHandleEdit] = useState<Product | null>(null);

  // Função para manipular o estado de edição
  const ManipularCard = (ProductList: Product[]) => {
    // Configurar uma função para editar o Id
    const HandleEditId = (id: number) => {
      const productToEdit = ProductList.find((product) => product.productId === id);
      setHandleEdit(productToEdit || null);
    };

    // Função para lidar com mudanças no input
    const HandleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = parseInt(e.target.value, 10);
      HandleEditId(id); // Passe o id ao invés de productToEdit
    };

    return (
      <div>
        <input 
          type="number"
          onChange={HandleChangeId}
          placeholder="Insira o ID do produto para editar"
        />
        {HandleEdit && (
          <div>
            <h3>Editando produto: {HandleEdit.productName}</h3>
            {/* Aqui você pode adicionar campos para editar o produto */}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {ManipularCard(ProductList)}
    </div>
  );
}