# Documentation for the Eleventy Project

## 1. **Project Overview**

   - **Project Name**: Atomic Habits Summary
   - **Description**: A static site built using Eleventy to provide chapter-by-chapter summaries of *Atomic Habits* by James Clear.
   - **Goal**: Demonstrate the use of modern web development practices using Eleventy while providing a user-friendly reading experience.

## 2. **Setup and Build Process**
   - **Installation Instructions**:
     - Run `npm install` to install dependencies.
     - Run `npm run build` to build the static site.
     - Run `npm start` to serve the site locally with live reload.
   - **Build Tools**:
     - **Eleventy**: Used for templating and static site generation.
     - **Plain CSS**: Used for styling without needing a CSS preprocessor.
     - **Reasoning**: Kept the setup simple for ease of maintenance and to focus on core Eleventy features.

### 3. **Folder Structure & Key Files**
   - **Overview of the Directory Structure**: (*used `tree` to get structure*)
    ```md
    ├── src/
    │   ├── _includes/
    │   │   └── base.html
    │   ├── chapters/
    │   │   ├── chapter_01.md
    │   │   ├── chapter_02.md
    │   │   └── ...
    │   ├── images/
    │   └── styles/
    │       └── main.css
    ├── .eleventy.js
    ├── package.json
    └── public/
    ```
   - **base.html (Nunjucks Layout Template)**:
     - The `base.html` file serves as the main layout for all pages, providing a consistent structure for the site's header, navigation, content, and footer.
     - **Key Snippet**:
       ```html
       <!DOCTYPE html>
       <html lang="en">
         <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>{{ title }}</title>
           <link rel="stylesheet" href="/styles/main.css">
         </head>
         <body>
           <header>
             <h1>Atomic Habits: Chapter Summaries</h1>
           </header>
           <nav aria-label="breadcrumb">
             <ul>
               <li><a href="/">Home</a></li>
               <li>{{ title }}</li>
             </ul>
           </nav>
           <main class="content">
             {{ content | safe }}
           </main>
           <footer>
             <nav class="chapter-navigation">
               {% if "chapter" in page.fileSlug %}
                 <h3>Chapter Navigation</h3>
                 <!-- Previous and next chapter links -->
                 {% set previousChapter = collections.chapters | getPreviousCollectionItem(page) %}
                 {% set nextChapter = collections.chapters | getNextCollectionItem(page) %}
                 <p>
                   {% if previousChapter %}
                     <a href="{{ previousChapter.url }}">Previous: {{ previousChapter.data.title }}</a>
                   {% endif %}
                   {% if nextChapter %}
                     <a href="{{ nextChapter.url }}">Next: {{ nextChapter.data.title }}</a>
                   {% endif %}
                 </p>
               {% else %}
                 <p>Hello, Reader! Thanks for visiting the Atomic Habits summary page.</p>
               {% endif %}
             </nav>
           </footer>
         </body>
       </html>
       ```
     - **Explanation**:
       - The `{{ content | safe }}` placeholder injects the content of each Markdown file into the layout.
       - The `if "chapter" in page.fileSlug` condition ensures that chapter-specific navigation only appears on chapter pages.
       - This file allows us to maintain a consistent layout across all pages, ensuring a uniform design.

   - **Markdown Files**:
     - Each chapter summary is written in Markdown and transformed into HTML using Eleventy.
     - **Example** - `chapter_02.md`:
       ```md
       ---
       title: "Chapter 2: Identity-Based Habits"
       layout: base.html
       tags: "chapters"
       ---
       
       ## Chapter 2: Identity-Based Habits
       
       In this chapter, James Clear discusses how our habits are deeply connected to our identity. Changing our habits is about changing who we believe we are.
       ```
     - **Explanation**:
       - The frontmatter (`---`) sets the `title`, `layout`, and `tags` for Eleventy to use.
       - The content is written in Markdown, making it easy to focus on writing without HTML overhead.

### 4. **Features & Design Choices**
   - **Sticky Sidebar with Chapter List**:
     - Displays all chapters for easy navigation.
     - **CSS**: Utilizes `position: sticky` for the sidebar to remain visible while scrolling.
     - **Reasoning**: Improves user experience by keeping important links easily accessible.

   - **Dynamic Chapter Navigation**:
     - Uses Eleventy's collections to create links to the previous and next chapters.
     - **Key Snippet**:
     ```njk
       {% set previousChapter = collections.chapters | getPreviousCollectionItem(page) %}
       {% set nextChapter = collections.chapters | getNextCollectionItem(page) %}
       ```
     - **Explanation**: This logic allows users to navigate between chapters seamlessly.

   - **Dark Mode (Explored but Not Implemented)**:
     - Initially planned to add a toggle for dark mode.
     - **Reasoning for Exclusion**: Implementing this feature required additional time for testing and adjustments, so it was deferred.

### 5. **Build Process & Automation**
   - **Scripts in `package.json`**:
     ```json
     "scripts": {
       "build": "npx @11ty/eleventy",
       "start": "npx @11ty/eleventy --serve"
     }
     ```
   - **Explanation**:
     - `build`: Generates the static files.
     - `start`: Builds and serves the site locally with live reloading.
   - **Reasoning**: Streamlines the development process and ensures that the build command generates production-ready HTML.

### 6. **Explored Features**
   - **Fuzzy Search with Fuse.js**:
     - Considered adding a search bar using Fuse.js to allow users to find specific chapters or topics.
     - **Challenges**: Generating a `index.json` for Fuse.js to use as a searchable index proved complex.
     - **Reasoning for Exclusion**: Focused on a stable core experience instead of adding potentially buggy features.
   - **Pagination with Eleventy**:
     - **What Was Tried**: Used collections for chapter navigation and tags for content organization.
     - **Challenges**: Found simpler solutions with tags, making pagination unnecessary for the current scope.

### 7. **Sources and Citations**
     - [Dan Silvestre's Atomic Habits Summary](https://dansilvestre.com/summaries/atomic-habits-james-clear/)
     - [Ali Abdaal's Book Notes](https://aliabdaal.com/book-notes/atomic-habits-summary/)
     - [James Clear's Summary](https://jamesclear.com/atomic-habits-summary)
     - ChatGPT for styling & doc structure

### 8. **Future Improvements**
   - **Potential Features**:
     - Implementing a full-text search with Fuse.js.
     - Adding SCSS for more maintainable styling.
     - Adding more interactive features like content highlighting.
   - **Reasoning**: These enhancements could improve user engagement but were left for future updates due to time constraints.

### 9. **Reflection & Key Takeaways**

This project was a classic case of over-engineering. I got a bit too caught up in adding complex features like custom search and different ways to manage collections, which ended up creating a bunch of unnecessary bugs. Things broke, I spent too much time debugging, and honestly, I lost track of the simplicity I was aiming for initially.

Another mistake: I didn't set up a Git repository right away - Bad idea. I lost a lot of my changes at one point and had to start from scratch. That meant a lot of rework, especially today when I had to finish everything up before the deadline.

What did I learn? Time management is key, and it's better to assign more time than I think I need, even if the project seems straightforward at first. Saying, "Oh, this will only take two hours" is a trap. Instead, I'll make sure to plan better and give myself time throughout the week, so I'm not rushing last minute and running into problems.
