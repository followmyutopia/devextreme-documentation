Enclose the **dataSource** option in square brackets to bind it to an array using one-way binding. Now, whenever an item is added or removed from the array, the **{WidgetName}** will be updated accordingly.

    <!--HTML--><dx-{widget-name} [dataSource]="fruits"></dx-{widget-name}>
    
    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

#####See Also#####
- [DevExtreme Angular on GitHub](https://github.com/devexpress/DevExtreme-angular)