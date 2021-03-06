/**
 * @licence MIT
 * @author Louis Audeon <louis.audeon@mail.be>
 */
'use strict'

const util = require('util')
const validator = require('validator')
const Fieldformat = require('./../fieldformat')

function Alphaformat () {
  Fieldformat.call(this)
  this.name = 'alpha'
  this.error = null
}

util.inherits(Alphaformat, Fieldformat)

Alphaformat.prototype.check = function (field) {
  if (!validator.isAlpha(field.value + '')) {
    this.error = `The field ${field.label} must contain only alpha caracters`
    return false
  }

  return true
}

module.exports = exports = Alphaformat
