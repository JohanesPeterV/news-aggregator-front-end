FROM node:18-alpine

WORKDIR /user/src/app

COPY . . 


RUN yarn install --production

RUN yarn run build

CMD ["yarn", "run","start"]
