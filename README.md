## telegram-bot-typescript-template
Simple telegram bot written in node js with typescript.\
Using [Telegraf.js](https://github.com/telegraf/telegraf)\
You can add handler simply by adding file in to corresponding folder.\
Basic handlers like `command`, `photo` and `action` are provided.
\
\
Since there are extremely few template for node.js using typescript (module import), you can use this for reference.\
Keep in mind:
- use ```"type": "module"``` in package.json
- use .js for importing self-defined file
```js 
  import { ABC } from '../directory/index.js'
```
- use ```ES2020 module```
