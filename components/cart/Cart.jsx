import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";

const  Cart = ({title, category, price, image}) => {
  return (
    <div className="bg-white rounded-lg p-6">
        <CartHeader title={title} category={category} />
        <CartBody image={image} />
        <CartFooter price={price} />
    </div>
  )
}
export default Cart;