// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.


var MainFrame = React.createClass({
  render: function() {
    return (
      <div className="mainFrame">
          <h1>Banneord.no</h1>
            <TopSite />
            <BottomSite />
      </div>
    );
  }
});

var TopSite = React.createClass({
  render: function() {
    return (
      <div className="topSite">
          <WordBox />
          <Category />
          <GeneratorButton />
          <AboutButton />
      </div>
    );
  }
});

var BottomSite = React.createClass({
  render: function() {
    return (
      <div className="bottomSite">
        Hello, world! I am the bottom half of the site.
      </div>
    );
  }
});

var WordBox = React.createClass({
  render: function() {
    return (
      <div className="wordBox">
        Fy faen!
      </div>
    );
  }
});

var Category = React.createClass({
  render: function() {
    return (
      <div className="category">
        Nonne.
      </div>
    );
  }
});

var GeneratorButton = React.createClass({
  render: function() {
    return (
      <div className="aboutButton">
        About.
      </div>
    );
  }
});

var AboutButton = React.createClass({
  render: function() {
    return (
      <div className="aboutButton">
        About.
      </div>
    );
  }
});

React.render(
  <MainFrame />,
  document.getElementById('content')
);
