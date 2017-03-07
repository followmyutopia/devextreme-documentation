visible = ko.observable(false);
type = ko.observable("info");
message = ko.observable("Toast is displayed");
displayTime = ko.observable(2000);
showToast = function () {
    visible(true);
};