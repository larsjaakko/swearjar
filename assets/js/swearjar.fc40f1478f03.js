(function(){var e=React.createClass({displayName:"MainFrame",getInitialState:function(){return{data:{text:"Banneord.no"},url:"sweargen/?category=2"}},loadSwearWordFromServer:function(){$.ajax({url:this.state.url,dataType:"json",cache:!1,success:function(e){console.log("Hello this is horekuk"),this.setState({data:e})}.bind(this),error:function(e,t,n){console.error(this.props.url,t,n.toString())}.bind(this)})},handleClick:function(){this.loadSwearWordFromServer()},handleCategoryChange:function(e){this.setState({url:e}),console.log("Her skal vi ha ny kategori",e)},componentDidMount:function(){},render:function(){return React.createElement("div",{className:"mainFrame"},React.createElement(t,{data:this.state.data,clickButton:this.handleClick,clickCategory:this.handleCategoryChange}),React.createElement(n,null))}}),t=React.createClass({displayName:"TopSite",render:function(){return React.createElement("section",{className:"topSite fullHeight","data-scroll-index":"0"},React.createElement("div",{className:"silo"},React.createElement(r,{data:this.props.data}),React.createElement(s,{clickCategory:this.props.clickCategory}),React.createElement(o,{clickButton:this.props.clickButton}),React.createElement(u,null)))}}),n=React.createClass({displayName:"BottomSite",render:function(){return React.createElement("section",{className:"bottomSite fullHeight bottom","data-scroll-index":"1"},React.createElement("div",{className:"container"},React.createElement(a,null),React.createElement(f,null)))}}),r=React.createClass({displayName:"WordBox",render:function(){return console.log("Hello this is horekuk 2",this.props.data),React.createElement("div",{className:"wordBox"},React.createElement(i,{text:this.props.data.text}))}}),i=React.createClass({displayName:"SwearWord",render:function(){return React.createElement("p",{className:"swearWord"},this.props.text)}}),s=React.createClass({displayName:"Category",handleChange:function(e){this.props.clickCategory(e.target.value)},render:function(){return React.createElement("div",{className:"category row"},React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=1",name:"category",onChange:this.handleChange}),"Nonne"),React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=2",name:"category",defaultChecked:"true",onChange:this.handleChange}),"Normal"),React.createElement("div",{className:"four columns"},React.createElement("input",{type:"radio",value:"sweargen/?category=3",name:"category",onChange:this.handleChange}),"Nordlending"))}}),o=React.createClass({displayName:"GeneratorButton",handleClick:function(e){this.props.clickButton()},render:function(){return React.createElement("div",{className:"generatorButton"},React.createElement("input",{type:"button",className:"button button-primary",onClick:this.handleClick.bind(this),value:"Me lyt banna!"}))}}),u=React.createClass({displayName:"AboutButton",render:function(){return React.createElement("div",{className:"aboutButton"},React.createElement("a",{className:"button","data-scroll-goto":"1"},"Hva er dette?"))}}),a=React.createClass({displayName:"AboutText",render:function(){return React.createElement("div",{className:"aboutText"},React.createElement("p",null,"Banneord.no er en enkel side for deg som sliter med sinneutbrudd, men ikke vet \u00e5 uttrykke deg skikkelig. Velg din foretrukne modus ved \u00e5 klikke p\u00e5 fjesene og deretter den store, svarte knappen."),React.createElement("p",null,"Liker du Banneord.no? Pr\u00f8v ",React.createElement("a",{href:"http://www.kortpakanten.no",className:"kortpakanten"},"Kort p\u00e5 kanten")))}}),f=React.createClass({displayName:"BackButton",render:function(){return React.createElement("div",{className:"aboutButton"},React.createElement("a",{className:"button","data-scroll-goto":"0"},"La oss banne!"))}});ReactDOM.render(React.createElement(e,null),document.getElementById("content"))}).call(this);