import React, { useState, useEffect } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
    const { title: tourName, price, reviews } = tour;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        guestSize: 1,
        fromDate: '',
        toDate: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [numberOfDays, setNumberOfDays] = useState(1);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        if (formData.fromDate && formData.toDate) {
            const start = new Date(formData.fromDate);
            const end = new Date(formData.toDate);

            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            setNumberOfDays(diffDays > 0 ? diffDays : 1);
        } else {
            setNumberOfDays(1);
        }
    }, [formData.fromDate, formData.toDate]);

    useEffect(() => {
        const { username, email, phone, guestSize, fromDate, toDate } = formData;
        setIsFormValid(username && email && phone && guestSize && fromDate && toDate);
    }, [formData]);

    const serviceFee = 10;
    const totalPrice = Number(price) * Number(formData.guestSize) * numberOfDays + serviceFee;

    const handlePayment = () => {
        if (!window.Razorpay) return alert("Razorpay SDK not loaded!");

        const token = localStorage.getItem('token');
        if (!token) {
            alert("You must be logged in to book a tour.");
            return;
        }

        const options = {
            key: 'rzp_test_uCkuHO2ACClXg4',
            amount: totalPrice * 100,
            currency: 'INR',
            name: 'TravelEase',
            description: 'Tour Booking Payment',
            image: 'https://example.com/logo.png',
            handler: function (response) {
                const payload = {
                    username: formData.username,
                    email: formData.email,
                    phone: formData.phone,
                    tourName: tourName,
                    guestSize: formData.guestSize,
                    fromDate: formData.fromDate,
                    toDate: formData.toDate,
                    razorpayPaymentId: response.razorpay_payment_id,
                };

                fetch('http://localhost:4000/api/v1/booking', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(payload)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            navigate("/thank-you", { state: { amount: totalPrice } });
                        } else {
                            alert("Booking failed: " + data.message);
                        }
                    })
                    .catch(err => {
                        console.error("Booking Save Error:", err);
                        alert("Failed to save booking. Please try again.");
                    });
            },
            prefill: {
                name: formData.username,
                email: formData.email,
                contact: formData.phone
            },
            theme: { color: '#F37254' }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    useEffect(() => {
        if (!window.Razorpay) {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            script.onload = () => console.log("Razorpay script loaded");
            document.body.appendChild(script);
        }
    }, []);

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>₹{price} <span>/per person/day</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-s-fill"></i>
                    <div className='rev'>
                        {avgRating === 0 ? null : avgRating} ({reviews?.length})
                    </div>
                </span>
            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form">
                    <FormGroup>
                        <input type="text" id="username" placeholder="Full Name" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="email" id="email" placeholder="Email" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" id="phone" placeholder="Phone" required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="fromDate">From Date</label>
                        <input
                            type="date"
                            id="fromDate"
                            required
                            min={today}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="toDate">To Date</label>
                        <input
                            type="date"
                            id="toDate"
                            required
                            min={formData.fromDate || today}
                            onChange={handleChange}
                            disabled={!formData.fromDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="guestSize">Number of Guests</label>
                        <input
                            type="number"
                            id="guestSize"
                            placeholder="Guest"
                            required
                            min="1"
                            value={formData.guestSize}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className='d-flex align-items-center gap-1'>₹{price} <i className="ri-close-line"></i> {formData.guestSize} person(s) <i className="ri-close-line"></i> {numberOfDays} day(s)</h5>
                        <h5>₹{price * formData.guestSize * numberOfDays}</h5>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge</h5>
                        <h5>₹{serviceFee}</h5>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <h5>₹{totalPrice}</h5>
                    </ListGroupItem>
                </ListGroup>

                <Button
                    className="btn primary__btn w-100 mt-4"
                    onClick={handlePayment}
                    disabled={!isFormValid}
                >
                    Pay Now
                </Button>
            </div>
        </div>
    );
};

export default Booking;