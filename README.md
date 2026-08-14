# SkillPath — Full Task-Based Learning Platform

A production-oriented MVP foundation for a task-based education platform.

## Features included

### Student
- Registration / login
- 20-question career assessment
- Career profile and score breakdown
- Personalized course recommendations
- Course → module → lesson → task flow
- Task types: quiz, text, link, file, project
- Task submissions and attempts
- Sequential task unlocking
- AI-style rubric evaluation endpoint
- XP, streak and progress tracking
- Certificate generation endpoint/page
- AI doubt solver endpoint (text)
- Student dashboard
- Course catalog

### Admin
- Admin dashboard
- Course creation
- Module/lesson/task content structure
- Task builder
- Rubric builder
- Publish/unpublish tasks
- Course publishing
- Student progress view
- Certificate verification
- Seed/demo content

### Business-ready extension points
- Payments
- Subscriptions
- EMI
- Referral rewards
- Gamification
- File storage
- Email notifications
- Human review
- AI voice integration
- Finance/service products

## Technology
- Next.js 15
- React 19
- TypeScript
- MongoDB / MongoDB Atlas
- Mongoose
- JWT
- OpenAI API (optional; demo fallback included)
- Plain CSS for easy deployment

## Run

1. Install Node.js 20+.
2. Create MongoDB Atlas database.
3. Copy `.env.example` to `.env.local`.
4. Run:

```bash
npm install
npm run seed
npm run dev
```

Open:
http://localhost:3000

Demo admin:
- Email: admin@skillpath.local
- Password: Admin@12345

Demo student:
- Email: student@skillpath.local
- Password: Student@12345

Change these credentials before production.

## Important
This is a complete MVP codebase, not a claim of a production-certified deployment. Before accepting real payments or sensitive documents, add a payment provider, object storage, rate limiting, security headers, password hashing such as Argon2/bcrypt, audit logs, backups, email verification, and human review for consequential AI decisions.
