rm -rf node_modules && npm cache clean && npm install && npm test

npm build ;
# npm start ;

yarn ; 
yarn autoclean --force;
yarn run lint:eslint;
yarn run lint:fix;
yarn run lint:hbs;
yarn run lint:js;
yarn run lint:tsc;
yarn run lint:tslint;

yarn run build --production;
yarn run build;

yarn run pretest;
yarn run test:ember;
yarn run test;

yarn run start

