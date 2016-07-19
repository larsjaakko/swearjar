// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.


var MainFrame = React.createClass({
  render: function() {
    return (
      <div className="mainFrame">
        Hello, world! I am the Main Frame for swearjar!
      </div>
    );
  }
});
React.render(
  <MainFrame />,
  document.getElementById('content')
);
