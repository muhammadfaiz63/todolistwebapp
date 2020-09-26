# pull official base image
FROM node:12.16.1

ARG API_URL
# set working directory
WORKDIR /src/app

ENV API_URL=${API_URL}\ CUSTOM_KEY=""

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --only=production
RUN npm run build --only=production

# add app
COPY . .
EXPOSE 3000

# start app
CMD ["npm", "run" , "build"]