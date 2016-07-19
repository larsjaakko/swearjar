// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

var MainFrame = React.createClass({
    loadSwearWordFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                console.log('Hello this is horekuk');
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleClick: function() {
        this.loadSwearWordFromServer();
    },
    handleCategoryChange: function() {
        this.setState({category: event.target.value});
        console.log('Her skal vi ha ny kategori');
    },
    getInitialState: function() {
        return {data: {text: ''}};
        return {category: 2};
    },
    componentDidMount: function() {
        this.loadSwearWordFromServer();
    },
    render: function() {
        return (
            <div className="mainFrame">
                <h1>Banneord.no</h1>
                <TopSite
                    data={this.state.data}
                    clickButton={this.handleClick}
                    clickCategory={this.handleCategoryChange}/>
                <BottomSite />
            </div>
        );
    }
});

var TopSite = React.createClass({
    render: function() {
        return (
            <div className="topSite">
                <WordBox data={this.props.data}/>
                <Category clickCategory={this.props.clickCategory}/>
                <GeneratorButton clickButton={this.props.clickButton}/>
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
        console.log('Hello this is horekuk 2',this.props.data);
        return (
            <div className="wordBox">
                <SwearWord text={this.props.data.text}>
                </SwearWord>
            </div>
        );
    }
});

var SwearWord = React.createClass({
    render: function() {
        return (
            <h2 className="swearWord">
                {this.props.text}
            </h2>
        );
    }
});

var Category = React.createClass({
    handleChange: function(e) {
        this.props.clickCategory
    },
    render: function() {
        return (
            <div className="category">
                <input type="radio" value="1" name="category" onChange={this.handleChange}/>Nonne
                <input type="radio" value="2" name="category" defaultChecked="true"onChange={this.handleChange}/>Normal
                <input type="radio" value="3" name="category" onChange={this.handleChange}/>Nordlending
            </div>
        );
    }
});

var GeneratorButton = React.createClass({
    handleClick: function(e) {
        this.props.clickButton();
    },
    render: function() {
        return (
            <div className="generatorButton">
                <input type="button" onClick={this.handleClick.bind(this)} value="Me lyt banna!" />
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

var data = [
    {text: "Albinoalkis moddaføkka"}
];

ReactDOM.render(
    <MainFrame url="/sweargen/?category=1" />,
    document.getElementById('content')
);
