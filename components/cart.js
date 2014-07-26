/** @jsx React.DOM */

var Cart = React.createClass({

    getInitialState: function() {
      return {
        items: [],
        total: 0,
        currency: 'EUR'
      };
    },

    render: function() {

        var items = this.state.items.map(function(item) {
            return (
              <li key={item.id}>
                {item.name} - {item.price} {item.currency}
              </li>
            )
        });

        return (
          <div>
            <ul>
              {items}
            </ul>
            <div className="cart__total">{this.state.total} {this.state.currency}</div>
          </div>
        );
    }
});


React.renderComponent(<Cart />, document.getElementById('cart'));