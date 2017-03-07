By default, the DataSource loads items by pages. Page size is determined by the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) configuration option of the DataSource. 

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        pageSize: 30,
        . . .
    });

The current page index can be accessed and modified via the [pageIndex()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndex) and [pageIndex(newIndex)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndexnewIndex) methods respectively. 

    <!--JavaScript-->
    dataSource.pageIndex(1); // Switch to the next page
    dataSource.load();

To disable paging, assign *false* to the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) configuration option of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        paginate: false,
        . . .
    });

#####See Also#####
- [Data Layer - Paging Tutorial](/Documentation/Tutorial/Data_Layer/Paging#Paging).