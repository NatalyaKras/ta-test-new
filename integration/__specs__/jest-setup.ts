/* eslint-disable prettier/prettier */
/* eslint-disable import/first */

// react testing library component debug max lines
// https://testing-library.com/docs/dom-testing-library/api-debugging/#automatic-logging
process.env.DEBUG_PRINT_LIMIT = '200000';

import 'whatwg-fetch';
import '@Utils/dotenv';
import '@Utils/logger/logger';
import '@Utils/domExtensions';
import React from 'react';

global.React = React;

jest.setTimeout(30000);
