(function(){var e=React.createClass({displayName:"MainFrame",loadCommentsFromServer:function(){$.ajax({url:this.props.url,dataType:"json",cache:!1,success:function(e){this.setState({data:e})}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},getInitialState:function(){return{data:[]}},componentDidMount:function(){this.loadCommentsFromServer()},render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement("h1",null,"Banneord.no"),React.createElement(t,{data:this.state.data}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("div",{className:"topSite"},React.createElement(r,{data:this.props.data}),React.createElement(s,null),React.createElement(o,null),React.createElement(u,null))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("div",{className:"bottomSite"},"Hello, world! I am the bottom half of the site.")}}),r=React.createClass({displayName:"WordBox",render:function(){var e=this.props.data.map(function(e){return React.createElement(i,{text:e.text},e.text)});return React.createElement("div",{className:"wordBox"},e,"Test")}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("h2",{className:"swearWord"},this.props.text,this.props.children)}}),s=React.createClass({displayName:"Category",render:function(){return React.createElement("div",{className:"category"},"Normal")}}),o=React.createClass({displayName:"GeneratorButton",render:function(){return React.createElement("div",{className:"generatorButton"},"Hit me!")}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},"About.")}}),a=[{text:"Albinoalkis moddaf\u00f8kka"}];ReactDOM.render(React.createElement(e,{url:"/sweargen/?category=3"}),document.getElementById("content"))}).call(this);
