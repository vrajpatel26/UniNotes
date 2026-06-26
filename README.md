# 📚 UniNotes - Study Smarter

UniNotes is a MERN Stack-based platform that helps students access organized study materials semester-wise, subject-wise, and unit-wise. The platform allows administrators to manage academic content efficiently while providing students with a simple and user-friendly learning experience.

---

## 📸 Project Preview

### Home Page
<img width="1896" height="907" alt="image" src="https://github.com/user-attachments/assets/74370e05-bd8f-4472-aaf1-d1ca3ce4dae9" />

### Semester Page
<img width="1888" height="897" alt="image" src="https://github.com/user-attachments/assets/361b9892-fee1-4a1c-9538-bf9360f64e7f" />

### Subject Page
<img width="1887" height="898" alt="image" src="https://github.com/user-attachments/assets/9e2c5594-8189-4688-9d13-d098fa37e188" />

### Unit Page
<img width="1891" height="897" alt="image" src="https://github.com/user-attachments/assets/868f32e7-de59-477c-9b73-a557db4b3339" />

### Note Page
<img width="1893" height="871" alt="image" src="https://github.com/user-attachments/assets/2d3f3e75-3f53-44be-a5b2-f56e58ddcb13" />

### Login Page
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/2c150fa5-03d4-46fd-8eb7-0086f2b0b1c5" /> 

### Signup Page
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/2e5a70df-0569-454f-ac15-2440a074ffbf" />

### Profile Page
<img width="1890" height="897" alt="image" src="https://github.com/user-attachments/assets/df3cd086-e467-4955-a61d-d260a9a93cc5" />

### Admin Dashboard Page
<img width="1887" height="897" alt="image" src="https://github.com/user-attachments/assets/850327c9-8fe5-42a4-8ba8-0d12319e338a" />



## 🚀 Features

### 👨‍🎓 User Features

* User Registration & Login
* Browse Notes Without Authentication
* View Notes Semester-wise
* Subject-wise and Unit-wise Navigation
* Open PDF Notes Directly
* Search Functionality
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
  
LinkedIn: https://www.linkedin.com/in/vraj-patel-3b94542a4/

---

## ⭐ Support

If you found this project helpful, consider giving it a star on GitHub.
