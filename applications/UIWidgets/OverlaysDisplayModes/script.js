popupVisible = ko.observable(false);
popupFullScreen = ko.observable(false);
popupShading = ko.observable(true);
shadingColor = ko.observable("rgba(10, 100, 250, 0.4)");
showPopup = function () {
    popupVisible(true);
};
hidePopup = function () {
    popupVisible(false);
};