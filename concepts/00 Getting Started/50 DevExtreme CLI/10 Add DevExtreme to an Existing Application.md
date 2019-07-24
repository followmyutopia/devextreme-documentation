---
##### Angular

    devextreme add devextreme-angular
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-angular

This command does the following:

- Adds the <a href="https://www.npmjs.com/package/devextreme" target="_blank">`devextreme`</a> and <a href="https://www.npmjs.com/package/devextreme-angular" target="_blank">`devextreme-angular`</a> npm packages to the `dependencies` in `package.json` and installs their latest versions.
- References the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `angular.json`.
- Registers the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a> in `tsconfig.json`.

These steps are explained in the [Add DevExtreme to an Angular CLI Application](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/) article.

Once the command is executed, [import DevExtreme modules](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Import_DevExtreme_Modules).

##### Vue

    devextreme add devextreme-vue
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-vue

This command does the following:

- Adds the <a href="https://www.npmjs.com/package/devextreme" target="_blank">`devextreme`</a> and <a href="https://www.npmjs.com/package/devextreme-vue" target="_blank">`devextreme-vue`</a> npm packages to the `dependencies` in `package.json` and installs their latest versions.
- Imports the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `src/main.js`.

These steps are explained in the <a href="https://github.com/DevExpress/devextreme-vue#installation" target="_blank">Installation</a> article.

Once the command is executed, you can <a href="https://github.com/DevExpress/devextreme-vue#use-devextreme-components" target="_blank">use DevExtreme components</a>.

##### React

    devextreme add devextreme-react
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-react

This command does the following:

- Adds the <a href="https://www.npmjs.com/package/devextreme" target="_blank">`devextreme`</a> and <a href="https://www.npmjs.com/package/devextreme-react" target="_blank">`devextreme-react`</a> npm packages to the `dependencies` in `package.json` and installs their latest versions.
- Imports the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `src/App.js`.

These steps are explained in the [Add DevExtreme to an React Application](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/) article.

Once the command is executed, [import DevExtreme components](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_DevExtreme_Components).

---
