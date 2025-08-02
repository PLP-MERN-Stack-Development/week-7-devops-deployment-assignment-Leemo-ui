# 🚀 Week 7: Deployment and DevOps Essentials – Launching Your MERN App

## 🚀 Objective
Learn how to deploy a full MERN stack application to production, implement CI/CD pipelines, configure environment variables, and set up monitoring for your application.

## 📂 Tasks

### Task 1: Preparing the Application for Deployment

#### 1. Optimize your React application for production
- **Run build process:**  
  In your frontend directory, run `npm run build` (or `yarn build`). This generates optimized static assets in the `dist/` or `build/` folder.
- **Implement code splitting:**  
  Use `React.lazy` and `Suspense` for dynamic imports in your routes/components.  
  ```jsx
  // Example:
  const Home = React.lazy(() => import('./pages/Home'));
  ```
- **Configure environment variables:**  
  Create `.env.production` and `.env.development` in your frontend.  
  ```
  VITE_API_URL=https://your-backend-url/api
  ```
  Access with `import.meta.env.VITE_API_URL` in your React code.

#### 2. Prepare your Express.js backend for production
- **Implement proper error handling:**  
  Add centralized error middleware in your Express app:
  ```js
  // At the end of your routes
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
  ```
- **Set up secure HTTP headers:**  
  Use `helmet`:
  ```js
  const helmet = require('helmet');
  app.use(helmet());
  ```
- **Configure environment variables:**  
  Use a `.env` file and `process.env` for sensitive config (e.g., `MONGODB_URI`, `JWT_SECRET`, `PORT`).
- **Implement logging for production:**  
  Use `morgan` for HTTP request logging:
  ```js
  const morgan = require('morgan');
  app.use(morgan('combined'));
  ```

#### 3. Create a production-ready MongoDB setup
- **Set up a MongoDB Atlas cluster:**  
  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create a cluster, and get your connection string.
- **Configure proper database user permissions:**  
  Create a database user with only necessary privileges (readWrite on your DB).
- **Implement database connection pooling:**  
  Mongoose uses pooling by default. You can configure pool size:
  ```js
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10 // adjust as needed
  });
  ```

---

**Checklist:**
- [x] React app builds and uses code splitting
- [x] Environment variables set for frontend/backend
- [x] Express uses error handling, helmet, morgan
- [x] MongoDB Atlas cluster with secure user and pooling

### Task 2: Deploying the Backend
- Deploy your Express.js backend to a cloud platform (Render, Railway, or Heroku)
  - Set up a new project/application
  - Configure environment variables
  - Set up continuous deployment from GitHub
- Configure a custom domain (optional)
- Implement HTTPS with SSL/TLS certificate
- Set up server monitoring and logging

### Task 3: Deploying the Frontend
- Deploy your React frontend to a static hosting service (Vercel, Netlify, or GitHub Pages)
  - Configure build settings
  - Set up environment variables
  - Configure continuous deployment from GitHub
- Set up a custom domain (optional)
- Configure HTTPS
- Implement caching strategies for static assets

### Task 4: CI/CD Pipeline Setup
- Set up GitHub Actions for continuous integration
  - Create workflows for running tests
  - Configure linting and code quality checks
  - Implement automated building of the application
- Implement continuous deployment
  - Configure automatic deployment on successful builds
  - Set up staging and production environments
  - Implement rollback strategies

### Task 5: Monitoring and Maintenance
- Set up application monitoring
  - Implement health check endpoints
  - Configure uptime monitoring
  - Set up error tracking (e.g., Sentry)
- Implement performance monitoring
  - Set up server resource monitoring
  - Configure API performance tracking
  - Implement frontend performance monitoring
- Create a maintenance plan
  - Schedule regular updates and patches
  - Plan for database backups
  - Document deployment and rollback procedures

## 🧪 Expected Outcome
- A fully deployed MERN stack application accessible on the internet
- Continuous integration and deployment pipelines
- Proper environment configuration for development, staging, and production
- Monitoring and logging setup for the application
- Documentation of the deployment process and maintenance procedures

## 🛠️ Setup
1. Make sure you have a completed MERN stack application from previous weeks
2. Create accounts on the following services:
   - GitHub (for source code and CI/CD)
   - MongoDB Atlas (for database hosting)
   - Render, Railway, or Heroku (for backend hosting)
   - Vercel, Netlify, or GitHub Pages (for frontend hosting)
3. Install any required CLI tools for the chosen platforms

## ✅ Submission Instructions
1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Complete all the tasks in the assignment
4. Commit and push your code regularly to show progress
5. Include in your repository:
   - The complete MERN stack application code
   - CI/CD configuration files
   - Environment variable templates (.env.example)
   - Deployment scripts and configuration
   - A comprehensive README.md with deployment instructions
6. Update your README.md with:
   - URL of the deployed frontend application
   - URL of the deployed backend API
   - Screenshots of your CI/CD pipeline in action
   - Documentation of your monitoring setup
7. Your submission will be automatically graded based on the criteria in the autograding configuration
8. The instructor will review your submission after the autograding is complete