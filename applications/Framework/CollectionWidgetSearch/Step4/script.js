$(function () {
    var listDataSource = new DevExpress.data.DataSource({
        store: STATES,
        searchExpr: 'name'
    });
    $("#searchTextBox").dxTextBox({
        placeholder: 'Search',
        mode: 'search',
        //<!--//highlight-->
        valueChangeEvent: 'keyup',
        onValueChanged: function (e) {
            listDataSource.searchValue(e.value);
            listDataSource.load();
        }
        //<!--//highlight-->
    });
    $("#myList").dxList({
        dataSource: listDataSource,
        itemTemplate: function (itemData, itemIndex, itemElement) {
            itemElement.append("<h2>" + itemData.name + "</h2>");
            itemElement.append("<p><b>Capital</b>: <i>" + itemData.capital + "</i></p>");
            itemElement.append("<p><b>Area</b>: <i>" + itemData.area + "</i></p>");
            itemElement.append("<p><b>Population</b>: <i>" + itemData.population + "</i></p>");
        }
    });
});
