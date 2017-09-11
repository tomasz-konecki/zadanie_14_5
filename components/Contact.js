var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {
                    className: 'contact-item'
                },
                React.createElement('img', {
                    className: 'contact-image',
                    src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                }),
                React.createElement('p', {
                    className: 'contact-label'
                }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {
                    className: 'contact-label'
                }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {
                        className: 'contact-email',
                        href: 'mailto:' + this.props.item.email
                    },
                    this.props.item.email
                )
            )
        )
    },
});