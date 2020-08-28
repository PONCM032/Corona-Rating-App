var React = require('react');

var StarRating = require('react-star-rating');

 

var FormComponent = React.createClass({

  render: function () { 

    return (

      <form target="_self" method="GET">

        <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />

        <button type="submit" className="btn btn-primary">Submit Rating</button>

      </form>

    );

  }

});

 

React.render(<FormComponent />, document.getElementById('star-rating'));