/** @jsx React.DOM */

var Cart = React.createClass({

    getInitialState: function() {
      // also subscribe to product events here
      $.subscribe('cart.added', this.addItem);
      $.subscribe('cart.removed', this.removeItem);

      return {
        items: [],
        total: 0,
        currency: 'EUR'
      };
    },

    addItem: function(e, item) {
      this.state.items.push(item);
      this.forceUpdate();

      this.countTotal();
    },

    removeItem: function(e, itemId) {
      var itemIndexInArray;

      this.state.items.some(function(item, index) {
        console.log(item, index);
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
