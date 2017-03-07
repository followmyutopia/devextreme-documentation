visible = ko.observable(false);
target = ko.observable("#button");
tooltipText = ko.observable("button");
target.subscribe(function (newValue) {
    tooltipText(newValue === "#button" ? "button" : "text block");
});
showTooltip = function () {
    visible(true);
};