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
    componentDidMount: function() {
        /*this.loadSwearWordFromServer();*/
    },
    render: function() {
        return (
            <div className="mainFrame">
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
            <section className="topSite fullHeight" data-scroll-index="0">
                <div className="container">
                    <WordBox data={this.props.data}/>
                    <Category clickCategory={this.props.clickCategory}/>
                    <GeneratorButton clickButton={this.props.clickButton}/>
                    <AboutButton />
                </div>
            </section>
        );
    }
});

var BottomSite = React.createClass({
    render: function() {
        return (
            <section className="bottomSite fullHeight bottom" data-scroll-index="1">
                <div className="container paragraphFix">
                    <AboutText />
                    <BackButton />
                    <LinkText />
                </div>
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
                <div className="four columns">
                    <input type="radio" value="sweargen/?category=1" id="nonne" name="category" onChange={this.handleChange}/>
                    <label id="nonne">Nonne</label>
                </div>
                <div className="four columns">
                    <label for="normal"><input type="radio" value="sweargen/?category=2" id="normal" name="category" defaultChecked="true" onChange={this.handleChange}/>Normal</label>
                </div>
                <div className="four columns">
                    <label for="nordlending"><input type="radio" value="sweargen/?category=3" id="nordlending" name="category" onChange={this.handleChange}/>Nordlending</label>
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
                <input type="button" className="button button-primary" onClick={this.handleClick.bind(this)} value="Lag banneord!" />
            </div>
        );
    }
});

var AboutButton = React.createClass({
    render: function() {
        return (
            <div className="aboutButton">
                <a className="button" data-scroll-goto="1">Hva er dette?</a>
            </div>
        );
    }
});

var AboutText = React.createClass({
    render: function() {
        return (
            <div className="aboutText">
                <h1>Hva er banneord.no?</h1>
                <p>
                    Banneord.no er en enkel side for deg som sliter med temperamentet,
                    men ikke vet å uttrykke deg skikkelig. <br></br>Velg din foretrukne modus
                    ved å klikke på fjesene og deretter den svarte knappen. Du vil da få
                    et tilfeldig generert banneord servert.
                </p>
                <p>
                     Banneord.no er open source. Du finner kildekoden på <a href="https://github.com/larsjaakko/swearjar">GitHub</a>.
                </p>
            </div>
        );
    }
});

var BackButton = React.createClass({
    render: function() {
        return (
            <div className="backButton">
                <a className="button" data-scroll-goto="0">La oss banne!</a>
            </div>
        );
    }
});

var LinkText = React.createClass({
    render: function() {
        return (
            <div className="aboutText">
                <p>
                    Liker du Banneord.no? Prøv <br></br><a href="http://www.kortpakanten.no" className="kortpakanten">Kort på kanten</a>
                </p>
            </div>
        );
    }
});

ReactDOM.render(
    <MainFrame />,
    document.getElementById('content')
);
