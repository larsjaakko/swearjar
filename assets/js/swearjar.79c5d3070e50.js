(function(){var e=React.createClass({displayName:"MainFrame",getInitialState:function(){return{data:{text:"Banneord.no"},url:"sweargen/?category=2"}},loadSwearWordFromServer:function(){$.ajax({url:this.state.url,dataType:"json",cache:!1,success:function(e){console.log("Hello this is horekuk"),this.setState({data:e})}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleClick:function(){this.loadSwearWordFromServer()},handleCategoryChange:function(e){this.setState({url:e}),console.log("Her skal vi ha ny kategori",e)},componentDidMount:function(){},render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement(t,{data:this.state.data,clickButton:this.handleClick,clickCategory:this.handleCategoryChange}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("section",{className:"topSite fullHeight","data-scroll-index":"0"},React.createElement("div",{className:"container"},React.createElement(r,{data:this.props.data}),React.createElement(s,{clickCategory:this.props.clickCategory}),React.createElement(o,{clickButton:this.props.clickButton}),React.createElement(u,null)))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("section",{className:"bottomSite fullHeight bottom","data-scroll-index":"1"},React.createElement("div",{className:"container paragraphFix"},React.createElement(a,null),React.createElement(f,null),React.createElement(l,null)))}}),r=React.createClass({displayName:"WordBox",render:function(){return console.log("Hello this is horekuk 2",this.props.data),React.createElement("div",{className:"wordBox"},React.createElement(i,{text:this.props.data.text}))}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("div",{className:"swearWord",id:"fitWord"},this.props.text)}}),s=React.createClass({displayName:"Category",handleChange:function(e){this.props.clickCategory(e.target.value)},render:function(){return React.createElement("div",{className:"category row"},React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=1",id:"nonne",name:"category",onChange:this.handleChange}),React.createElement("label",{htmlFor:"nonne"},React.createElement("span",null,"Nonne"))),React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=2",id:"normal",name:"category",defaultChecked:"true",onChange:this.handleChange}),React.createElement("label",{htmlFor:"normal"},"Normal")),React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=3",id:"nordlending",name:"category",onChange:this.handleChange}),React.createElement("label",{htmlFor:"nordlending"},"Nordlending")))}}),o=React.createClass({displayName:"GeneratorButton",handleClick:function(e){this.props.clickButton()},render:function(){return React.createElement("div",{className:"generatorButton"},React.createElement("input",{type:"button",className:"button button-primary",onClick:this.handleClick.bind(this),value:"Lag banneord!"}))}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},React.createElement("a",{className:"button","data-scroll-goto":"1"},"Hva er dette?"))}}),a=React.createClass({displayName:"AboutText",render:function(){return React.createElement("div",{className:"aboutText"},React.createElement("h1",null,"Hva er banneord.no?"),React.createElement("p",null,"Banneord.no er en enkel side for deg som sliter med temperamentet, men ikke vet \u00e5 uttrykke deg skikkelig. ",React.createElement("br",null),"Klikk p\u00e5 din \u00f8nskede grad av stygghet og deretter den svarte knappen. Du vil da f\u00e5 servert et helt tilfeldig generert banneord."),React.createElement("p",null,"Banneord.no har \u00e5pen kildekode. Du finner denne p\u00e5 ",React.createElement("a",{href:"https://github.com/larsjaakko/swearjar"},"GitHub"),"."))}}),f=React.createClass({displayName:"BackButton",render:function(){return React.createElement("div",{className:"backButton"},React.createElement("a",{className:"button","data-scroll-goto":"0"},"La oss banne!"))}}),l=React.createClass({displayName:"LinkText",render:function(){return React.createElement("div",{className:"aboutText"},React.createElement("p",null,"Liker du Banneord.no? Pr\u00f8v ",React.createElement("br",null),React.createElement("a",{href:"http://www.kortpakanten.no",className:"kortpakanten"},"Kort p\u00e5 kanten")))}});ReactDOM.render(React.createElement(e,null),document.getElementById("content"))}).call(this);
