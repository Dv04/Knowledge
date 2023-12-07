import React from 'react';
import { ContactContainer, ContactH1, ContactForm, Input, Textarea, Button } from '../styles';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactH1>Contact Me</ContactH1>
            <ContactForm>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" required></Textarea>
                <Button type="submit">Send</Button>
            </ContactForm>
        </ContactContainer>
    );
};

export default Contact;
