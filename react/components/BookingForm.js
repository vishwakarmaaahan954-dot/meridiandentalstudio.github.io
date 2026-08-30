import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
/**
 * ==============================================================================
 * BOOKING FORM COMPONENT (react/components/BookingForm.tsx)
 * ==============================================================================
 * Interactive appointment reservation form with controlled inputs, submission
 * handling, and friendly visual confirmation feedback.
 */
export const BookingForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        service: 'General Checkup',
        date: '',
        time: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Reset feedback after 4 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                fname: '',
                lname: '',
                phone: '',
                service: 'General Checkup',
                date: '',
                time: ''
            });
        }, 4000);
    };
    return (_jsx("section", { id: "book", children: _jsxs("div", { className: "book-grid", children: [_jsxs("div", { className: "reveal", children: [_jsx("span", { className: "eyebrow", children: "Book a Visit" }), _jsx("h2", { children: "Let's find you a time that works." }), _jsx("p", { children: "Fill in a few details and our front desk will confirm within one business day. New patients welcome." })] }), _jsxs("form", { className: "book-form reveal", onSubmit: handleSubmit, children: [_jsxs("div", { className: "row", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "fname", children: "First name" }), _jsx("input", { id: "fname", name: "fname", placeholder: "Ananya", value: formData.fname, onChange: handleChange, required: true })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "lname", children: "Last name" }), _jsx("input", { id: "lname", name: "lname", placeholder: "Gupta", value: formData.lname, onChange: handleChange, required: true })] })] }), _jsxs("div", { className: "row", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "phone", children: "Phone" }), _jsx("input", { id: "phone", name: "phone", placeholder: "+91 98xxxxxx", value: formData.phone, onChange: handleChange, required: true })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "service", children: "Service" }), _jsxs("select", { id: "service", name: "service", value: formData.service, onChange: handleChange, children: [_jsx("option", { children: "General Checkup" }), _jsx("option", { children: "Cosmetic Consultation" }), _jsx("option", { children: "Orthodontics" }), _jsx("option", { children: "Emergency" })] })] })] }), _jsxs("div", { className: "row", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "date", children: "Preferred date" }), _jsx("input", { id: "date", name: "date", type: "date", value: formData.date, onChange: handleChange })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "time", children: "Preferred time" }), _jsx("input", { id: "time", name: "time", type: "time", value: formData.time, onChange: handleChange })] })] }), _jsx("button", { className: "submit", type: "submit", disabled: submitted, style: submitted ? { backgroundColor: 'var(--pine-light)' } : undefined, children: submitted ? 'Request sent ✓' : 'Request Appointment' }), _jsx("p", { className: "note", children: "This is a demo form with sample data \u2014 no appointment is actually booked." })] })] }) }));
};
