# SkillPath — Hostinger VPS Deployment

## 1. Upload

Upload this project to your VPS, for example:

/var/www/skillpath

## 2. Install Node.js 20+

Check:

node -v
npm -v

## 3. Install dependencies

cd /var/www/skillpath
npm install

## 4. Create environment file

Create `.env.local`:

MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION
JWT_SECRET=YOUR_LONG_RANDOM_SECRET
OPENAI_API_KEY=YOUR_OPENAI_KEY
OPENAI_MODEL=gpt-5
NEXT_PUBLIC_APP_URL=https://YOUR_DOMAIN.com

## 5. Seed the database

npm run seed

Demo student:
student@skillpath.local
Student@12345

Demo admin:
admin@skillpath.local
Admin@12345

Change these passwords before production.

## 6. Build

npm run build

## 7. Start with PM2

npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup

## 8. Nginx

Copy `nginx-skillpath.conf` to:

/etc/nginx/sites-available/skillpath

Replace YOUR_DOMAIN.com.

Then:

sudo ln -s /etc/nginx/sites-available/skillpath /etc/nginx/sites-enabled/skillpath
sudo nginx -t
sudo systemctl restart nginx

## 9. HTTPS

Install Certbot and run:

sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com

## 10. Test

Open:

https://YOUR_DOMAIN.com

## Production checklist

- Change demo credentials.
- Use a strong JWT_SECRET.
- Restrict MongoDB network access to the server where possible.
- Add real payment provider before accepting payments.
- Add secure object storage before accepting uploads.
- Add rate limiting and stronger password hashing.
- Configure backups and monitoring.
- Never commit `.env.local`.
