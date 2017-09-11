var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {
                    className: 'contact-item'
                },

                React.createElement('div', {className: 'contact-picture'},
                    React.createElement('img', {
                        className: 'contact-image',
                        src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                    })
                ),

                React.createElement('div', {className: 'contact-details'},
                    React.createElement('p', {
                        className: 'contact-name'
                    }, this.props.item.firstName),
                    React.createElement('p', {
                        className: 'contact-surname'
                    }, this.props.item.lastName),
                    React.createElement('a', {
                            className: 'contact-email',
                            href: 'mailto:' + this.props.item.email
                        },
                        this.props.item.email
                    )
                ),

                React.createElement('div', {className: 'contact-icon'}, 
                    React.createElement('i', {className: 'fa fa-info-circle', 'aria-hidden': "true"})
                )
            )
        )
    },
});