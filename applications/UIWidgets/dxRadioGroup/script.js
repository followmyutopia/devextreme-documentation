colors = [
    { text: "red", value: "#FF0000" },
    { text: "green", value: "#00AA00" },
    { text: "blue", value: "#0000FF" }
];
currentColor = ko.observable(colors[0].value);
layoutValue = ko.observable("vertical");
changeColor = function (options) {
    $("#div1").css("border-color", options.value);
}