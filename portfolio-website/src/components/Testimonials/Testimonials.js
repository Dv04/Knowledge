// About/Components/Testimonials.js
import React from 'react';
import { TestimonialContainer, Quote, Author } from './TestimonialStyles';

const Testimonial = ({ testimonial }) => {
    return (
        <TestimonialContainer>
            <Quote>{testimonial.quote}</Quote>
            <Author>- {testimonial.author}</Author>
        </TestimonialContainer>
    );
};

export default Testimonial;
