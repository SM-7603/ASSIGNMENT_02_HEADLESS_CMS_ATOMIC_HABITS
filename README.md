# **Atomic Habits Summary**  

## **Project Overview**  

- **Description**:  
  This project is a static website built using Eleventy to provide chapter-by-chapter summaries of *Atomic Habits* by James Clear.  
- **Objective**:  
  The site demonstrates modern web development practices, combining Markdown-based content with a headless CMS for dynamic content management while maintaining a clean, user-friendly reading experience.  

---

## **How to Run the Application**  

### **Dependencies**  
Before proceeding, ensure you have Node.js installed on your system.  

1. **Install Dependencies**:  
   ```bash
   npm install
   ```  

2. **Build the Static Site**:  
   ```bash
   npm run build
   ```  

3. **Start the Local Server**:  
   ```bash
   npm start
   ```  

4. **Access the Website**:  
   Open your browser and visit [http://localhost:8080/](http://localhost:8080/).  

---

## **Features & Design Choices**  

### **Key Features**  

1. **Markdown-Driven Content**:  
   - Chapters are authored in Markdown for simplicity and clarity.  
   - Eleventy processes these files into static HTML pages.  

2. **Dynamic Sidebar**:  
   - A sidebar lists all chapters for easy navigation, with the current chapter highlighted.  
   - **Design Choice**: Utilized `position: sticky` for consistent visibility.

3. **Chapter Navigation**:  
   - Users can navigate seamlessly between chapters using dynamically generated "Next" and "Previous" links.  

4. **Search Functionality**:  
   - A search bar allows users to filter chapter titles dynamically.  
   - Implemented with JavaScript for a simple and responsive user experience. (GhostAPI)

5. **Headless CMS Integration**:  
   - Ghost CMS manages chapter content, enabling flexibility in updates without modifying the codebase.  

---

## **Setup Details**  

### **Eleventy (11ty)**  
- Eleventy is a static site generator used for transforming Markdown and template files into a fully functional static site.  
- **Configuration**: Defined in `.eleventy.js`, specifying directories for input, output, and layouts.  

### **CSS Styling**  
- A single `main.css` file handles all styling.  
- **Reasoning**: Kept the setup simple, focusing on functionality rather than advanced CSS frameworks.  

---

## **Future Improvements**  

1. **Styling Enhancements**:  
   - Introduce SCSS for better maintainability and theming.  
2. **Dark Mode**:  
   - Add a toggle to enhance user experience during nighttime browsing.  
3. **Implement Pagination**:  
   - Improve navigation with advanced pagination for larger content sets.  
4. **General functionality & design**

---

## **Reflection & Takeaways**  

This project was both a learning experience and a challenge:  

1. **What Worked**:  
   - Integration with Ghost CMS made content updates easier.  
   - Eleventy’s flexibility allowed for clean, modular code.  

2. **What Could Be Improved**:  
   - Time management

---

## **Acknowledgments**  

- [Dan Silvestre's Atomic Habits Summary](https://dansilvestre.com/summaries/atomic-habits-james-clear/)  
- [James Clear's Official Summary](https://jamesclear.com/atomic-habits-summary)
