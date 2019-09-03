* `--layout`        
Specifies the DevExtreme layout to add. Available values:
    * `side-nav-outer-toolbar` (default)
    * `side-nav-inner-toolbar`

    Both layouts are illustrated <a href="https://github.com/DevExpress/devextreme-angular-template#getting-started" target="_blank">in this article</a>.

* `--empty`     
Specifies whether to skip sample views generation (default: `false`).

* `--icon`      
Specifies the view's icon (default: `folder`). You can choose an icon from the [DevExtreme icon library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library).

* `--resolve-conflicts` (Angular only)     
Specifies whether to override the existing `app.component` or create a component with another name. Available values:
    * `createNew` (default)
    * `override` (**NOTE: all changes in the overridden files will be lost**)

    If you created a new component, register it in `app.module.ts`:

        <!-- tab: app.module.ts -->
        // ...
        import { AppComponent } from './app1.component';
        // ...

#####See Also#####
- **Create and Configure a Widget** in [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/), [React](/Documentation/Guide/React_Components/Component_Configuration_Syntax/), and [Vue](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/).
