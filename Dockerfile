FROM node:13.8
COPY package.json /package.json
COPY package-lock.json /package-lock.json
COPY src /src
COPY server /server
COPY public /public
COPY build /build
RUN npm install
RUN npm install serve
RUN npm run build
CMD ["serve", "dist"]
