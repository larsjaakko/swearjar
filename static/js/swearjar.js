// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.


var ServiceChooser = React.createClass({displayName: 'ServiceChooser',

    getInitialState: function(){
        return { total: 0 };
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {

        var self = this;

        var services = this.props.items.map(function(s){

            // Create a new Service component for each item in the items array.
            // Notice that I pass the self.addTotal function to the component.

            return React.createElement(Service, {name: s.name, price: s.price, active: s.active, addTotal: self.addTotal});
        });

        return React.createElement("div", null, 
                    React.createElement("h1", null, "Our services"), 

                    React.createElement("div", {id: "services"}, 
                        services, 

                        React.createElement("p", {id: "total"}, "Total ", React.createElement("b", null, "$", this.state.total.toFixed(2)))

                    )

                );

    }
});


var Service = React.createClass({displayName: 'Service',

    getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){

        var active = !this.state.active;

        this.setState({ active: active });

        // Notify the ServiceChooser, by calling its addTotal method
        this.props.addTotal( active ? this.props.price : -this.props.price );

    },

    render: function(){

        return  React.createElement("p", {className:  this.state.active ? 'active' : '', onClick: this.clickHandler}, 
                    this.props.name, " ", React.createElement("b", null, "$", this.props.price.toFixed(2))
                );

    }

});


var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];


// Render the ServiceChooser component, and pass the array of services

React.renderComponent(
    React.createElement(ServiceChooser, {items: services }),
    document.body
);
