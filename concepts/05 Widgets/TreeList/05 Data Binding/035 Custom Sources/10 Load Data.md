To load data from the server, the **CustomStore** needs the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function. This function accepts a set of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send the processed data back. The members of the **loadOptions** depend on which data processing operations the **TreeList** delegates to the server. 

The example below shows how to implement the **load** function for all data processing operations. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten the example.

    <!--JavaScript-->
    var treeListDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                // Passing settings to the server

                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "", // Pass if filtering is remote
                parentIds: loadOptions.parentIds,    // Parent IDs of rows to be loaded. 
                                                     // Provides a simpler access to parent IDs than the filter setting does
                sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",       // Pass if sorting is remote
                group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",    // Pass if grouping is remote
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result.data);
            });
            return d.promise();
        }
    });

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: treeListDataSource,
            // ...
        });
    });

The object passed with the [$.getJSON()](http://api.jquery.com/jquery.getjson/) request has the following structure.

    <!--JavaScript-->
    {
        parentIds: [ 1, 3 ],    // Type of array items depends on the type of row keys
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // ...
        ],
        sort: [
            { selector: "dataFieldName1", desc: true },
            { selector: "dataFieldName2", desc: false },
            // ...
        ],
        group: [
            // Group expression for numbers
            { selector: "dataFieldName1", groupInterval: 100, desc: false },
            // Group expression for dates
            { selector: "dataFieldName2", groupInterval: "year", desc: false },
            { selector: "dataFieldName2", groupInterval: "month", desc: false },
            // Group expression for strings
            { selector: "dataFieldName3", desc: true },
            // ...
        ]
    }

[note]The **group** expression contains the **groupInterval** parameter only when the **TreeList** sends a request for the data source of the [header filter](/Documentation/Guide/Widgets/TreeList/Filtering/#Column_Header_Filter), and only if this data source contains dates or numbers. Note that in the case of numbers, the [groupInterval](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/headerFilter/#groupInterval) option should be specified explicitly.

After receiving this object with settings, the server should apply them to data and then send an object of the following structure back. 

    <!--JavaScript-->
    {
        data: [
            // Your data objects
            { "id": 1,"parentId": 0, "name": "John Heart", "title": "CEO" },
            { "id": 2,"parentId": 1, "name": "Arthur Miller", "title": "COO" },
            // ...
        ]
    }

Note that if the server has received the **group** setting, an object structure differs and looks like this: 

    <!--JavaScript-->
    {
        data: [{
            key: "Group 1",
            items: [{
                key: "Group 1_1",
                items: [
                    key: "Group 1_1_1",
                    // This is a group of the deepest hierarchy level,
                    // therefore, you need to return the following fields
                    items: null,
                    count: 3        // The count of data rows in the current group
                ]
            }, {
                key: "Group 1_2",
                items: [ ... ]
            }]
        }, {
            key: "Group 2",
            items: [ ... ]
        }, 
            // . . .
        ]
    }
