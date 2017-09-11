var contacts = [{
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Kozioł',
        email: 'zbigniew.koziol@example.com',
    }
];

var contactForm = {
    firstName: 'John',
    lastName: 'Cleese',
    email: 'jc@example.com'
};

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {
                    className: 'app'
                },
                React.createElement(ContactForm, {
                    contact: contactForm
                }),
                React.createElement(Contacts, {
                    items: contacts
                }, {})
            )
        );
    }
});