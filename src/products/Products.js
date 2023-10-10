import { useState } from 'react';
import styles from '../App.css';

export default function Products() {
    const [nameParam, setNameParam] = useState("");
    const [products, setProducts] = useState([]);

    const fetchData = (value) => {
        fetch('https://localhost:7045/Northwind/GetProducts?productName=' + value)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const handleChanges = () => {
        fetchData(nameParam);
    }

    return (
        <div>
            <h2>Products</h2>
            <span className="nameTitle"> Name: </span>

            <span style={{ display: 'inline' }}><input type="text" onChange={(e) => setNameParam(e.target.value)}></input></span>
            <span className="nortwindButton"><button type="submit" onClick={handleChanges} id="search">Search</button></span>

            <h4>Results: {products.length}</h4>

            {products.length > 0 ?
                <div>
                    <table>
                        <thead>
                            <tr className="cell">
                                <td className="columnTitle">Product name</td>
                                <td className="columnTitle">Unit price</td>
                                <td className="columnTitle">Units in stock</td>
                                <td className="columnTitle">Units on Order</td>
                                <td className="columnTitle">Reorder level</td>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((info) => {
                            return (
                                <tr key={info.productID}>
                                    <td className="cell">{info.productName}</td>
                                    <td className="cell">{info.unitPrice}</td>
                                    <td className="cell">{info.unitsInStock}</td>
                                    <td className="cell">{info.unitsOnOrder}</td>
                                    <td className="cell">{info.reorderLevel}</td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div> :
                null
            }
        </div>
    );
}
