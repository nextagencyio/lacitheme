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
 * Copyright 2023-2024, Lone Star Legal Aid
 */
/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      // alert("I'm alive!");

      // Header -- account management dropdown
      $('.top-bar-right .current-user-info .right-col').on('click',function(){
        $('div.hidden-stuff').toggle();
      });

      // Managing the Content Review block on the document page.
      var globalOustandingChanges = 0;
      $(once('content-review-block','.block-views-blockdocument-content-review-block-1 .views-row .changes-view')).each(function(){
        var numOutstandingChanges = 0;
        $(this).find('.views-row').each(function(){
          numOutstandingChanges = numOutstandingChanges + 1;
        })
        if(numOutstandingChanges > 0) {
          $(this).parents('.views-row').removeClass('authority-row-closed').addClass('reviews-pending');
          $(this).parents('.views-row').find('.views-field-title-1').append('<div class="status-tag"><span>change detected</span></div>');
        } else {
          $(this).parents('.views-row').addClass('no-reviews-pending');
          var lastChecked = $(this).parent().find('.last-checked time').html();
          if(lastChecked == undefined) {
            lastChecked = 'n/a';
          }
          $(this).parents('.views-row').find('.views-field-title-1').append('<div class="status-tag"><span>last checked: ' + lastChecked + '</span></div>');
        }
        globalOustandingChanges = globalOustandingChanges + numOutstandingChanges;
      });
      if(globalOustandingChanges > 0) {
        $('.block-views-blockdocument-content-review-block-1').addClass('needs-review');
      }

      // Open/Close on the Content Review block on the document page.
      $('.block-views-blockdocument-content-review-block-1 .views-field-title-1').on('click',function(){
        $(this).parent().toggleClass('authority-row-closed');
      });

      // Open "show more +" review history items on the document page.
      $('.block-views-blockdocument-content-review-block-1 .log-view footer .show-more').on('click',function(){
        $(this).parent().parent().find('.item-list ul li').show();
        $(this).hide();
      })

      // Managing Authorities Review block on document page.
      var lastOffsiteUpdatedDateUnformatted = $(".views-field-field-documentlastmodified time").attr('datetime');
      var lastOffsiteUpdatedDate = new Date(lastOffsiteUpdatedDateUnformatted);

      var lastAuthoritiesMarkedUnformatted = $(".views-field-field-authsourcelistreviewed time").attr('datetime');
      var lastAuthoritiesMarked = new Date(lastAuthoritiesMarkedUnformatted);

      if(lastOffsiteUpdatedDate <= lastAuthoritiesMarked) {
        // No review necessary
        var authoritiesReviewStatus = 'no-review-needed';
        $('p#needs-review').hide();
        $('.authsource-review-buttons a:last-child').removeClass('inactive').addClass('active');
        $('.block-views-blockresource-authsources-review-block-1').addClass('no-review-necessary');
      } else {
        // Review is necessary
        var authoritiesReviewStatus = 'review-necessary';
        $('p#no-review-needed').hide();
        $('.authsource-review-buttons a:first-child').removeClass('inactive').addClass('active');
        $('.block-views-blockresource-authsources-review-block-1').addClass('needs-review');
      }

      // Open/Close on the Changes block on the Authority Detail page.
      $('.block-views-blockauthority-detail-changes-block-1 .change-row .views-field-title').on('click',function(){
        $(this).parent().toggleClass('change-row-closed');
      })

      // Resources table – 'action items' dropdown
      $('.views-element-container table a.dots').on('click',function(){
        $(this).parent().find('.action-items').toggle();
      });



    }
  };

})(jQuery, Drupal, once);
