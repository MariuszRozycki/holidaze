# Holidaze - Accommodation Booking Application

## Overview

Holidaze is a modern front-end application for an accommodation booking platform. The project is being developed using **HTML**, **SCSS**, **CSS**, **JavaScript**, **React**, and **TypeScript**. It leverages **GitHub Pages** for hosting and integrates a **Kanban board on GitHub Projects** for task management. The design prototype was created in **Adobe XD**.

The application consists of two main sections:

1. **Customer-facing website**: Users can browse, search, and book venues for their holidays.
2. **Admin-facing dashboard**: Venue managers can register, manage venues, and oversee bookings.

This project integrates with the Holidaze API for backend functionality, focusing solely on the development of the front end.

## Features

### Customer-Facing Features

- View a list of venues.
- Search for venues by keyword.
- View detailed information about a venue, including available dates via a calendar.
- Register as a customer (requires `stud.noroff.no` email).
- Create a booking at a venue (for registered customers).
- View upcoming bookings.

### Admin-Facing Features

- Register as a venue manager (requires `stud.noroff.no` email).
- Create, update, and delete venues as a venue manager.
- View bookings for a managed venue.

### Global Features

- **User authentication**:
  - Login and logout functionality.
  - Update user avatar.
- **Responsiveness**: Modern and responsive design for a seamless user experience.

## Technical Specifications

### Completed Technologies:

- **Frontend**: HTML, SCSS, CSS, React, and TypeScript.
- **Backend API**: Integration with Holidaze API (Noroff).
- **Hosting**: GitHub Pages.
- **Testing**: Jest (for unit testing).
- **Design**: Adobe XD ([Design link](https://xd.adobe.com/view/ba18848d-fb2c-4687-aa73-fb2f03a5737e-ef4b/)).
- **Planning**: GitHub Projects ([Kanban board link](https://github.com/users/MariuszRozycki/projects/1)).

### To Be Completed:

- Finalizing admin features (updating and deleting venues).
- Enhancing calendar functionality for booking.
- Improving responsiveness for mobile devices.
- Adding additional unit tests with Jest.

## User Stories

1. **Customers**:

   - View a list of venues.
   - Search for venues.
   - View venue details via a specific venue page.
   - View available dates for venues in a calendar.
   - Register as customers using `stud.noroff.no` email.
   - Create bookings at venues.
   - View their upcoming bookings.

2. **Venue Managers**:

   - Register using `stud.noroff.no` email.
   - Create, update, and delete their venues.
   - View bookings for their venues.

3. **Global**:
   - Users can log in, update their avatar, and log out.

## Setup and Installation

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MariuszRozycki/holidaze.git
   cd holidaze
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Deploy to GitHub Pages (if required):
   ```bash
   npm run deploy
   ```

## Technical Restrictions

- **Framework**: React and TypeScript.
- **Styling**: SCSS and CSS.
- **Hosting**: GitHub Pages.
- **Testing**: Jest.
- **Design Tool**: Adobe XD.
- **Planning Tool**: GitHub Projects.

---

Thank you for exploring the Holidaze project! Contributions and feedback are welcome.
