import { Link, NavLink } from 'react-router-dom';

export default function App() {
    
    return (
        <div>
            <h1>Northwind warehouse</h1>

            <a href="/products">Products</a>
            <br />
            <a href="/supplierordersum">Ordered products sum by suppliers</a>
            <br />
            <a href="/querycollection">Query collection</a>
            <br />
        </div>
    );
}
