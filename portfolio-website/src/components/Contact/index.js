import React, { useState } from 'react';
import { ContactContainer, ContactH1, ContactForm, Input, Textarea, Button } from './styles';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <ContactContainer>
            <ContactH1>Contact Me</ContactH1>
            <ContactForm onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Your Name" onChange={handleChange} required />
                <Input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
                <Textarea name="message" placeholder="Your Message" onChange={handleChange} required></Textarea>
                <Button type="submit">Send</Button>
            </ContactForm>
        </ContactContainer>
    );
};

export default Contact;
