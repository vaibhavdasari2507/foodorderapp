import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props =>{
    const cartitems = <ul className={classes['cart-items']}>{[{id:'c1',name:'Sushi',price:12.99}]
    .map((item)=><li>{item.name}</li>)}</ul>
    return (
        <Modal>
            {cartitems}
            <div>
                <span>Total Amount</span>
                <span>35.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}
export default Cart;