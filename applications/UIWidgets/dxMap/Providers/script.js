providers = [
  { text: "bing" },
  { text: "google" },
  { text: "googleStatic" }
];
currentProvider = ko.observable("google");

//Assigns the clicked tab text to the currentProvider variable
tabClicked = function (itemClickOptions) {
    currentProvider(itemClickOptions.itemData.text);
};