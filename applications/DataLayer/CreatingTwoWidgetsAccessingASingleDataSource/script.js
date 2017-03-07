var dataSource = new DevExpress.data.DataSource({
    store: [
        {
            id: 1,
            src: "/Content/images/doc/16_1/PhoneJS/person1.png",
            name: "Maria",
            age: 28
        },
        {
            id: 2,
            src: "/Content/images/doc/16_1/PhoneJS/person2.png",
            name: "John",
            age: 26
        },
        {
            id: 3,
            src: "/Content/images/doc/16_1/PhoneJS/person3.png",
            name: "Xavier",
            age: 30
        },
        {
            id: 4,
            src: "/Content/images/doc/16_1/PhoneJS/person4.png",
            name: "Amanda",
            age: 24
        }
    ]
});

$(function() {
    ko.applyBindings({
        dataSource: dataSource
    });
});