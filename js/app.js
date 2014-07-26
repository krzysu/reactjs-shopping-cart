/** @jsx React.DOM */

// init app
React.renderComponent(<ProductsList data={productsCollection} />, document.getElementById('products-list'));
React.renderComponent(<Cart />, document.getElementById('cart'));