providers = [
    { text: "bing" },
    { text: "google" },
    { text: "googleStatic" }
];
currentProvider = ko.observable("google");
mapZoom = ko.observable(5);
currentLat = ko.observable(40.749825);
currentLng = ko.observable(-73.987963);
centerLocation = ko.observable({ lat: currentLat(), lng: currentLng() });

centerLocation.subscribe(function (newValue) {
    currentLat(newValue.lat.toFixed(6));
    currentLng(newValue.lng.toFixed(6));
});

//Assigns the clicked tab text to the currentProvider variable
tabClicked = function (itemClickOptions) {
    currentProvider(itemClickOptions.itemData.text);
};