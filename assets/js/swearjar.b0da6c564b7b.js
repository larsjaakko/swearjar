(function(){var e=React.createClass({displayName:"MainFrame",render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement("h1",null,"Banneord.no"),React.createElement(t,{data:this.props.data}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("div",{className:"topSite"},React.createElement(r,{data:this.props.data}),React.createElement(s,null),React.createElement(o,null),React.createElement(u,null))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("div",{className:"bottomSite"},"Hello, world! I am the bottom half of the site.")}}),r=React.createClass({displayName:"WordBox",render:function(){return React.createElement("div",{className:"wordBox"})}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("div",{className:"SwearWord"},"Albinoalkis.")}}),s=React.createClass({displayName:"Category",render:function(){return React.createElement("div",{className:"category"},"Nonne.")}}),o=React.createClass({displayName:"GeneratorButton",render:function(){return React.createElement("div",{className:"aboutButton"},"Hit me!")}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},"About.")}}),a=[{swearword:"Albinoalkis"}];React.render(React.createElement(e,{data:a}),document.getElementById("content"))}).call(this);
