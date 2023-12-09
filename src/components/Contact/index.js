import React, { useState } from 'react';
import { ContactContainer, ContactH1, ContactForm, Input, Textarea, Button } from './styles';
import { Element } from 'react-scroll'; // Import the Element component from react-scroll
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your API endpoint
            const response = await axios.post('/api/sendmail', formData, {
                Headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log('Form data submitted:', formData);

            // Check if the response is successful
            if (response.data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send the message.');
            }

            // Clear the form fields after submission
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error.response.data);
            alert('Failed to send the message.');
        }
    };

    return (
        <Element name="contact" id="contact"> {/* Wrap the container in an Element for react-scroll */}
            <ContactContainer>
                <ContactH1>Contact Me</ContactH1>
                <ContactForm onSubmit={handleSubmit}>
                    <Input name="name" type="text" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
                    <Input name="email" type="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                    <Textarea name="message" value={formData.message} placeholder="Your Message" onChange={handleChange} required></Textarea>
                    <Button type="submit">Send</Button>
                </ContactForm>
            </ContactContainer>
        </Element>
    );
};

export default Contact;
