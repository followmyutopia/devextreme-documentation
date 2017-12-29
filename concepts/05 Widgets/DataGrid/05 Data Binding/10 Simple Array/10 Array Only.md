To bind the **DataGrid** to an array, pass this array to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option.

---

#####jQuery

    <!--JavaScript-->
    var books = [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
        { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi' },
        { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction' }
    ];

    $(function(){
        $("#gridContainer").dxDataGrid({
            dataSource: books
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        books = [
            { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
            { author: 'K. Vonnegut', title: "Cat's Cradle", year: 1963, genre: 'Satire, sci-fi' },
            { author: 'M. Mitchell', title: "Gone with the Wind", year: 1936, genre: 'Historical fiction' }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid
        [dataSource]="books">
    </dx-data-grid>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/LocalDataSource/jQuery/Light/"
}

If objects in the array need to be processed (sorted or filtered), you can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept). For example, in the following code, a Query sorts objects in the `books` array in the descending order by the `author` field and selects objects with a `title` containing *'it'*.

---

#####jQuery

    <!--JavaScript-->
    var books = [
        { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
        // ...
    ];

    $(function(){
        $("#gridContainer").dxDataGrid({
            dataSource: DevExpress.data.query(books)
                            .filter("title", "contains", "it")
                            .sortBy("author", true)
                            .toArray()
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    import query from 'devextreme/data/query';
    // ...
    export class AppComponent {
        books = [
            { author: 'D. Adams', title: "The Hitchhiker's Guide to the Galaxy", year: 1979, genre: 'Comedy, sci-fi' },
            // ...
        ];
        getSortedAndFilteredBooks () {
            return query(this.books)
                    .filter("title", "contains", "it")
                    .sortBy("author", true)
                    .toArray();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid
        [dataSource]="getSortedAndFilteredBooks()">
    </dx-data-grid>

---

#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [Data Binding - ArrayStore](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/ArrayStore/)

[tags]dataGrid, data grid, data binding, provide data, array, process data, query