Angular integration is supplied as an extension to DevExtreme that is available in the [DevExtreme-Angular](https://github.com/devexpress/DevExtreme-angular) GitHub repository. This guide assumes that you already have [NodeJS and npm](https://docs.npmjs.com/getting-started/installing-node) installed on your machine.

Before adding a DevExtreme widget to your application, install [devextreme](https://www.npmjs.com/package/devextreme) and [devextreme-angular](https://www.npmjs.com/package/devextreme-angular) npm packages.

    npm install --save devextreme devextreme-angular

Then, import DevExtreme modules within the main *.ts* file (usually *src/app.module.ts*).

    ...
    import { DxButtonModule } from 'devextreme-angular';

    @NgModule({ 
        ... 
        imports: [ 
            ... 
            DxButtonModule, 
            ... 
        ] 
    })
    export class AppModule {}

You can import **DevExtremeModule**, which includes all DevExtreme components, but we recommend that you import only those modules that contain the required functionality (for example, **DxButtonModule**) to decrease the startup time and the size of the final bundle.

The imported modules contain components that create DevExtreme widgets. For instance, the `dx-button` component creates the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget, `dx-range-slider` creates the [RangeSlider](/Documentation/Guide/Widgets/RangeSlider/Overview/), etc. The following code demonstrates how to add the **Button** widget to the template of the *"my-app"* component.

    @Component({
        selector: 'my-app',
        template: '<dx-button text="Press me" (onClick)="helloWorld()"></dx-button>'
    })
    export class AppComponent {
        helloWorld() {
            alert('Hello world!');
        }
    }

You can initialize widget options with a string value or the value of a component property. For example, the following code initializes the **text** option with a string value, the **type** option with the value of the `buttonType` component property.

    @Component({
        selector: 'my-app',
        template: '<dx-button text="Press me" [type]="buttonType"></dx-button>'
    })
    export class AppComponent {
        buttonType: string = 'default';
    }

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its component property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options) topic.

For more information on using DevExtreme widgets with Angular, refer to the [DevExtreme-Angular README](https://github.com/DevExpress/DevExtreme-angular#angular-ui-and-visualization-components-based-on-devextreme-widgets) on GitHub.

DevExtreme supports [server-side rendering](https://angular.io/guide/universal#angular-universal-server-side-rendering), which can be used to speed up your application loading. See DevExtreme-Angular README's [Server-side Rendering](https://github.com/devexpress/DevExtreme-angular#server-side-rendering) section for more information.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/Angular/Light/"
}

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Button](/Documentation/ApiReference/UI_Widgets/dxButton/).[Configuration](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/)
- [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Change_Options/)
- [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angular, create, configure, initialize, design time, component properties
