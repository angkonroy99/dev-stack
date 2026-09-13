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

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/angkonroy99/dev-stack.git