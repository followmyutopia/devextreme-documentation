You can define the template markup in a separate component. We recommend using [`React.PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent) because `React.Component` can be re-rendered unnecessarily. Alternatively, you can implement the [shouldComponentUpdate()](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) method.

In the following code, custom components are used to specify the [List](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light/)'s [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate) and the [Button](/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light/)'s [template](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template). Template variables are passed to the components as props.

    <!-- tab: App.js -->
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    class ListItemTmpl extends React.PureComponent {
        render() {
            return (
                <p>{this.props.itemProperty}</p>
            );
        }
    }

    class ButtonTmpl extends React.PureComponent {
        render() {
            return (
                <div style={{ padding: 20 }}>
                    <p>{this.props.text}</p>
                </div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <List itemComponent={ListItemTmpl} />
                    <Button component={ButtonTmpl} />
                </React.Fragment>
            );
        }
    }

[note]

You cannot use `key` because it is a [special React prop](https://reactjs.org/warnings/special-props.html). Use `dxkey` instead:

    <!-- tab: App.js -->
    import List from 'devextreme-react/list';

    const assignments = [{
        "key": "John Heart",
        "items": ["Choose between PPO and HMO Health Plan", "Google AdWords Strategy", "New Brochures"]
    }, {
        "key": "Olivia Peyton",
        "items": ["Update Personnel Files", "Non-Compete Agreements"]
    }, {
        "key": "Robert Reagan",
        "items": ["Deliver R&D Plans for 2013", "Decide on Mobile Devices to Use in the Field", ]
    }];

    class ListGroupTmpl extends React.PureComponent {
        render() {
            return (
                <div>{this.props.dxkey}</div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <List
                    dataSource={assignments}
                    grouped={true}
                    groupComponent={ListGroupTmpl}
                />
            );
        }
    }
[/note]
