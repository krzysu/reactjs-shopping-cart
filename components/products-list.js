/** @jsx React.DOM */

var ProductsList = React.createClass({
    render: function() {

        var products = this.props.data.map(function(product) {
            return (
              <li key={product.id}>
                <Product data={product} />
              </li>
            )
        });

        return (
          <ul className="cf">
            {products}
          </ul>
        );
    }
});
