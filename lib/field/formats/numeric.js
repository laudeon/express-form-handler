/**
 * @licence MIT
 * @author Louis Audeon <louis.audeon@mail.be>
 */
'use strict'

const util = require('util')
const validator = require('validator')
const Fieldformat = require('./../fieldformat')

function Numericformat () {
  Fieldformat.call(this)
  this.name = 'numeric'
  this.error = null
}

util.inherits(Numericformat, Fieldformat)

Numericformat.prototype.check = function (field) {
  if (!validator.isNumeric(field.value + '')) {
    this.error = `The field ${field.label} must contain only numbers`
    return false
  }

  return true
}

module.exports = exports = Numericformat
