# TaskFlow Beginner

A simple React-based task management app for beginners. Easily add, complete, and delete tasks, with persistent storage and a daily motivational quote.

## Features

- Add new tasks
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by status (All, Completed, Pending)
- Tasks are saved in localStorage
- Fetches and displays a random quote from an API
- Responsive, modern UI

## Technologies Used

- React
- Vite
- CSS (Flexbox, gradients, card layouts)
- UUID for unique task IDs
- Bootstrap Icons (optional)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/codebyravi7/taskflow-beginner.git
   cd taskflow-beginner
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
capstone-ravi/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ShowTasks.jsx
│   │   ├── ShowTasks.css
│   │   ├── TaskForm.jsx
│   │   ├── TaskForm.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
├── package.json
├── vite.config.js
├── README.md
```

## Customization

- Change the quote API URL in `App.jsx` to use your preferred quote source.
- Update styles in CSS files for your own look and feel.

## License

MIT

---

Made with ❤️ by Ravi
