FROM node:13.8
COPY package.json /package.json
COPY package-lock.json /package-lock.json
RUN npm install
COPY . /
RUN npm run build
RUN npm install -g serve
CMD ["serve", "dist"]
