import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        ...getCart(state, props),
    }
}

export default connect(mapStateToProps)(Cart);
