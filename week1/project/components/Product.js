export default function Product({ product }) {
    return(
      <li className={'product-card'}>
        <img
          src={product?.image}
          alt={product?.description}      
        />
       <p>{product.title}</p>
      </li>
    );
  };