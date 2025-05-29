
# Deploying to Firebase Hosting

1. Install Firebase CLI:
   npm install -g firebase-tools

2. Login and initialize (if not already done):
   firebase login
   firebase init

   - Choose **Hosting** and **Functions (if prompted)**.
   - Select **Configure as a Next.js app** when asked.

3. Build and deploy:
   npm run build
   firebase deploy

Ensure you set EMAIL_USER and EMAIL_PASS in Firebase functions config:
firebase functions:config:set email.user="your@email"
firebase functions:config:set email.pass="yourpass"
