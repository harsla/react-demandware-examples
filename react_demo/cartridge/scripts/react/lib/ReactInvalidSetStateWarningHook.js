/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInvalidSetStateWarningHook
 */

'use strict';

var warning = require('~/cartridge/scripts/fbjs/lib/warning');

if (dw.system.System.getInstanceType() !== dw.system.System.PRODUCTION_SYSTEM) {
  var processingChildContext = false;

  var warnInvalidSetState = function () {
    dw.system.System.getInstanceType() !== dw.system.System.PRODUCTION_SYSTEM ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
  };
}

var ReactInvalidSetStateWarningHook = {
  onBeginProcessingChildContext: function () {
    processingChildContext = true;
  },
  onEndProcessingChildContext: function () {
    processingChildContext = false;
  },
  onSetState: function () {
    warnInvalidSetState();
  }
};

module.exports = ReactInvalidSetStateWarningHook;