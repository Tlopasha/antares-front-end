var path = './../../../';

// EXTERNAL DEPS:
require('script-loader!gridstack');
// require('script-loader!slick-carousel'); // not needed, i guess
// APP COMPONENTS:
var List = require('list.js');
window.List = List;

require('./../../../js/antares_gridstack.js');

import zeroData from './../../../js/components/zero_data/zero_data';
zeroData.gridstack();
