/** @jsx React.DOM */

var Product = React.createClass({
    render: function() {
        // assign to props
        var data = this.props.data;

        return (
          <div className="thumbnail">
            <img src={data.image} alt="product image" />
            <div className="caption">
              <h3>{data.name}</h3>
              <div>{data.price} {data.currency}</div>
              <div>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        );
    }
});
