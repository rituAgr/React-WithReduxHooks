import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./HooksCakeContainer";
import HooksIceCreamContainer from "./HooksIceCreamContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer/>
                <HooksIceCreamContainer/>
            </div>
        </Provider>
    );
}

export default App;
