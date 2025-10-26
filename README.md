**Empowering the Nation – Milestone 2**
**Web and Mobile App Design Project**

**Group Members:** Khanyisa Ntsako Shikwambana, Rixile Nkateko Ndlovu, Rilwele Success Khangale
**Group Leader:** Khanyisa N. Shikwambana

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

# Empowering the Nation Mobile App

## Project Overview

The Empowering the Nation Mobile App is a cross-platform application designed to provide information, resources, and tools for community empowerment, skills development, and education. The app is built using React Native and Expo, and is designed to closely match the look, feel, and functionality of the Empowering the Nation web application.

## Features

- Home page with branding and mission statement
- About Us section
- Courses listing and detailed course information
- Events calendar and event details
- Testimonials from learners and partners
- Contact form for user inquiries
- Fee Calculator for course cost estimation
- Donate Now button for community support
- Custom navigation header and footer
- Themed UI with light/dark mode support

## Technologies Used

- React Native (Expo)
- TypeScript
- React Navigation
- Custom components for header, footer, and UI elements
- Local asset management for images and fonts

## Installation & Running the App

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd EmpoweringTheNationMobile
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the Expo development server**
   ```bash
   npx expo start
   ```
4. **Run on your device or emulator**
   - Scan the QR code with Expo Go (Android/iOS)
   - Or launch on an Android emulator/iOS simulator from the Expo Dev Tools

## Project Structure

- `app/` — Main application screens and navigation
- `components/` — Reusable UI components (Header, Footer, etc.)
- `constants/` — Theme and color definitions
- `assets/` — Images and fonts
- `hooks/` — Custom React hooks
- `scripts/` — Utility scripts

## Development Approach

The app was developed with a focus on:
- Pixel-perfect fidelity to the web app design
- Accessibility and usability (following best practices)
- Modular, reusable code structure
- Type safety with TypeScript
- Responsive layouts for different device sizes




## Design Features & User Interface

This project was created by Khanyisa Shikwambana, Rixile Ndlovu, and Success Khangale.

The Empowering the Nation Mobile App is designed for clarity, accessibility, and a modern user experience. Below are the key design features:

### Layout & Navigation
- Custom header at the top of every screen with the Empowering the Nation logo and brand colors.
- Main navigation is available via a horizontal scrollable header and a bottom tab bar (on mobile devices).
- Active navigation links are highlighted for clear orientation.
- The "Donate Now" button is always visible in the header for quick access.

### Buttons
- **Primary buttons** (e.g., Donate Now) use a bold orange background (`#ea580c`) with white text for high visibility.
- **Navigation links** are pill-shaped. The active link uses a soft orange background (`#ffedd5`) and bold text, while the Courses link uses a green highlight (`#bbf7d0`) when active.
- All buttons have rounded corners and padding for a modern, touch-friendly feel.

### Color Palette
- **Orange:** `#ea580c` (primary accent, used for buttons and highlights)
- **Green:** `#15803d` (secondary accent, used for branding and active Courses link)
- **Light Green:** `#bbf7d0` (Courses active background)
- **Soft Orange:** `#ffedd5` (active navigation background)
- **White:** `#fff` (background)
- **Gray:** `#374151` (text), `#fdba74` (borders)
- The app supports both light and dark modes, adapting to the device theme.

### Forms & Inputs
- Contact screen features clearly labeled input fields with rounded borders and ample spacing.
- Fee Calculator uses simple numeric inputs and a prominent calculate button.

### Imagery & Icons
- All images are locally stored for fast loading and offline access.
- Icons are used for visual cues (e.g., awards, events) and styled to match the color palette.

### Typography
- Headings use bold, colored text for emphasis (orange or green, depending on context).
- Body text is clear and readable, with consistent font sizes and spacing.

### How to Navigate
1. **Home:** Start on the Home screen to see the mission and quick links.
<img width="610" height="931" alt="Screenshot 2025-09-10 190257" src="https://github.com/user-attachments/assets/a3008400-e7ad-46c8-a026-36b6887aa1ef" />
<img width="570" height="962" alt="Screenshot 2025-09-10 190344" src="https://github.com/user-attachments/assets/86ab490b-ee70-4cf6-9b46-0b203e0a4b52" />
<img width="585" height="956" alt="Screenshot 2025-09-10 190542" src="https://github.com/user-attachments/assets/8e1f340b-c253-4143-98ae-d0742afc0950" />
<img width="572" height="968" alt="Screenshot 2025-09-10 190611" src="https://github.com/user-attachments/assets/0a571c34-4571-442a-9b61-ff9f343e1382" />

2. **Header Navigation:** Tap any link in the header (About Us, Courses, Events, Testimonials, Contact, Fee Calculator) to jump to that section. The active section is highlighted.
3. **Tab Bar (if available):** Use the bottom tab bar for quick switching between main sections.
4. **Donate Now:** Tap the orange Donate Now button in the header to access the donation screen from anywhere.
5. <img width="567" height="926" alt="Screenshot 2025-09-10 201217" src="https://github.com/user-attachments/assets/2c8afae6-f20e-46db-a764-f1b6db2ed878" />

6. **Explore Content:** Scroll through courses, events, and testimonials. Tap on a course or event for more details.
<img width="561" height="960" alt="Screenshot 2025-09-10 190953" src="https://github.com/user-attachments/assets/3e44714e-8160-439b-b676-7d32faee3eb6" />
<img width="577" height="931" alt="Screenshot 2025-09-10 191031" src="https://github.com/user-attachments/assets/0d7375ae-44d3-4e1e-9651-9c66f0180d09" />
<img width="552" height="917" alt="Screenshot 2025-09-10 191154" src="https://github.com/user-attachments/assets/f7d9840c-3d5c-4d66-bc49-ca72e6f76fc2" />
<img width="558" height="967" alt="Screenshot 2025-09-10 191234" src="https://github.com/user-attachments/assets/ab5f56fe-9a7d-4464-9b99-669a72ffa163" />

7. **Contact & Calculator:** Use the Contact form to send a message, or the Fee Calculator to estimate course costs.
8. <img width="561" height="965" alt="Screenshot 2025-09-10 191318" src="https://github.com/user-attachments/assets/c39d19f9-b33c-4e08-838b-5a6ec7e16f0f" />
<img width="568" height="961" alt="Screenshot 2025-09-10 191354" src="https://github.com/user-attachments/assets/d04a89df-8425-4914-ad4a-a04280ae2e6f" />

9. **Back Navigation:** Use the device back button or navigation controls to return to previous screens.
10.**About us:** <img width="563" height="967" alt="Screenshot 2025-09-10 191857" src="https://github.com/user-attachments/assets/58fe8594-3722-4043-8a27-246fe6c5a271" />
<img width="548" height="957" alt="Screenshot 2025-09-10 191928" src="https://github.com/user-attachments/assets/335a787b-b555-4c62-ade3-21bd164f30d0" />
<img width="571" height="960" alt="Screenshot 2025-09-10 191955" src="https://github.com/user-attachments/assets/1ab8d268-658e-4b95-ba9b-26d619b2f3aa" />
<img width="561" height="958" alt="Screenshot 2025-09-10 192026" src="https://github.com/user-attachments/assets/c6b3ffc8-cef7-4c02-93dc-5cee1f789e9f" />
<img width="562" height="962" alt="Screenshot 2025-09-10 192054" src="https://github.com/user-attachments/assets/d19ebdad-a124-4012-85a9-0c6c20e61f66" />
11.**Demo payement:** <img width="543" height="945" alt="Screenshot 2025-09-10 191818" src="https://github.com/user-attachments/assets/08bdd372-31dc-4582-8bc9-a7628a1ca77c" />
12. **Event:** <img width="568" height="963" alt="Screenshot 2025-09-10 190649" src="https://github.com/user-attachments/assets/2d78d0f0-cc7c-456d-ae0a-2ad02d1e7d85" />
<img width="573" height="963" alt="Screenshot 2025-09-10 190729" src="https://github.com/user-attachments/assets/6af55443-1b4f-469e-a6f1-893eab00024c" />
<img width="566" height="957" alt="Screenshot 2025-09-10 190758" src="https://github.com/user-attachments/assets/8fa20c38-23e8-4e08-abd0-795c6fec094b" />
<img width="567" height="951" alt="Screenshot 2025-09-10 190832" src="https://github.com/user-attachments/assets/772d27f9-b818-4aa7-bf4e-485bb2163993" />
<img width="567" height="960" alt="Screenshot 2025-09-10 190921" src="https://github.com/user-attachments/assets/b505cac0-0eb5-4b64-8b6f-ad28bf1cb7a1" />
12.**Fee calculator:**<img width="463" height="890" alt="image" src="https://github.com/user-attachments/assets/c1c0d8ed-471e-48eb-8c45-b48b3a9762eb" />
<img width="471" height="931" alt="image" src="https://github.com/user-attachments/assets/e436d6b4-8ec6-4599-8a4b-eed395ef9f8e" />

### Layout & Navigation
- The app uses a custom header at the top of every screen, featuring the Empowering the Nation logo and brand colors.
- Main navigation is accessible via the header (horizontal scrollable links) and a tab bar at the bottom (on mobile devices).
- Each navigation link highlights when active, making it clear which section the user is viewing.
- The Donate Now button is always visible in the header for quick access.

### Buttons
- **Primary buttons** (e.g., Donate Now) use a bold orange background (`#ea580c`) with white text for high visibility and call-to-action emphasis.
- **Navigation links** are styled as pill-shaped buttons. The active link uses a soft orange background (`#ffedd5`) and bold text, while the Courses link uses a green highlight (`#bbf7d0`) when active.
- All buttons have rounded corners and padding for a modern, touch-friendly feel.

### Color Palette
- **Orange:** `#ea580c` (primary accent, used for buttons and highlights)
- **Green:** `#15803d` (secondary accent, used for branding and active Courses link)
- **Light Green:** `#bbf7d0` (Courses active background)
- **Soft Orange:** `#ffedd5` (active navigation background)
- **White:** `#fff` (background)
- **Gray:** `#374151` (text), `#fdba74` (borders)
- The app supports both light and dark modes, automatically adapting to the device theme.

### Forms & Inputs
- The Contact screen features clearly labeled input fields with rounded borders and ample spacing.
- The Fee Calculator uses simple numeric inputs and a prominent calculate button.

### Imagery & Icons
- All images are locally stored for fast loading and offline access.
- Icons are used for visual cues (e.g., awards, events) and are styled to match the color palette.

### Typography
- Headings use bold, colored text for emphasis (orange or green, depending on context).
- Body text is clear and readable, with consistent font sizes and spacing.

## How to Navigate the App

1. **Home:** Start on the Home screen to see the mission and quick links.
2. **Header Navigation:** Tap any link in the header (About Us, Courses, Events, Testimonials, Contact, Fee Calculator) to jump to that section. The active section is highlighted.
3. **Tab Bar (if available):** Use the bottom tab bar for quick switching between main sections.
4. **Donate Now:** Tap the orange Donate Now button in the header to access the donation screen from anywhere.
5. **Explore Content:** Scroll through courses, events, and testimonials. Tap on a course or event for more details.
6. **Contact & Calculator:** Use the Contact form to send a message, or the Fee Calculator to estimate course costs.
7. **Back Navigation:** Use the device back button or navigation controls to return to previous screens.



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
