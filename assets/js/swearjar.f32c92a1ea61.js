(function(){var e=React.createClass({displayName:"MainFrame",loadSwearWordFromServer:function(){$.ajax({url:this.props.url,dataType:"json",cache:!1,success:function(e){console.log("Hello this is horekuk"),this.setState({data:e})}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleClick:function(){this.loadSwearWordFromServer()},handleCategoryChange:function(e){this.props.url=e,console.log("Her skal vi ha ny kategori",e)},getInitialState:function(){return{data:{text:""},url:"/sweargen/?category=2"}},componentDidMount:function(){this.loadSwearWordFromServer()},render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement("h1",null,"Banneord.no"),React.createElement(t,{data:this.state.data,clickButton:this.handleClick,clickCategory:this.handleCategoryChange}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("div",{className:"topSite"},React.createElement(r,{data:this.props.data}),React.createElement(s,{clickCategory:this.props.clickCategory}),React.createElement(o,{clickButton:this.props.clickButton}),React.createElement(u,null))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("div",{className:"bottomSite"},"Hello, world! I am the bottom half of the site.")}}),r=React.createClass({displayName:"WordBox",render:function(){return console.log("Hello this is horekuk 2",this.props.data),React.createElement("div",{className:"wordBox"},React.createElement(i,{text:this.props.data.text}))}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("h2",{className:"swearWord"},this.props.text)}}),s=React.createClass({displayName:"Category",handleChange:function(e){this.props.clickCategory(e.target.value)},render:function(){return React.createElement("div",{className:"category"},React.createElement("input",{type:"radio",value:"/sweargen/?category=1",name:"category",onChange:this.handleChange}),"Nonne",React.createElement("input",{type:"radio",value:"/sweargen/?category=2",name:"category",defaultChecked:"true",onChange:this.handleChange}),"Normal",React.createElement("input",{type:"radio",value:"/sweargen/?category=3",name:"category",onChange:this.handleChange}),"Nordlending")}}),o=React.createClass({displayName:"GeneratorButton",handleClick:function(e){this.props.clickButton()},render:function(){return React.createElement("div",{className:"generatorButton"},React.createElement("input",{type:"button",onClick:this.handleClick.bind(this),value:"Me lyt banna!"}))}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},"About.")}}),a=[{text:"Albinoalkis moddaf\u00f8kka"}];ReactDOM.render(React.createElement(e,{url:"/sweargen/?category=2"}),document.getElementById("content"))}).call(this);
