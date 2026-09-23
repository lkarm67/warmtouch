# 🔥 WarmTouch — Custom Stove & Fireplace Website

**WarmTouch** is a responsive commercial website for a professional craftsman specializing in the construction and finishing of heating stoves, tiled stoves, fireplaces, and barbecue complexes.

The website was developed as a real business solution for presenting services, showcasing completed projects, and receiving customer inquiries.

## 🌐 Live Website

[WarmTouch — Live Website](https://warmtouch.vercel.app/)

## 📌 About the Project

**WarmTouch** is a real commercial website developed for a professional stove and fireplace craftsman.

The website serves as a complete digital platform for presenting services, showcasing completed projects, providing information about the craftsman, and receiving customer inquiries.

A custom communication system was implemented to make order processing convenient for the business owner. When a customer submits the contact form, the inquiry is delivered to the craftsman's email and Telegram bot simultaneously.

This makes the website more than just a presentation page — it functions as a real customer acquisition and communication channel.

## ✨ Features

- 📩 Customer inquiry form
- 📧 Email notifications for new inquiries via **Resend**
- 🤖 Telegram Bot API integration for instant order notifications
- 🔄 Parallel delivery of customer inquiries via email and Telegram
- 🖼 Portfolio with categories, detailed project descriptions, and image galleries
- ❓ FAQ section
- ⭐ Real customer reviews
- 🌗 Light and dark themes
- 🔥 Custom interactive fire cursor
- 📱 Fully responsive design
- 🔍 SEO metadata, sitemap, and robots.txt
- ⚡ Performance optimization
- ⏳ Custom loading state
- 🚫 Custom 404 page

## 📩 Order & Communication System

The website includes a custom contact form connected to Next.js API routes.

When a customer submits an inquiry:

1. The request is processed by the Next.js API.
2. **Resend** is used to deliver the inquiry to the craftsman's email.
3. The same inquiry is sent to the craftsman's Telegram bot.

This provides two independent notification channels and allows the craftsman to receive new customer requests quickly and conveniently.

## 🔥 Interactive Fire Cursor

The website features a custom interactive cursor designed as a small flame.

The fire cursor was created to complement the WarmTouch brand identity and reinforce the site's connection with fire, craftsmanship, and traditional stove building.

The cursor is implemented as a dedicated reusable React component and uses custom SVG graphics.

## 🛠 Technologies

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **HTML5**
- **CSS3**

### APIs & Integrations

- **Next.js API Routes**
- **Telegram Bot API**
- **Resend** — transactional email delivery

### Tools & Deployment

- **Git**
- **GitHub**
- **Vercel**
- **Google Lighthouse**

## 📱 Responsive Design

The website is fully responsive and optimized for different screen sizes:

- Mobile — from `320px`
- Tablet
- Desktop
- Large desktop

Special attention was paid to adapting the navigation, service cards, portfolio, modal gallery, contact form, and other interactive elements to different screen sizes.

## 🎨 UI / UX

The visual design is inspired by natural materials, traditional craftsmanship, and fire.

The color palette combines:

- warm brown tones;
- beige and cream shades;
- terracotta accents;
- neutral gray tones.

The website supports both **light** and **dark** themes.

The custom fire cursor adds an additional interactive element while maintaining the visual identity of the brand.

## 🖼 Portfolio

The portfolio includes the following categories:

- Heating Stoves
- Masonry Heaters
- Tiled Masonry Heaters
- Fireplaces
- Barbecue Complexes
- Grills

Users can filter projects by category and open individual projects in a modal window with a gallery and detailed project information.

The portfolio also includes pagination for better content organization and usability.

## ♿ Accessibility & UX

Basic accessibility and usability principles were taken into account during development:

- semantic HTML structure;
- descriptive `alt` attributes for images;
- keyboard interaction with the modal window;
- closing the modal with the `Escape` key;
- focus management for interactive elements;
- responsive typography and controls;
- appropriate contrast in both light and dark themes.

## ⚡ Performance

Performance optimization included:

- `next/image` for image optimization;
- optimized component structure;
- responsive image loading;
- minimizing unnecessary resources;
- optimized CSS;
- loading and error states.

The website was tested using **Google Lighthouse**.

## 🔍 SEO

The project includes basic technical SEO implementation:

- page metadata;
- semantic HTML structure;
- dynamic `sitemap.xml`;
- `robots.txt`;
- optimized images;
- descriptive page content.

## 📂 Project Structure

```text
warmtouch/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   └── telegram/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── About/
│   ├── ContactForm/
│   ├── Cursor/
│   ├── FAQ/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Portfolio/
│   ├── Reviews/
│   ├── Services/
│   ├── Theme/
│   └── ThemeToggle/
│
├── lib/
│   └── config/
│
├── public/
│   ├── images/
│   └── icons.svg
│
└── types/
    └── portfolio.types.ts
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/lkarm67/warmtouch.git
```

Navigate to the project directory:

```bash
cd warmtouch
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📦 Build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## 🚀 Deployment

The project is deployed using **Vercel**.

The production version is connected to the project's GitHub repository and can be automatically rebuilt after changes are pushed to the repository.

## 📌 Project Status

Active commercial project

The website is deployed and used as a real business website for presenting services, communicating with potential customers, and receiving customer inquiries.

## 👩‍💻 Author

**Liudmyla Karmeliuk**

Junior Frontend Developer

GitHub: [@USERNAME](https://github.com/lkarm67)

LinkedIn: [Liudmyla Karmeliuk](https://www.linkedin.com/in/liudmyla-karmeliuk-full-stack)

```

## 📄 License

The source code of this project is licensed under the [MIT License](./LICENSE).

The MIT License applies to the source code and software components of this project. It does not grant permission to use, reproduce, or distribute the website's photographs, logo, brand identity, text content, or other original visual and editorial materials unless otherwise stated.

© 2026 Liudmyla Karmeliuk. All rights reserved for the original content and visual materials.
