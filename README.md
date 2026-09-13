# 🧱 Dev Stack Builder

A responsive React website that helps users explore modern development technologies and build their own development stack.

Users can browse different technologies, view their details, and add the technologies they want to their personal stack.

---

## ✨ Features

### 1. 🧩 Explore Technologies

Browse a collection of modern development technologies with useful information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology badge

The technology data is loaded from a local JSON file.

### 2. 🧰 Build Your Own Stack

Users can add technologies to the **Your Stack** section.

The project prevents duplicate technologies from being added and allows users to:

- Add a technology
- Remove a technology
- Remove all technologies
- See the total number of selected technologies

### 3. 🔔 Interactive User Feedback

The project uses **React-Toastify** to show notifications when users:

- Add a technology
- Try to add a duplicate technology
- Remove a technology
- Remove all technologies

A loading state is also displayed while the technology JSON data is being loaded.

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

---

## 📱 Responsive Design

The website is designed to work across:

- 📱 Mobile devices
- 📟 Tablet devices
- 💻 Desktop devices

The technology cards use a responsive layout:

- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

The **Your Stack** section also changes its position based on the screen size.
---

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React code easier to write and understand because we can create UI elements in a simple way.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store data that can change inside a component.

### 3. What does useState do, and where did you use it in this project?

`useState` is a React Hook used to create and update state.

I used it to store the technologies, selected stack, loading state, and mobile menu state.

### 4. What does useEffect do, and why was it needed to load JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to load the technology data from the JSON file when the component loads.

### 5. Why does every item in .map() need a unique key prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the **Your Stack** section. When the stack is empty, it shows a message saying that no technologies have been added. When technologies are added, it shows the selected technologies instead.

### 7. How do you pass data from parent to child, and child to parent?

Data can be passed from parent to child using **props**.

In this project, `TechSection` passes technology data and functions to `TechnologyCard`.
For child to parent communication, the parent passes a function to the child. The child calls that function and sends the required data back to the parent.
