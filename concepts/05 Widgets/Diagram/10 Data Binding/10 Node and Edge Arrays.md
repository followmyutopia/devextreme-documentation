A graph constructed from two plain lists of nodes and edges. The **Diagram** binds its [nodes](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/nodes/) and [edges](/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/edges/) collections to the appropriate lists.

        <!-- tab: index.js -->
        $(function() {
            $("#diagram").dxDiagram({
                nodes: {
                    dataSource: orgItems
                },
                edges: {
                    dataSource: orgLinks
                },
                layout: "tree"
            });
        });
        
        <!-- tab: data.js -->
        var orgItems = [
            {  
                "id":"106",
                "text":"Development",
                "type":2
            },
            {  
                "id":"108",
                "text":"WPF\nTeam",
                "type":2
            },
            {  
                "id":"109",
                "text":"Javascript\nTeam",
                "type":2
            },
            // ...
        ];

        var orgLinks = [  
            {  
                "id":"124",
                "from":"106",
                "to":"108",
            },
            {  
                "id":"125",
                "from":"106",
                "to":"109",
            },
            // ...
        ];
