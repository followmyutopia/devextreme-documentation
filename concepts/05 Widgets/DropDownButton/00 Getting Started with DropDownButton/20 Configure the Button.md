Specify the button's [text](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#text) and/or [icon](/Documentation/ApiReference/UI_Widgets/dxDropDownButton/Configuration/#icon):

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#myDropDownButton").dxDropDownButton({
            text: "Sandra Johnson",
            icon: "user"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-button
        text="Sandra Johnson"
        icon="user">
    </dx-drop-down-button>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-drop-down-button
            text="Sandra Johnson"
            icon="user"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    class App extends React.Component {
        render() {
            return (
                <DropDownButton
                    text="Sandra Johnson"
                    icon="user"
                />
            );
        }
    }

---

Run the code and you should see a button that displays the specified text and icon. Click this button to open a drop-down menu that shows "No data to display." In the next step, we populate the menu.  
