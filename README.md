# Holidaze - Accommodation Booking Application

## Live site  
[Holidaze Live Site](https://mariuszrozycki.github.io/holidaze/) https://mariuszrozycki.github.io/holidaze/

![image](https://github.com/user-attachments/assets/f4b5b924-ff30-492a-a4a3-d63572f81587)


## Overview

Holidaze is a modern front-end application for an accommodation booking platform. The project is being developed using **HTML**, **SCSS**, **CSS**, **JavaScript**, **React**, and **TypeScript**. It leverages **GitHub Pages** for hosting and integrates a **Kanban board on GitHub Projects** for task management. The design prototype was created in **Adobe XD**.

The application consists of three main sections:

1. **Not logged customer-facing website**: Users can browse, search, and book venues for their holidays.
2. **Admin-facing dashboard**: Venue managers can register, manage venues, and oversee bookings.
3. **Logged customer-facing website**: Venue managers can register, manage venues, and oversee bookings.

This project integrates with the Holidaze API for backend functionality, focusing solely on the development of the front end.

## Features

### Not logged customer-facing features

- A user may view a list of Venues.
- A user may search for a specific Venue.
- A user may view a specific Venue page by id.
- A user may view a calendar with available dates for a Venue.
- A user with a stud.noroff.no email may register as a customer.
- A user with a stud.noroff.no email may register as a Venue manager.
- A registered user may login.

### Logged customer-facing features

- A registered customer may create a booking at a Venue.
- A registered customer may view their upcoming bookings.
- A user with a stud.noroff.no email may register as a Venue manager.
- A user may view a calendar with available dates for a Venue.
- A registered user may update their avatar.
- A registered user may logout.

### Venue manager-facing features

- A registered Venue manager may create a Venue.
- A registered Venue manager may update a Venue they manage.
- A registered Venue manager may delete a Venue they manage.
- A registered Venue manager may delete a Venue they manage.

### Global Features

- **User authentication**:
  - Login and logout functionality.
  - Update user avatar.
- **Responsiveness**: Modern and responsive design for a seamless user experience.

## Technical Specifications

### Completed Technologies:

- **Frontend**: React, React-Router-Dom, TypeScript, HTML, SCSS, CSS, SASS, Bootstrap 5.3 and React-Bootstrap.
- **Backend API**: Integration with Holidaze API (Noroff).
- **Hosting**: GitHub Pages.
- **Testing**: Jest (for unit testing).
- **Design**: Adobe XD ([Design link](https://xd.adobe.com/view/ba18848d-fb2c-4687-aa73-fb2f03a5737e-ef4b/)).
- **Planning**: GitHub Projects ([Kanban board link](https://github.com/users/MariuszRozycki/projects/1)).

### To Be Completed:

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
5. Deploy to GitHub Pages:
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

### Contact
Mariusz Rozycki:  
Portfolio: [https://mariuszrozycki.github.io/portfolio2/](https://mariuszrozycki.github.io/portfolio2/)  
Portfolio-contact: [https://mariuszrozycki.github.io/portfolio2/contact](https://mariuszrozycki.github.io/portfolio2/contact)  
LinkedIn: [https://www.linkedin.com/in/mariusz-rozycki](https://www.linkedin.com/in/mariusz-rozycki)  
E-mail: <mariusz.frontdev@gmail.com>

---

Thank you for exploring the Holidaze project!
