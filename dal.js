const {
    filter,
    compose,
    map,
    reject,
    append
} = require('ramda')

var colorsDatabase = [{
    name: 'Red',
    hex: 'FF0000',
}, {
    name: 'Green',
    hex: '008000',
}, {
    name: 'Blue',
    hex: '0000FF',
}]

//  COLORS
//  CREATE = POST   /colors        --> createColor(color)
//  READ   = GET    /colors/:name  --> getColor(name)
//  UPDATE = PUT    /colors/:name  --> updateColor(name)
//  DELETE = DELETE /colors/:name  --> deleteColor(name)
//  LIST   = GET    /colors        --> listColors()

// CREATE
function createColor(color) {
    colorsDatabase.push(color)
    return {
        "ok": true,
        "name": color.name
    }
}

// READ
function getColor(name) {
    return compose(
        filter(c => c.name === name)
    )(colorsDatabase)
}

// DELETE
function deleteColor(name) {
    colorsDatabase = reject(c => c.id === name, personsDatabase)
    return {
        ok: true,
        id: color
    }
}

// LIST
function listColors() {
    return colorsDatabase
}

var dal = {
  createColor: createColor,
  getColor: getColor,
  listColors: listColors
}

module.exports = dal
