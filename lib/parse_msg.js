/*
 * lib/util.js
 */

'use strict';

var C = require('./constants');
var colors = require('colors')
var EOL = '\0';

// this function search the key (i.e. the word description)
//   using the msg values from TWS
//  the constantsObject are INCOMING, OUTGOING
function _findKeyForMsgValue(constantsObject, magValue) {
  for (var key in constantsObject) {
    if (constantsObject[key] === msgValue) {
      return key;
    }
  }
}


/// Parsing String to Client coming from TWS server
function incomingToString(incoming) {
  return _findKeyForMsgValue(C.INCOMING, incoming);
}

function numberToString(number) {
  if (number === Number.MAX_VALUE) {
    return 'MAX';
  } else if (number === Number.MIN_VALUE) {
    return 'MIN';
  } else {
    return number.toString();
  }
}


//// Parsing outgoing string to TWS
function outgoingToString(outgoing) {
  return _findKeyForValue(C.OUTGOING, outgoing);
}

function tickTypeToString(tickType) {
  return _findKeyForValue(C.TICK_TYPE, tickType);
}

// Public API
exports.incomingToString = incomingToString;
exports.numberToString = numberToString;
exports.outgoingToString = outgoingToString;
exports.tickTypeToString = tickTypeToString;


function parseTWStoClientMsg(data) {
  console.log("Raw Data from server ... " + data)
  // addedb by Phage
  console.log(Array.isArray(data));
  console.log(data instanceof String);
  var tokens = data.toString().split(EOL).slice(0, -1);
  console.log("...convert to tokens " + tokens)
  console.log(Array.isArray(tokens));
  console.log(tokens[2]);

  parseManagedAcct(tokens);


}

function parseManagedAcct (tokens) {
  console.log(
    '%s %s',
    '[Acount Number]'.cyan,
    tokens[2]
  )
}

exports.parseTWStoClientMsg = parseTWStoClientMsg;
