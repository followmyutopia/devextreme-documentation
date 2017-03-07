animationTypes = [
  "pop",
  "fade",
  "slide"
];
popupVisible = ko.observable(false);
animationType = ko.observable(animationTypes[0]);
animationConfig = ko.observable({});
typeChanged = function () {
    switch (animationType()) {
        case "slide":
            animationConfig({
                show: { duration: 1000, type: "slide", from: { opacity: 1, top: -$(window).height() }, to: { top: 50 } },
                hide: { duration: 1000, type: "slide", from: { top: 50 }, to: { top: -$(window).height() } }
            });
            break;
        case "pop":
            animationConfig({
                show: { duration: 1000, type: "pop", from: { opacity: 0, scale: 0 }, to: { opacity: 1, scale: 1 } },
                hide: { duration: 1000, type: "pop", from: { opacity: 1, scale: 1 }, to: { opacity: 0, scale: 0 } }
            });
            break;
        case "fade":
            animationConfig({
                show: { duration: 1000, type: "fade", from: 0, to: 1 },
                hide: { duration: 1000, type: "fade", from: 1, to: 0 }
            });
            break;
        default:
            animationConfig({});
    }
};
showPopup= function () {
    popupVisible(true);
};
hidePopup = function () {
    popupVisible(false);
};
typeChanged();