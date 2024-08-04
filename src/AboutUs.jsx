import React from 'react';
import './AboutUs.css'; // Import CSS for the AboutUs component

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="banner">
        <img src="https://5.imimg.com/data5/SELLER/Default/2023/6/315822035/EX/HL/UR/191327466/sanitary-jpg-500x500.jpg" alt="Kailash Hardware and Sanitary Store" className="banner-image" />
      </div>
      <div className="about-us-content">
        <h1>Welcome to Kailash Hardware and Sanitary Products</h1>
        <p>
          At Kailash Hardware and Sanitary Products, we are more than just a store; 
          we are your trusted partner in all things hardware and sanitary. Established 
          with a vision to provide high-quality products and exceptional service, we 
          have been serving our valued customers with dedication and integrity for [insert number] years.
        </p>

        <h2>Our Story</h2>
        <p>
          Founded in [year of establishment], Kailash Hardware and Sanitary Products began 
          with a simple goal: to offer top-notch hardware and sanitary solutions for homes 
          and businesses. Our founders, [Founder's Name(s)], envisioned a place where customers 
          could find reliable products and expert advice under one roof. Over the years, 
          our commitment to quality and customer satisfaction has fueled our growth, making 
          us a leading name in the industry.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to enhance the lives of our customers by providing:
        </p>
        <ul>
          <li><strong>High-Quality Products</strong>: We offer a comprehensive range of hardware tools, plumbing fixtures, sanitary ware, and accessories sourced from trusted manufacturers.</li>
          <li><strong>Exceptional Service</strong>: Our knowledgeable staff is dedicated to assisting you with product selection, technical advice, and after-sales support.</li>
          <li><strong>Innovative Solutions</strong>: We stay ahead of industry trends to bring you the latest products and technologies that meet your needs.</li>
        </ul>

        <h2>What We Offer</h2>
        <p>
          At Kailash Hardware and Sanitary Products, you’ll find:
        </p>
        <ul>
          <li><strong>Hardware Tools</strong>: From hand tools to power tools, we have everything you need for your projects.</li>
          <li><strong>Sanitary Ware</strong>: Explore our selection of toilets, sinks, faucets, and more, designed for both style and functionality.</li>
          <li><strong>Plumbing Fixtures</strong>: Quality pipes, fittings, and accessories for all your plumbing needs.</li>
          <li><strong>Expert Advice</strong>: Our team of experts is always ready to provide guidance and solutions tailored to your specific requirements.</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Experience and Expertise</strong>: With years of experience in the industry, we have the knowledge and skills to address all your hardware and sanitary needs.</li>
          <li><strong>Customer-Centric Approach</strong>: We prioritize your satisfaction and strive to provide personalized service and support.</li>
          <li><strong>Quality Assurance</strong>: We are committed to offering products that meet the highest standards of quality and durability.</li>
        </ul>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity</strong>: We believe in honest and transparent business practices.</li>
          <li><strong>Customer Focus</strong>: Your needs and concerns are at the forefront of everything we do.</li>
          <li><strong>Excellence</strong>: We are dedicated to continuous improvement and excellence in our products and services.</li>
        </ul>

        <h2>Visit Us</h2>
        <p>
          We invite you to visit our store at [address] and experience firsthand the quality 
          and service that set us apart. Our friendly staff is here to help you find exactly 
          what you need and answer any questions you may have.
        </p>

        <h2>Get in Touch</h2>
        <p>
          For more information or to inquire about our products and services, please contact 
          us at [phone number] or [email address]. Follow us on [social media platforms] 
          to stay updated on the latest products, promotions, and news.
        </p>

        <p>Thank you for choosing Kailash Hardware and Sanitary Products. We look forward to serving you!</p>
      </div>
    </div>
  );
};

export default AboutUs;
