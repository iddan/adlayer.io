export const compose = (...funcs) => (value) => funcs.reduce((acc, func) => func(acc), value)
