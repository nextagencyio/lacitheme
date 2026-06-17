/**
 * This file is part of LACI.
 *
 * LACI is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * LACI is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with LACI.
 * If not, see <https://www.gnu.org/licenses/>.
 *
 * Copyright 2023-2026, Lone Star Legal Aid
 */
// Override gulp options here rather than in gulpfile.js.

// Set a drush alias if required to run locally, i.e.:
// '@multisite.local --uri=multisitename'
var drush_alias = '';

module.exports = {
  // set 'enabled: true' to run drush commands as a part of 'gulp watch'.
  drush: {
    enabled: false,
    alias: {
      css_js: 'drush ' + drush_alias + ' cc css-js',
      cr: 'drush ' + drush_alias + ' cr'
    }
  },

  // Override sass compile options.
  /*
  scss: {
    outputStyle: 'expanded',
    lintIgnore: '',
  },
  */

  // If your files are on a network share, you may want to turn on polling for
  // Gulp watch. Since polling is less efficient, we disable polling by default.
  /*
  gulpWatchOptions: {
    interval: 1000,
    mode: 'poll'
  },
  */

};
