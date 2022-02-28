

const CartListTotal = () => {
  const [products, setProducts] = useState(null)

const handleChange= () => {
  this.props.changeCartItemQuantity(this.props.products.key, target.value);
}
const handleClick = () => {
  this.props.removeCartItem(this.props.products.key);
}		



  let totalPrice = 0;
    products && products.map((cartItem)=>{
    totalPrice += products.id.price * products.quantity;
    return (
      <CartItem 
        key={products.id.key}
        cartItem={cartItem}
        changeCartItemQuantity={this.props.changeCartItemQuantity}
        removeCartItem={this.props.removeCartItem}
      />
   ; )