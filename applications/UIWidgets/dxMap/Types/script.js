providers = [
  "bing",
  "google",
  "googleStatic"
];
mapTypes = [
  { text: "hybrid" },
  { text: "roadmap" }
];
currentProvider = ko.observable("google");
currentMapType = ko.observable("roadmap");

//Assigns the clicked tab text to the currentMapType variable
tabClicked = function (itemClickOptions) {
    currentMapType(itemClickOptions.itemData.text);
};