(function(){var e=React.createClass({displayName:"MainFrame",render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement("h1",null,"Banneord.no"),React.createElement(t,{data:this.props.data}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("div",{className:"topSite"},React.createElement(r,{data:this.props.data}),React.createElement(s,null),React.createElement(o,null),React.createElement(u,null))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("div",{className:"bottomSite"},"Hello, world! I am the bottom half of the site.")}}),r=React.createClass({displayName:"WordBox",render:function(){return React.createElement("div",{className:"wordBox"},React.createElement(i,{data:this.props.data}))}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("h2",{className:"swearWord"},this.props.text)}}),s=React.createClass({displayName:"Category",render:function(){return React.createElement("div",{className:"category"},"Nonne")}}),o=React.createClass({displayName:"GeneratorButton",render:function(){return React.createElement("div",{className:"generatorButton"},"Hit me!")}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},"About.")}}),a=[{text:"Albinoalkis moddaf\u00f8kka"}];ReactDOM.render(React.createElement(e,{data:a}),document.getElementById("content"))}).call(this);
