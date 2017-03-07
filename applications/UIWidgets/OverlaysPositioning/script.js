popupVisible = ko.observable(false);
atValue = ko.observable("left");
myValue = ko.observable("left top");
showPopup = function () {
    popupVisible(true);
};
hidePopup = function () {
    popupVisible(false);
};
positionValues = [
  "left top",
  "top",
  "right top",
  "right",
  "right bottom",
  "bottom",
  "left bottom",
  "left",
  "center"
];