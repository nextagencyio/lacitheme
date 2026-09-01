/**
 * This file is part of LACI.
 *
 * LACI is free software: you can redistribute it and/or modify it under the
 * terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 *
 * See <https://www.gnu.org/licenses/> for details.
 */

/**
 * @file
 * Makes the documents table's "dots" actions menu usable.
 *
 * laci_core's documentsViewActions.js binds the click that opens the menu.
 * This adds what that leaves out, without duplicating the toggle:
 *
 *  - Keyboard access. The trigger is an <a> with no href, so it is not
 *    focusable and cannot be operated without a mouse at all.
 *  - Closing. Nothing closed an open menu — not clicking elsewhere, not
 *    Escape, not opening a different row's menu. Several could sit open at
 *    once, overlapping the rows beneath them.
 *  - aria state, so the control announces as a menu button.
 */
(function (Drupal, once) {
  'use strict';

  function menuOf(trigger) {
    return trigger.parentNode
      ? trigger.parentNode.querySelector('.action-items')
      : null;
  }

  function isOpen(menu) {
    return !!menu && window.getComputedStyle(menu).display !== 'none';
  }

  function close(menu, trigger) {
    if (!menu) {
      return;
    }
    menu.style.display = 'none';
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  }

  function closeAll(except) {
    document.querySelectorAll('table.cols-7 a.dots').forEach(function (t) {
      if (t !== except) {
        close(menuOf(t), t);
      }
    });
  }

  Drupal.behaviors.lacithemeActionsMenu = {
    attach: function (context) {
      var triggers = once(
        'lacitheme-actions-menu',
        'table.cols-7 a.dots',
        context
      );

      triggers.forEach(function (trigger) {
        // Without href the anchor is inert to the keyboard. Give it button
        // semantics rather than a fake href, which would add a history entry.
        trigger.setAttribute('tabindex', '0');
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        if (!trigger.getAttribute('aria-label')) {
          trigger.setAttribute('aria-label', Drupal.t('Row actions'));
        }

        // Only one menu open at a time. Runs before laci_core's own click
        // handler flips this row, so the row being opened is left alone.
        trigger.addEventListener('mousedown', function () {
          closeAll(trigger);
        });

        trigger.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
            // Delegate to the existing click handler instead of toggling
            // here — two toggles in one gesture cancel each other out.
            event.preventDefault();
            closeAll(trigger);
            trigger.click();
          }
          else if (event.key === 'Escape') {
            close(menuOf(trigger), trigger);
          }
        });

        // laci_core toggles inline display on click; mirror it into aria
        // afterwards, once that handler has run.
        trigger.addEventListener('click', function () {
          window.setTimeout(function () {
            trigger.setAttribute(
              'aria-expanded',
              isOpen(menuOf(trigger)) ? 'true' : 'false'
            );
          }, 0);
        });
      });

      // Document-level closers, bound once for the page.
      once('lacitheme-actions-menu-dismiss', 'body', context).forEach(function (body) {
        body.addEventListener('mousedown', function (event) {
          if (!event.target.closest('table.cols-7 td.views-field-nothing-3')) {
            closeAll(null);
          }
        });

        body.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            closeAll(null);
          }
        });
      });
    }
  };
})(Drupal, once);
