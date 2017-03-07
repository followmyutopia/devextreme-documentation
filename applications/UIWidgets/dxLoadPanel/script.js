loadPanelVisible = ko.observable(false);
message = ko.observable("Loading...");
showIndicator = ko.observable(true);
delay = ko.observable(0);
showPane = ko.observable(true);
startLoading = function () {
    loadPanelVisible(true);
    setTimeout($.proxy(this.finishLoading, this), 2000);
};
finishLoading = function () {
    loadPanelVisible(false);
};