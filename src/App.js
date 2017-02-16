import React from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import products from './data/products';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Best shop ever</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList products={products} />
                </div>
                <div className="col-md-4">
                    Cart
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;

/*
addItem: function(e, item) {
  this.state.items.push(item);
  this.forceUpdate();

  this.countTotal();
},

removeItem: function(e, itemId) {
  var itemIndexInArray;

  this.state.items.some(function(item, index) {
    if(item.id === itemId) {
      itemIndexInArray = index;
      return true;
    }
  });

  this.state.items.splice(itemIndexInArray, 1);
  this.forceUpdate();

  this.countTotal();
},

countTotal: function() {
  var total = 0;

  this.state.items.forEach(function(item, index) {
    total += item.price;
  });

  this.setState({
    total: total
  })
},
*/
