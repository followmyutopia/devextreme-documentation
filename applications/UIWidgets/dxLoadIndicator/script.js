loadIndicatorVisible = ko.observable(false);
src = ko.observable();
size = ko.observable(32);
showStandardIndicator = function () {
    startLoading(false);
}
showCustomIndicator = function () {
    startLoading(true);
}
startLoading = function (custom) {
    src(custom ? '/Content/Images/loadindicator-demo.gif' : undefined);
    size(custom ? 48 : 32);
    loadIndicatorVisible(true);
    setTimeout($.proxy(this.finishLoading, this), 4000);
};
finishLoading = function () {
    loadIndicatorVisible(false);
};