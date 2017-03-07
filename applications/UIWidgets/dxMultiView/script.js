currentIndex = ko.observable(0);
swipe = ko.observable(true);
loop = ko.observable(false);
animation = ko.observable(true);
goForward = function () {
    currentIndex(currentIndex() == multiViewItems.items().length - 1 ? 0 : currentIndex() + 1);
}
goBack = function () {
    currentIndex(currentIndex() == 0 ? multiViewItems.items().length - 1 : currentIndex() - 1);
}
multiViewItems = new DevExpress.data.DataSource({
    store: [
        {
            title: "Personal Data",
            data: {
                firstName: "John",
                lastName: "Smith",
                birthYear: 1986,
            }
        },
        {
            title: "Contacts",
            data: {
                phone: "(555)555-5555",
                email: "John.Smith@example.com",
            }
        },
        {
            title: "Address",
            data: {
                state: "CA",
                city: "San Francisco",
                street: "Stanford Ave",
            }
        }
    ],
    map: function (itemData) {
        itemData.text = itemData.title;
        itemData.dataArray = $.map(itemData.data, function (value, key) {
            return {
                propertyKey: key,
                propertyValue: value
            }
        });
        return itemData;
    }
})