import { useState, useEffect } from "react";
import styles from '../App.css';


export default function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7045/Northwind/GetSupplierOrderSum')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSuppliers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <h2>Supplier products order sum</h2>

            <h4>Results: {suppliers.length}</h4>
             
            {suppliers.length > 0 ?
                <div>
                    <table>
                        <thead>
                            <tr className="cell">
                                <td className="columnTitle">Company name</td>
                                <td className="columnTitle">Ordered sum</td>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((info) => { 
                                return (
                                    <tr key={info.companyName}>
                                        <td className="cell">{info.companyName}</td>
                                        <td className="cell">{info.orderSum}</td>
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