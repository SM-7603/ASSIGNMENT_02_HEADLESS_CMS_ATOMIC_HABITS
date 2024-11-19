# User Guide: Atomic Habits Chapter Summaries

## About

This project is a static site generator-based implementation of **Atomic Habits Chapter Summaries**, where content is fetched dynamically from **Ghost CMS**. The content is displayed with a **searchable sidebar** and clean, responsive design.

---

## How to Run the Application

### Dependencies

Install all necessary dependencies using:

```bash
npm install
```

### Create the Static Web Pages

Generate the static files for the website:

```bash
npm run build
```

### Start the Server ("Serve")

Run the development server to preview your website:

```bash
npm start
```

### Where to Access the Website

Once the server is running, access the website in your browser at:

> **http://localhost:8080/**

---

## File Structure

### Key Folders and Files

- **`src/chapters/`**
  - Contains all the **base Markdown files** for the chapters.
  - These files act as the initial content for Eleventy.

- **`src/_includes/`**
  - Includes **`base.html`** for the layout.

- **`src`**
  - Contains the source code including - **`chapter_template.html`** for individual chapter pages.

- **`src/styles/`**
  - Contains **`main.css`** for styling the website.

- **`public/`**
  - The output folder that contains all the generated **HTML files** and assets.
  - This folder is used to serve the website.

---

## Features

- **Dynamic Content Loading**: Content is fetched from **Ghost CMS**.
- **Search Functionality**: Sidebar includes a live search bar to quickly find chapters.
- **Clean Design**: Simple and responsive layout.
- **Pagination (In Development)**: Can be added to manage longer chapter lists.

---
