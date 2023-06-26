FROM node:18

WORKDIR /app  

COPY . . 


RUN yarn cache clean && yarn install --production

RUN yarn run build

CMD ["yarn", "run","start"]
