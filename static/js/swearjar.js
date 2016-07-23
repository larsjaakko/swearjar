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
            React.createElement("section", {className: "topSite fullHeight"}, 
                React.createElement("div", {className: "silo"}, 
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
            React.createElement("section", {className: "bottomSite fullHeight bottom"}, 
                React.createElement("p", null, 
                    "Banneord.no er en enkel side for deg som sliter med sinneutbrudd," + ' ' +
                    "men ikke vet å uttrykke deg skikkelig. Velg din foretrukne modus" + ' ' +
                    "ved å klikke på fjesene og deretter den store, svarte knappen."
                ), 
                React.createElement("p", null, 
                    "Liker du Banneord.no? Prøv ", React.createElement("a", {href: "http://www.kortpakanten.no", class: "kortpakanten"}, "Kort på kanten")
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
                    React.createElement("input", {type: "radio", value: "sweargen/?category=1", name: "category", onChange: this.handleChange}), "Nonne"
                ), 
                React.createElement("div", {className: "four columns"}, 
                    React.createElement("input", {type: "radio", value: "sweargen/?category=2", name: "category", defaultChecked: "true", onChange: this.handleChange}), "Normal"
                ), 
                React.createElement("div", {className: "four columns"}, 
                    React.createElement("input", {type: "radio", value: "sweargen/?category=3", name: "category", onChange: this.handleChange}), "Nordlending"
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
                React.createElement("input", {type: "button", className: "button button-primary", onClick: this.handleClick.bind(this), value: "Me lyt banna!"})
            )
        );
    }
});

var AboutButton = React.createClass({displayName: "AboutButton",
    render: function() {
        return (
            React.createElement("div", {className: "aboutButton"}, 
                React.createElement("input", {type: "button", value: "Hva er dette?"})
            )
        );
    }
});

ReactDOM.render(
    React.createElement(MainFrame, null),
    document.getElementById('content')
);
