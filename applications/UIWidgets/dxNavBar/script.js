navSelectedIndex = ko.observable(0);
navItems = [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" },
    { text: "Tips", icon: "tips", badge: "new" }
];
texts = [
    "Home view of the application.",
    "This view contains the description of your application.",
    "This view contains useful tips."
]
viewText = ko.observable(texts[0]);
navSelectedIndex.subscribe(function (newValue) {
    viewText(texts[newValue]);
});
