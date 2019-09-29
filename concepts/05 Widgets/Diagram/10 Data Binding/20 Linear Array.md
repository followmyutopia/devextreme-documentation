A tree constructed from a list where each record specifies its IDs and includes a parent node ID reference. Use the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#dataSource) option to bind the widget to the list. You should specify the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#keyExpr) and [parentKeyExpr](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/#parentKeyExpr) options because of the data's plain structure. The **Diagram** uses information from the key fields to transform plain data into a tree.  

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: new DevExpress.data.ArrayStore({
                        key: "ID",
                        data: employees,
                    }),
                    keyExpr: "ID",
                    textExpr: function(item, value) {
                        if(value !== undefined)
                            item.Title = value;
                        else
                            return item && item.Title.replace(" ", "\n");
                    },
                    parentKeyExpr: "Head_ID"
                },
                layout: "tree"
            });
        });

        <!-- tab: data.js -->
        var employees = [{
            "ID": 1,
            "Full_Name": "John Heart",
            "Prefix": "Mr.",
            "Title": "CEO",
            "City": "Los Angeles",
            "State": "California",
            "Email": "jheart@dx-email.com",
            "Skype": "jheart_DX_skype",
            "Mobile_Phone": "(213) 555-9392",
            "Birth_Date": "1964-03-16",
            "Hire_Date": "1995-01-15"
        }, {
            "ID": 2,
            "Head_ID": 1,
            "Full_Name": "Samantha Bright",
            "Prefix": "Dr.",
            "Title": "COO",
            "City": "Los Angeles",
            "State": "California",
            "Email": "samanthab@dx-email.com",
            "Skype": "samanthab_DX_skype",
            "Mobile_Phone": "(213) 555-2858",
            "Birth_Date": "1966-05-02",
            "Hire_Date": "2004-05-24"
        },
        // ...
        ];