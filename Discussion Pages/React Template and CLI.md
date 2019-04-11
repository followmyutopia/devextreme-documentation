# The Problem

It can be complex and time-consuming to create a web application that has a responsive layout, navigation, and uniform style. 

# The Proposed Solution

The new [React Application Template](https://devexpress.github.io/devextreme-react-template/#/home) is a simple application with a navigation menu and several sample views in a responsive layout.

You can download this application from [GitHub](https://github.com/DevExpress/devextreme-react-template#devextreme-react-template) or use [DevExtreme CLI](https://github.com/DevExpress/devextreme-cli#devextreme-cli) commands to create and modify it.

# DevExtreme React Application Template
![DevExtreme-React-Template](https://user-images.githubusercontent.com/2280467/55784081-79798480-5ab8-11e9-8257-1ef9599b90a6.png)

## Layouts

The application template supports three adaptive layouts that arrange elements in the following way:

- **side-nav-inner-toolbar**    
The toolbar's width is equal to the page's width. The **Drawer** component is under the toolbar.
 
- **side-nav-outer-toolbar**    
The **Drawer**'s height equals the page's height. The **Drawer** component wraps the toolbar.

- **single-card**    
The page consists of a single adaptive card element. You can see this layout on the `Log In` form.

## Adaptability

We created the [media-query](https://github.com/devexpress/devextreme-react-template/blob/master/src/utils/media-query.js) utility that defines how the application adapts to different screen sizes. You can change the screen size qualifiers (see the `Breakpoints` object) to change this behavior.

## Navigation & Routing

We implemented the navigation menu based on the DevExtreme **TreeView** component and used the [react-router-dom](https://www.npmjs.com/package/react-router-dom) library for routing. 

To modify navigation and routing items, you can use DevExtreme CLI commands (see [Add a View](#add-view) section).

## Styling

The React Application Template uses two DevExtreme themes: `material.orange.light` as a `base` theme and `material.orange.dark` as an `additional` theme.

To modify these themes, change their metadata in the `metadata.base.json` and `metadata.additional.json` files in the `src/themes/` folder. For a more profound customization, change the metadata in the [DevExtreme ThemeBuilder](https://js.devexpress.com/Documentation/19_1/Guide/Themes_and_Styles/ThemeBuilder/#Get_Started/Import_an_Existing_Theme).

To apply changes, run the following command:

```
> npm run build-themes
```

This command uses the metadata to generate `.css` files that stylize DevExtreme components and `.scss` variables that can be used to stylize custom components.

# DevExtreme CLI Tools

## Add DevExtreme to a React Application

The following command installs the `devextreme` and `devextreme-react` dependencies and references DevExtreme stylesheets:
```
> devextreme add devextreme-react
```

## Create a New DevExtreme React Application

```
> devextreme new react-app app-name [--layout][--empty]
```

If you do not specify the parameters, CLI dialogs prompts you to specify them.

## <a name="add-view"></a>Add a View

The following command generates an empty view and adds it to the navigation menu and routing:

```
> devextreme add view view-name [--icon]
```

# Try It

## Live Sandbox

Check out the [early working prototype](https://devexpress.github.io/devextreme-react-template/)

## Installation

```bash
> npm i -g devextreme-cli@next
```

# We Need Your Feedback

## Take a Quick Poll

[Does the new React Application Template meet your needs?](https://forms.gle/mcamVXSoLx8qq4BN9)


# Get Notified of Updates

Subscribe to this thread or to our [Facebook](https://www.facebook.com/DevExpress.DevExtreme/) and [Twitter](https://twitter.com/devextreme) accounts for updates on this topic.
