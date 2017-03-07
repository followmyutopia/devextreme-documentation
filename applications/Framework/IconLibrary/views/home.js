MyApp.home = function (params) {

    var iconSet = ["add", "airplane", "arrowdown", "arrowleft", "arrowright", "arrowup", "bookmark", "box", "car", "card", "cart", "chart", "clock", "close", "comment", "doc", "download", "edit", "email", "event", "favorites", "find", "folder", "food", "gift", "globe", "group", "help", "home", "image", "info", "key", "like", "map", "menu", "money", "music", "overflow", "percent", "photo", "plus", "preferences", "product", "refresh", "remove", "repeat", "runner", "save", "tags", "tel", "tips", "todo", "toolbox", "user"];

    var icons = $.map(iconSet, function (name) {
        return {
            name: name,
            cssClass: "dx-icon-" + name.toLowerCase()
        };
    });

    return {
        icons: icons
    };
};