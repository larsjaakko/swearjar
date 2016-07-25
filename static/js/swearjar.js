// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

var MainFrame = React.createClass({displayName: "MainFrame",
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
            React.createElement("div", {className: "mainFrame"}, 
                React.createElement(TopSite, {
                    data: this.state.data, 
                    clickButton: this.handleClick, 
                    clickCategory: this.handleCategoryChange}), 
                React.createElement(BottomSite, null)
            )
        );
    }
});

var TopSite = React.createClass({displayName: "TopSite",
    render: function() {
        return (
            React.createElement("section", {className: "topSite fullHeight", "data-scroll-index": "0"}, 
                React.createElement("div", {className: "container"}, 
                    React.createElement(WordBox, {data: this.props.data}), 
                    React.createElement(Category, {clickCategory: this.props.clickCategory}), 
                    React.createElement(GeneratorButton, {clickButton: this.props.clickButton}), 
                    React.createElement(AboutButton, null)
                )
            )
        );
    }
});

var BottomSite = React.createClass({displayName: "BottomSite",
    render: function() {
        return (
            React.createElement("section", {className: "bottomSite fullHeight bottom", "data-scroll-index": "1"}, 
                React.createElement("div", {className: "container paragraphFix"}, 
                    React.createElement(AboutText, null), 
                    React.createElement(BackButton, null), 
                    React.createElement(LinkText, null)
                )
            )
        );
    }
});

var WordBox = React.createClass({displayName: "WordBox",
    render: function() {
        console.log('Hello this is horekuk 2',this.props.data);
        return (
            React.createElement("div", {className: "wordBox"}, 
                React.createElement(SwearWord, {text: this.props.data.text}
                )
            )
        );
    }
});

var SwearWord = React.createClass({displayName: "SwearWord",
    render: function() {
        return (
            React.createElement("p", {className: "swearWord"}, 
                this.props.text
            )
        );
    }
});

var Category = React.createClass({displayName: "Category",
    handleChange: function(e) {
        this.props.clickCategory(e.target.value)
    },
    render: function() {
        return (
            React.createElement("div", {className: "category row"}, 
                React.createElement("div", {className: "four columns"}, 
                    React.createElement("input", {type: "radio", value: "sweargen/?category=1", id: "nonne", name: "category", onChange: this.handleChange}), 
                    React.createElement("label", {htmlFor: "nonne"}, React.createElement("span", null, "Nonne"))
                ), 
                React.createElement("div", {className: "four columns"}, 
                    React.createElement("input", {type: "radio", value: "sweargen/?category=2", id: "normal", name: "category", defaultChecked: "true", onChange: this.handleChange}), 
                    React.createElement("label", {htmlFor: "normal"}, "Normal")
                ), 
                React.createElement("div", {className: "four columns"}, 
                    React.createElement("input", {type: "radio", value: "sweargen/?category=3", id: "nordlending", name: "category", onChange: this.handleChange}), 
                    React.createElement("label", {htmlFor: "nordlending"}, "Nordlending")
                )
            )
        );
    }
});

var GeneratorButton = React.createClass({displayName: "GeneratorButton",
    handleClick: function(e) {
        this.props.clickButton();
    },
    render: function() {
        return (
            React.createElement("div", {className: "generatorButton"}, 
                React.createElement("input", {type: "button", className: "button button-primary", onClick: this.handleClick.bind(this), value: "Lag banneord!"})
            )
        );
    }
});

var AboutButton = React.createClass({displayName: "AboutButton",
    render: function() {
        return (
            React.createElement("div", {className: "aboutButton"}, 
                React.createElement("a", {className: "button", "data-scroll-goto": "1"}, "Hva er dette?")
            )
        );
    }
});

var AboutText = React.createClass({displayName: "AboutText",
    render: function() {
        return (
            React.createElement("div", {className: "aboutText"}, 
                React.createElement("h1", null, "Hva er banneord.no?"), 
                React.createElement("p", null, 
                    "Banneord.no er en enkel side for deg som sliter med temperamentet," + ' ' +
                    "men ikke vet å uttrykke deg skikkelig. ", React.createElement("br", null), "Klikk på din ønskede grad av" + ' ' +
                    "stygghet og deretter den svarte knappen. Du vil da få servert" + ' ' +
                    "et helt tilfeldig generert banneord."
                ), 
                React.createElement("p", null, 
                     "Banneord.no har åpen kildekode. Du finner denne på ", React.createElement("a", {href: "https://github.com/larsjaakko/swearjar"}, "GitHub"), "."
                )
            )
        );
    }
});

var BackButton = React.createClass({displayName: "BackButton",
    render: function() {
        return (
            React.createElement("div", {className: "backButton"}, 
                React.createElement("a", {className: "button", "data-scroll-goto": "0"}, "La oss banne!")
            )
        );
    }
});

var LinkText = React.createClass({displayName: "LinkText",
    render: function() {
        return (
            React.createElement("div", {className: "aboutText"}, 
                React.createElement("p", null, 
                    "Liker du Banneord.no? Prøv ", React.createElement("br", null), React.createElement("a", {href: "http://www.kortpakanten.no", className: "kortpakanten"}, "Kort på kanten")
                )
            )
        );
    }
});

ReactDOM.render(
    React.createElement(MainFrame, null),
    document.getElementById('content')
);
