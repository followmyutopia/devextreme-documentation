//highlight
var myArray = [
    { Name: "Andrew Fuller", City: "San Marino", Phone: "(626) 555-0358" },
    { Name: "Nancy Davolio", City: "Glendale", Phone: "(818) 555-9248" },
    { Name: "Steven Buchanan", City: "Chatsworth", Phone: "(818) 555-8872" },
    { Name: "Janet Leverling", City: "Pasadena", Phone: "(626) 555-0281" },
    { Name: "Margaret Peacock", City: "Los Angeles", Phone: "(213) 555-7098" }
];
$(function () {
    render(["Name", "City", "Phone"]);
});
//highlight