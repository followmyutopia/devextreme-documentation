    devextreme add devextreme-angular
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-angular

This command does the following:

- Adds the `devextreme` and `devextreme-angular` npm packages to the `dependencies` in `package.json` and installs their latest versions.
- References the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `angular.json`.
- Registers the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a> in `tsconfig.json`.

These steps are explained in the [Add DevExtreme to an Angular CLI Application](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/) article.

Once the command is executed, [import DevExtreme modules](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Import_DevExtreme_Modules).
