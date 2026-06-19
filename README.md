# 📚 UniNotes - Study Smarter

UniNotes is a MERN Stack-based platform that helps students access organized study materials semester-wise, subject-wise, and unit-wise. The platform allows administrators to manage academic content efficiently while providing students with a simple and user-friendly learning experience.

---

## 🚀 Features

### 👨‍🎓 User Features

* User Registration & Login
* Browse Notes Without Authentication
* View Notes Semester-wise
* Subject-wise and Unit-wise Navigation
* Open PDF Notes Directly
* Bookmark Favorite Notes
* View Saved Notes in Profile
* Responsive Design for Mobile & Desktop

### 👨‍💼 Admin Features

* Create, Update, and Delete Semesters
* Create, Update, and Delete Subjects
* Upload Subject Images
* Create, Update, and Delete Units
* Upload PDF Notes
* Update Note Information
* Delete Notes
* Manage Academic Content Efficiently

### ☁️ Cloudinary Integration

* Subject Images Stored in Cloudinary
* PDF Notes Stored in Cloudinary
* Automatic Cloudinary Cleanup on Delete
* Subject Image Replacement Support

### 🔒 Authentication & Security

* JWT Authentication
* Protected Routes
* Role-Based Access Control
* Secure API Endpoints

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Hot Toast
* SweetAlert2
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary

### Database

* MongoDB Atlas

---

## 📂 Project Structure

```bash
UniNotes/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
└── README.md
```

---

## 📸 Main Modules

### Semester Management

* Create Semester
* Edit Semester
* Delete Semester

### Subject Management

* Create Subject with Image
* Update Subject Details
* Update Subject Image
* Delete Subject

### Unit Management

* Create Unit
* Edit Unit
* Delete Unit

### Notes Management

* Upload PDF Notes
* Edit Note Details
* Delete Notes
* View Notes

### Bookmark System

* Save Notes
* Remove Saved Notes
* View Saved Notes in Profile

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/uninotes.git
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=9000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🎯 Future Improvements

* Search Functionality
* Review & Rating System
* Note Download Analytics
* AI-Based Note Recommendations
* Dark/Light Theme Toggle

---

## 👨‍💻 Author

**Vraj Patel**

* MERN Stack Developer
* Computer Engineering Student
* Passionate about Full Stack Development

---

## 📄 License

This project is created for educational and portfolio purposes.
