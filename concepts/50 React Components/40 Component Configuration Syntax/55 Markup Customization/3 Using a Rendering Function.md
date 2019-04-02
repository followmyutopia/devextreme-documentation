In the following code, rendering functions are used to specify the [List](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/React/Light/)'s [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate) and the [Button](/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/React/Light/)'s [template](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template):

    <!-- tab: App.js -->
    import List from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <React.Fragment>
                    <List
                        itemRender={(itemData) => 
                            <p>{itemData.itemProperty}</p>
                        }
                    />
                    <Button
                        render={(button) => 
                            <div style={{ padding: 20 }}><p>{button.text}</p></div>
                        }
                    />
                </React.Fragment>
            );
        }
    }