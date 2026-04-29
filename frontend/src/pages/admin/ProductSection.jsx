import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductTable from "./ProductTable";

const ProuductSection = () =>{
  const [selectedProduct, setSelectedProduct] = useState(null);

  return(
    <div className="space-y-6">
       <AddProductForm 
        selectedProduct = {selectedProduct}
        setSelectedProduct = {setSelectedProduct}
       />
       <ProductTable 
       setSelectedProduct={setSelectedProduct}/>

    </div>
  )
}
export default ProuductSection;