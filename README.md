# Telegraf-Start-Parts [![Build Status](https://travis-ci.org/TiagoDanin/Telegraf-Start-Parts.svg?branch=master)](https://travis-ci.org/TiagoDanin/Telegraf-Start-Parts)

Command /start parameters parser middleware for Telegraf

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command line tools.

```sh
npm install telegraf-start-parts --save
```

## Usage

### Code

```javascript
const telegrafStart = require('telegraf-start-parts')
bot.use((ctx, next) => telegrafStart(ctx, next))
```

### Example

Input: `/start help` or `https://telegram.me/youbot?start=help`
Output: `/help`

Input: `/start help-bot` or `https://telegram.me/youbot?start=help-bot`
Output: `/help bot`

## Dependencies

None

## Dev Dependencies

None

## License

MIT
