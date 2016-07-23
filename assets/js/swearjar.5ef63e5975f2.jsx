// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

var MainFrame = React.createClass({
    getInitialState: function() {
        return {
            data: {text: 'Banneord.no'},
            url: "sweargen/?category=2",
        };
    },
    loadSwearWordFromServer: function() {
        $.ajax({
            url: this.state.url,
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
    handleCategoryChange: function(url) {
        this.setState({url: url});
        console.log('Her skal vi ha ny kategori', url);
    },
    /*componentDidMount: function() {
        this.loadSwearWordFromServer();
    },*/
    render: function() {
        return (
            <div className="mainFrame container">
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
            <section className="topSite fullHeight">
                <WordBox data={this.props.data}/>
                <Category clickCategory={this.props.clickCategory}/>
                <GeneratorButton clickButton={this.props.clickButton}/>
                <AboutButton />
            </section>
        );
    }
});

var BottomSite = React.createClass({
    render: function() {
        return (
            <section className="bottomSite">
                Hello, world! I am the bottom half of the site.
            </section>
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
            <p className="swearWord">
                {this.props.text}
            </p>
        );
    }
});

var Category = React.createClass({
    handleChange: function(e) {
        this.props.clickCategory(e.target.value)
    },
    render: function() {
        return (
            <div className="category row">
                <div class="fourcolumns">
                    <input type="radio" value="sweargen/?category=1" name="category" onChange={this.handleChange}/>Nonne
                </div>
                <div class="four columns">
                    <input type="radio" value="sweargen/?category=2" name="category" defaultChecked="true"onChange={this.handleChange}/>Normal
                </div>
                <div class="four columns">
                    <input type="radio" value="sweargen/?category=3" name="category" onChange={this.handleChange}/>Nordlending
                </div>
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
                <input type="button" value="Hva er dette?" />
            </div>
        );
    }
});

ReactDOM.render(
    <MainFrame />,
    document.getElementById('content')
);
