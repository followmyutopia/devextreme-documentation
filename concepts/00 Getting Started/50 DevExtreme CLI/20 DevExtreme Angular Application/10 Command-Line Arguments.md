* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated [in this article](https://github.com/DevExpress/devextreme-angular-template#getting-started).

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).

* `--resolve-conflicts`     
Specifies whether to override the existing `app.component` or create a component with another name. Available values:
    * `createNew` (default)
    * `override` (**NOTE: all changes in the overridden files will be lost**)

    If you created a new component, register it in `app.module.ts`:

        <!-- tab: app.module.ts -->
        // ...
        import { AppComponent } from './app1.component';
        // ...

* `--icon`      
Specifies the view's icon (default: `folder`). You can choose an icon from the [DevExtreme icon library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library).

#####See Also#####
- [Create and Configure a Widget in Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)