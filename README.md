
# Empowering the Nation Web Application

Empowering the Nation is a modern web application designed to provide skills training and professional development opportunities for domestic workers and gardeners in Johannesburg, South Africa. The platform aims to uplift individuals and communities by offering accessible, high-quality courses and resources.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design Principles](#design-principles)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [Reference List (Harvard Style)](#reference-list-harvard-style)

## Overview
Empowering the Nation is built to:
- Offer skills training courses (e.g., First Aid, Sewing, Landscaping, Life Skills, Child Minding, Cooking, Garden Maintenance)
- Support both six-month and six-week program types
- Provide information about the organization, its mission, and impact
- Enable users to browse courses, register, donate, and contact the organization

## Features
- Responsive, user-friendly interface
- Modern navigation and routing
- Course catalog with details and registration
- Donation and contact forms
- Testimonials and impact stories
- Accessibility and usability best practices

## Technology Stack
- **Frontend:** React.js (Create React App)
- **Styling:** CSS, custom themes, Material Design influences
- **Routing:** React Router
- **Assets:** Images, icons, and logos in the `public/` and `src/assets/` folders

## Project Structure
```
public/
	index.html
	favicon.ico
	...
src/
	App.js
	Navigation.js
	CoursesPage.js
	CourseDetailPage.js
	ContactPage.js
	DonatePage.js
	EventsPage.js
	TestimonialsPage.js
	Footer.js
	data/
		courses.js
		footerData.js
	assets/
		...
	ui/
		button.js
		card.js
		badge.js
	...
```

## Getting Started

## Detailed Page and Button Guide

### Navigation Bar (Top of Every Page)
- **Logo & Branding:** Clicking the logo or “Empowering Nation” text takes you to the Home page.
- **Home:** Returns to the main landing page.
- **About Us:** Goes to the About page, describing the organization and team.
- **Courses:** Opens the Courses page, listing all available training programs.
- **Events:** Shows upcoming and past events.
- **Testimonials:** Displays stories and feedback from past students.
- **Contact:** Opens the Contact page for inquiries.
- **Fee Calculator:** Opens a tool to estimate course costs.

### Home Page (`/`)
- **Explore Our Courses (Button):** Takes you to the Courses page.
- **Support Our Mission (Button):** Takes you to the Donate page.
- **View Six-Month Courses (Button):** Filters Courses page to show only six-month programs.
- **View Six-Week Courses (Button):** Filters Courses page to show only six-week programs.
- **Browse All Courses (Button):** Takes you to the Courses page.
- **Contact Us (Button):** Takes you to the Contact page.
![Screenshot_10-9-2025_0027_localhost](https://github.com/user-attachments/assets/11bef6f5-d8a1-4175-9f32-fc0762e87dab)

### About Page (`/about`)
- **Team Member Cards:** Show photos, names, roles, and bios of the organization’s team.
- **Mission, Vision, and Values:** Text sections explaining the organization’s purpose and approach.
![Screenshot_10-9-2025_0039_localhost](https://github.com/user-attachments/assets/e82b4364-13a0-4598-83e7-b71539f8ad1f)

### Courses Page (`/courses`)
- **Filter Buttons:** “All”, “Six-Month”, “Six-Week” — filter the course list.
- **Course Cards:** Each card shows course name, type, price, and a “View Details” button.
- **View Details (Button):** Opens the Course Detail page for that course.
![Screenshot_10-9-2025_0051_localhost](https://github.com/user-attachments/assets/498151d5-5a2e-4a1e-ac67-fab6a2216f7c)


### Course Detail Page (`/courses/:courseId`)
- **Back Button:** Returns to the Courses page.
- **Register Now (Button):** Opens a registration form or process for the course.
- **Course Info:** Shows course image, description, price, duration, and other details.
![Screenshot_10-9-2025_033_localhost](https://github.com/user-attachments/assets/33bee52e-21c8-4c4c-8032-7c530e0854ae)

### Events Page (`/events`)
- **Event Cards:** Each card shows event name, date, time, venue, description, and image.
- **Register/More Info (Button):** (If present) lets users sign up or learn more about an event.
![Screenshot_10-9-2025_0127_localhost](https://github.com/user-attachments/assets/1ee98022-e8fd-4fd3-8f0f-b998b53bc72f)

### Testimonials Page (`/testimonials`)
- **Testimonial Cards:** Show student photo, name, course, year, quote, and achievement.
![Screenshot_10-9-2025_0136_localhost](https://github.com/user-attachments/assets/f14b5d9a-32fe-4125-ac15-403c3153cb7a)

### Contact Page (`/contact`)
- **Contact Form:** Fields for name, email, phone, and message.
- **Send Message (Button):** Submits the form; shows a thank you message on success.
- **Venue Info:** Lists physical locations and contact details.
![Screenshot_10-9-2025_03329_localhost](https://github.com/user-attachments/assets/2df45efe-41aa-44a6-abca-2f4d5fd126e7)

### Fee Calculator Page (`/calculator`)
- **Course Selection Checkboxes:** Select one or more courses to estimate fees.
- **Customer Info Fields:** Name, phone, email.
- **Calculate (Button):** Shows a quote for selected courses.
- **Request Consultation (Button):** Submits a request for further info.
![Screenshot_10-9-2025_0156_localhost](https://github.com/user-attachments/assets/0a32f5ba-4560-4141-8c2e-3be2b2256395)

### Donate Page (`/donate`)
- **Impact Area Cards:** Show what donations support (e.g., materials, student support, scholarships).
- **Donate Now (Button):** Takes you to a (demo) payment page.
- ![Screenshot_10-9-2025_027_localhost](https://github.com/user-attachments/assets/dd1103c2-b34a-4dff-af5e-b37bee7b05be)

- **Demo Payment Page:** Lets you enter an amount and fake card details to simulate a donation.
- ![Screenshot_10-9-2025_0231_localhost](https://github.com/user-attachments/assets/fdd718e8-4421-46fa-890e-08fefbb691b7)

1. **Install dependencies:**
	 ```sh
	 npm install
	 ```
2. **Start the development server:**
	 ```sh
	 npm start
	 ```
3. **Build for production:**
	 ```sh
	 npm run build
	 ```

## Available Scripts
- `npm start` – Runs the app in development mode
- `npm run build` – Builds the app for production
- `npm test` – Runs tests

## Design Principles
The application follows modern UI/UX and accessibility standards, drawing from:
- Apple Human Interface Guidelines
- Google Material Design
- Nielsen’s Usability Heuristics
- W3C Web Standards
- User-centered design best practices

## Accessibility
- Semantic HTML and ARIA roles
- Sufficient color contrast
- Keyboard navigation support
- Responsive design for all devices

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


## Authors
This project was created by Khanyisa Shikwambana, Rixile Ndlovu, and Success Khangale.

## Reference List (Harvard Style)

- Apple Human Interface Guidelines. (2025). Apple Developer. Available at: https://developer.apple.com/design/human-interface-guidelines/ (Accessed: 9 September 2025).
- Department of Higher Education and Training (DHET). (2020). National Skills Development Plan (NSDP) 2030. Pretoria: Government of South Africa.
- Empowering the Nation. (2025). About Us. Johannesburg: Empowering the Nation Training Centre.
- Garrett, J.J. (2011). The Elements of User Experience: User-Centered Design for the Web and Beyond. 2nd ed. Berkeley: New Riders.
- Google Material Design. (2025). Material Design Guidelines. Available at: https://m3.material.io/ (Accessed: 9 September 2025).
- Herrington, M., Kew, J. and Mwanga, A. (2022). Global Entrepreneurship Monitor: South Africa Report. Cape Town: University of Cape Town.
- International Labour Organization (ILO). (2019). Skills Development and Employment: A Global Perspective. Geneva: ILO.
- Krug, S. (2014). Don’t Make Me Think, Revisited: A Common Sense Approach to Web Usability. 3rd ed. San Francisco: New Riders.
- Mozilla Developer Network (MDN). (2025). HTML, CSS and JavaScript Documentation. Available at: https://developer.mozilla.org (Accessed: 9 September 2025).
- Nielsen, J. (1995). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group. Available at: https://www.nngroup.com/articles/ten-usability-heuristics/ (Accessed: 9 September 2025).
- React Native. (2025). React Native Documentation. Available at: https://reactnative.dev/docs (Accessed: 9 September 2025).
- Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., Elmqvist, N., & Diakopoulos, N. (2016). Designing the User Interface: Strategies for Effective Human-Computer Interaction. 6th ed. Boston: Pearson.
- Statistics South Africa (Stats SA). (2023). Quarterly Labour Force Survey. Pretoria: Stats SA. Available at: https://www.statssa.gov.za (Accessed: 9 September 2025).
- W3C. (2025). World Wide Web Consortium (W3C) Standards. Available at: https://www.w3.org/standards/ (Accessed: 9 September 2025).
- World Bank. (2020). The Future of Work in Africa: Harnessing the Potential of Digital Technologies for All. Washington DC: World Bank.
e Future of Work in Africa: Harnessing the Potential of Digital Technologies for All. Washington DC: World Bank.
