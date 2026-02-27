# backend/Dockerfile
FROM node:18

WORKDIR /app

# انسخ ملفات package.json و package-lock.json
COPY package*.json ./

# نزل الحزم
RUN npm install

# انسخ كل الكود
COPY . .

# كشف البورت
EXPOSE 5000

# شغل السيرفر
CMD ["npm", "start"]
