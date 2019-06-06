    devextreme add devextreme-vue
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-vue

This command does the following:

- Adds the `devextreme` and `devextreme-vue` npm packages to the `dependencies` in `package.json` and installs their latest versions.
- Imports the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `src/main.js`.

These steps are explained in the [Installation](https://github.com/DevExpress/devextreme-vue#installation) article.

Once the command is executed, you can [use DevExtreme components](https://github.com/DevExpress/devextreme-vue#use-devextreme-components).