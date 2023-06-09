import {  connect } from 'react-redux';
import{addToCart, removeToCart} from '../services/actions/Action'
import Home from '../components/Home';

const mapStateToProps=state=>({

})

const mapDispatchToProps = dispatch =>({
  addToCartHandler:data=>dispatch(addToCart(data)),

  removeToCartHandler:data=>dispatch(removeToCart(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(Home);