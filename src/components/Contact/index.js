import React, { useState } from 'react';
import { ContactContainer, ContactH1, ContactForm, Input, Textarea, Button } from './styles';
import { Element } from 'react-scroll'; // Import the Element component from react-scroll

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement the API call here
        try {
            // You would replace this console.log with your actual API call
            console.log('Form data submitted:', formData);

            // Clear the form fields after submission
            setFormData({ name: '', email: '', message: '' });

            // Notify the user of the successful submission
            alert('Message sent successfully!');
        } catch (error) {
            // Handle errors here, such as displaying a notification to the user
            console.error('Form submission error:', error);
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
