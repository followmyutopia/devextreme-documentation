    devextreme add devextreme-react
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme add devextreme-react

This command does the following:

- Adds the `devextreme` and `devextreme-react` npm packages to the `dependencies` in `package.json` and installs their latest versions.
- Imports the `dx.common.css` and `dx.light.css` [DevExtreme stylesheets](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) in `src/App.js`.

These steps are explained in the [Add DevExtreme to an React Application](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/) article.

Once the command is executed, [import DevExtreme components](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Import_DevExtreme_Components).