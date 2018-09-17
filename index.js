module.exports = function (ctx, next) {
	if (ctx.update && ctx.update.message && ctx.update.message.text) {
		if (ctx.update.message.text.startsWith('/start')) {
			ctx.update.message.text = ctx.update.message.text.replace('start ', '').replace(/-/g, ' ')
		}
	}
	return next(ctx)
}
