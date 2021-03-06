/**
 * @licence MIT
 * @author Louis Audeon <louis.audeon@mail.be>
 */
'use strict'

const util = require('util')
const validator = require('validator')
const Fieldformat = require('./../fieldformat')

function URLformat () {
  Fieldformat.call(this)
  this.name = 'url'
  this.error = null
}

util.inherits(URLformat, Fieldformat)

URLformat.prototype.check = function (field) {
  if (!validator.isURL(field.value + '')) {
    this.error = `The field ${field.label} must be an URL`
    return false
  }

  return true
}

module.exports = exports = URLformat
