To call widget methods, you need the widget instance. Create a [ref](https://reactjs.org/docs/refs-and-the-dom.html) and attach it to the target component via the `ref` attribute. Implement a getter that returns the instance taken from the ref. In the following code, this approach is used to get a `TextBox` instance:
    
    <!-- tab: App.js -->
    import Button from 'devextreme-react/button';
    import TextBox from 'devextreme-react/text-box';

    class App extends React.Component {
        constructor(props) {
            super(props);
            
            this.textBoxRef = React.createRef();
            
            this.focusTextBox = () => {
                this.textBox.focus()
            };
        }

        get textBox() {
            return this.textBoxRef.current.instance;
        }

        render() {
            return (
                <div>
                    <TextBox ref={this.textBoxRef} />
                    <Button text="Focus TextBox" onClick={this.focusTextBox} />
                </div>
            );
        }
    }