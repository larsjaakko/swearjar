(function(){var e=React.createClass({displayName:"MainFrame",loadSwearWordFromServer:function(){$.ajax({url:this.props.url,dataType:"json",cache:!1,success:function(e){console.log("Hello this is horekuk"),this.setState({data:e})}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleClick:function(){this.loadSwearWordFromServer()},getInitialState:function(){return{data:{text:""}}},componentDidMount:function(){this.loadSwearWordFromServer()},render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement("h1",null,"Banneord.no"),React.createElement(t,{data:this.state.data,clickButton:this.handleClick}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("div",{className:"topSite"},React.createElement(r,{data:this.props.data}),React.createElement(s,null),React.createElement(o,{clickButton:this.props.clickButton}),React.createElement(u,null))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("div",{className:"bottomSite"},"Hello, world! I am the bottom half of the site.")}}),r=React.createClass({displayName:"WordBox",render:function(){return console.log("Hello this is horekuk 2",this.props.data),React.createElement("div",{className:"wordBox"},React.createElement(i,{text:this.props.data.text}))}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("h2",{className:"swearWord"},this.props.text)}}),s=React.createClass({displayName:"Category",render:function(){return React.createElement("div",{className:"category"},React.createElement("p",null,React.createElement("input",{type:"radio",value:"nonne",name:"category"}),"Nonne"))}}),o=React.createClass({displayName:"GeneratorButton",handleClick:function(e){this.props.clickButton()},render:function(){return React.createElement("div",{className:"generatorButton"},React.createElement("input",{type:"button",onClick:this.handleClick.bind(this),value:"For faen!"}))}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},"About.")}}),a=[{text:"Albinoalkis moddaf\u00f8kka"}];ReactDOM.render(React.createElement(e,{url:"/sweargen/?category=1"}),document.getElementById("content"))}).call(this);
