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
/**
 * @file
 * Initializes foundation's JavaScript.
 *
 */
(function ($, Drupal, once) {

  /**
   * Initializes foundation's JavaScript for new content added to the page.
   */
  Drupal.behaviors.foundationInit = {
    attach: function (context, settings) {
      $(context).foundation();
    }
  };

  /**
   * Dismisses a callout (e.g. a status message) without Motion UI.
   */
  Drupal.behaviors.calloutDismiss = {
    attach: function (context, settings) {
      once('callout-dismiss', '.zurb-foundation-callout[data-closable]', context).forEach(function (el) {
        $(el).find('[data-close]').on('click.callout', function (e) {
          e.stopPropagation();
          $(el).fadeOut(function () {
            // Fire closed.zf event to trigger Zurb theme's cleanup behavior.
            $(el).trigger('closed.zf');
          });
        });
      });
    }
  };

})(jQuery, Drupal, once);
