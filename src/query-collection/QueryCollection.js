import { useState } from 'react';
import styles from '../App.css';

export default function QueryCollection() {
    const [employees, setEmployees] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [catgegories, setCategories] = useState([]);

    const fetchEmployees = () => {
        fetch('https://localhost:7045/Northwind/GetAllEmployees')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSuppliers([])
                setCategories([]);
                setEmployees(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const fetchSuppliers = () => {
        fetch('https://localhost:7045/Northwind/GetAllSuppliers')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEmployees([]);
                setCategories([])
                setSuppliers(data);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const fetchCategories = () => {
        fetch('https://localhost:7045/Northwind/GetAllCategories')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEmployees([]);
                setSuppliers([])
                setCategories(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div>
            <h2>Queries</h2>
            <span className="nortwindButton"><button type="submit" onClick={fetchEmployees} id="search">Employees</button></span>
            <span className="nortwindButton"><button type="submit" onClick={fetchSuppliers} id="search">Suppliers</button></span>
            <span className="nortwindButton"><button type="submit" onClick={fetchCategories} id="search">Category</button></span>

            {employees.length > 0 ?
                <div>
                    <h4>Results: {employees.length}</h4>
                    <table>
                        <thead>
                            <tr className="cell">
                                <td className="columnTitle">First name</td>
                                <td className="columnTitle">Last name</td>
                                <td className="columnTitle">Title</td>
                                <td className="columnTitle">Address</td>
                                <td className="columnTitle">City</td>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((info) => {
                                return (
                                    <tr key={info.employeeID}>
                                        <td className="cell">{info.firstName}</td>
                                        <td className="cell">{info.lastName}</td>
                                        <td className="cell">{info.title}</td>
                                        <td className="cell">{info.address}</td>
                                        <td className="cell">{info.city}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div> :
                null
            }

            {suppliers.length > 0 ?
                <div>
                    <h4>Results: {suppliers.length}</h4>
                    <table>
                        <thead>
                            <tr className="cell">
                                <td className="columnTitle">Company name</td>
                                <td className="columnTitle">Contact name</td>
                                <td className="columnTitle">Address</td>
                                <td className="columnTitle">City</td>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.map((info) => {
                                return (
                                    <tr key={info.supplierID}>
                                        <td className="cell">{info.companyName}</td>
                                        <td className="cell">{info.contactName}</td>
                                        <td className="cell">{info.address}</td>
                                        <td className="cell">{info.city}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div> :
                null
            }

            {catgegories.length > 0 ?
                <div>
                    <h4>Results: {catgegories.length}</h4>
                    <table>
                        <thead>
                            <tr className="cell">
                                <td className="columnTitle">Category name</td>
                                <td className="columnTitle">Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {catgegories.map((info) => {
                                return (
                                    <tr key={info.categoryID}>
                                        <td className="cell">{info.categoryName}</td>
                                        <td className="cell">{info.description}</td>
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



