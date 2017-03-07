showText = function () {
    DevExpress.ui.notify("Back button clicked", "success", 5000);
};
menuItemClicked = function (e) {
    DevExpress.ui.notify(e.itemData + " item clicked", "success", 2000);
};
toolbarItems = [
  { location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back', onClick: showText } },
  {
      location: 'after', widget: 'dxDropDownMenu', options: {
          items: ["Add", "Change", "Remove"],
          onItemClick: menuItemClicked
      }
  },
  { location: 'center', text: 'Products' }
];