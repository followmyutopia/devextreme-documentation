If you are starting a project from scratch, use the [DevExtreme React Template](https://github.com/DevExpress/devextreme-react-template#devextreme-react-template). It is a simple application with a navigation menu and several sample views in a responsive layout.

You can generate the application with the [DevExtreme CLI](/Documentation/Guide/Getting_Started/DevExtreme_CLI/):

    npx -p devextreme-cli devextreme new react-app app-name
    cd app-name
    npm run start

[note]

npx is available with npm v5.2 and later. If you have an earlier version, [upgrade npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) or install the DevExtreme CLI globally and run the command from the installed package:

    npm i -g devextreme-cli
    devextreme new react-app app-name

[/note]

The application already contains the [DataGrid](/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light/) and [Form](/Demos/WidgetsGallery/Demo/Form/Overview/React/Light/) components. You can find their configurations in the `src/pages/display-data/display-data.js` and `src/pages/profile/profile.js` files correspondingly.

The following resources provide more information about DevExtreme React components:

- [Component Configuration Syntax](/Documentation/Guide/React_Components/Component_Configuration_Syntax/)
- [Demos](/Demos/WidgetsGallery/Demo/DataGrid/Overview/React/Light/)
- [API Reference](/Documentation/ApiReference/)
