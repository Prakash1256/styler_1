import React, { useState, useEffect } from 'react';

const baseURL = "https://long-blue-pronghorn-hat.cyclic.app";

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            let res = await fetch(`${baseURL}/admin/styles`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("admin-login-token")
                }
            });

            let data = await res.json();
            console.log(data);
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    const addService = async (event) => {
        event.preventDefault();
        let name = event.target['service-name'].value;
        let img = event.target['service-img'].value;
        let category = event.target['service-category'].value;
        let price = event.target['price'].value;

        let obj = {
            name: name,
            image: img,
            category: category,
            price: price,
            ForGender: "Male"
        };

        console.log(obj);

        try {
            let res = await fetch(`${baseURL}/admin/styles/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("admin-login-token")
                },
                body: JSON.stringify(obj)
            });

            let data = await res.json();
            if (data.msg === "New Style added") {
                fetchServices();
            }
        } catch (error) {
            console.error('Error adding service:', error);
        }
    };

    const removeService = async (id) => {
        try {
            let res = await fetch(`${baseURL}/admin/styles/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("admin-login-token")
                }
            });
            let data = await res.json();
            console.log(data);
            if (data.msg === "New Style Delete") {
                fetchServices();
            }
        } catch (error) {
            alert(error);
        }
    };

    const handleEdit = (id, name, price, category) => {
        // logic to handle edit
        console.log(`Edit ID: ${id}, Name: ${name}, Price: ${price}, Category: ${category}`);
        // Can update state or call API to handle edit
    };

    return (
        <div>
            <div id="add-details-div">
                <h1>Add New Service</h1>
                <form onSubmit={addService}>
                    <input type="text" id="service-name" placeholder="Service Name" required />
                    <input type="text" id="service-img" placeholder="Service Image Link" required />
                    <input type="text" id="service-category" placeholder="Category" required />
                    <input type="number" id="price" placeholder="Price" required />
                    <input type="submit" value="Add" />
                </form>
            </div>
            <div id="service-div">
                <h1>Current Available Services</h1>
                {services.map(service => (
                    <div key={service._id} className="service-child-div">
                        <div className="service-img-div">
                            <img src={service.image} alt={service.name} />
                        </div>
                        <div className="service-details-div">
                            <div className="service-details-child-div">
                                <h1 className="edit-heading">{service.name}</h1>
                                <h2><span className="box">Price</span>: &#8377;<span className="edit-price">{service.price}</span></h2>
                                <h2><span className="box">Category</span>: <span className="edit-name">{service.category}</span></h2>
                            </div>
                            <div className="service-button-child-div">
                                <button onClick={() => handleEdit(service._id, service.name, service.price, service.category)}>Edit</button>
                                <button onClick={() => removeService(service._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
