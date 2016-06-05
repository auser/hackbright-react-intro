const fn = (text) => `Hello ${text}`
const decorator = (fn) => (text) => `<b>${fn(text)}</b>`

fn('world') # 'Hello world'
decorator(fn)('world') # <b>Hello world</b>
