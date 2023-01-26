import './App.scss';
import Showcase from "./components/showcase/Showcase.jsx";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";

const App = () => {
    return (
        <div className="app">
            <Showcase/>
            <Payment/>
            <Cart/>
        </div>
    );
}

export default App;
