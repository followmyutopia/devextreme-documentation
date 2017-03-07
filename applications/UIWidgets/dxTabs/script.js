currentIndex = ko.observable(0);
tabsItems = [
    { text: "Personal data" },
    { text: "Contacts" },
    { text: "Address" }
];
multiViewItems = [
    {
        title: "Personal Data",
        firstName: "John",
        lastName: "Smith",
        birthYear: 1986,
        template: "personalData"
    },
    {
        title: "Contacts",
        phone: "(555)555-5555",
        email: "John.Smith@example.com",
        template: "contacts"
    },
    {
        title: "Address",
        state: "CA",
        city: "San Francisco",
        street: "Stanford Ave",
        template: "address"
    }
];