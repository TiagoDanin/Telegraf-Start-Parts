var telegrafStart = require('./index.js')
var assert = require('assert')

var next = (ctx) => ctx
var ctx = {
	update: {
		message: {
			text : ''
		}
	}
}

console.log('[+] Executing tests')
ctx.update.message.text = '/start help'
assert.equal(telegrafStart(ctx, next).update.message.text, '/help')
console.log('[+] 50% OK')
ctx.update.message.text = '/start help-bot'
assert.equal(telegrafStart(ctx, next).update.message.text, '/help bot')
console.log('[+] 100% OK')
