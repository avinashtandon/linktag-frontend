# LinkTag

A modern web application for managing and organizing your links with tags.

## 🚀 Features

- **Home Page** - Landing page with main features
- **Search** - Search through your tagged links
- **Tags Management** - Organize links with custom tags
- **User Authentication** - Login system for personalized experience
- **About** - Learn more about LinkTag

## 🛠️ Tech Stack

- **React 19.2** - Modern UI library
- **Vite 7.3** - Fast build tool and dev server
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/avinashtandon/linktag-frontend.git
cd linktag-frontend
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
linktag-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── HomePage.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── Tags.jsx
│   │   ├── Login.jsx
│   │   └── About.jsx
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies

```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.
