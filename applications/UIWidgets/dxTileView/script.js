//An object passed to the dataSource configuration option of the tile view
tileViewDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");

//Generates the path to the required image file
getImagePath = function (name) {
    return "/Content/images/doc/18_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};