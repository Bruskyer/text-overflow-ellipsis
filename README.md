# text-overflow-ellipsis
jQuery plugin for adding ellipsis to the end of a multi-line string of text, with additional "view more" animation to open/close on click.

#Setup
* jQuery: text-overflow-ellipsis should work with most newer versions of jQuery, Have not tested how far back it is supported
* text-overflow-ellipsis.js: Runs as a jQuery plugin. 
* Call the $.textOverflowEllipsis() plugin. 

  $(function(){
    $("[data-lines]").each(function(){$(this).textOverflowEllipsis()});
  });

#HTML
There are minor requirements for having the text-overflow-ellipsis work correctly:

* Parent container/div, with a data-lines="xx" attribute for how many lines to show
* Inner block level element with class "full"
* <div class="short"></div> immediately following the .full element
* If the "view more" is desired, add <div class="view-more js-view-more">View More</div> immediately after the parent element

  <div class="short-description js-ellipsis" data-lines="4">
    <div class="full">Has attribute data-lines="4". We have a lot of text here, but we want it to overflow correctly. We want to cut off the text at a specific line using the "data-lines='xx'" attribute, so we have the option of 1 to however many lines of text desired. Also added in a specific "view more" link that animates the full text in on click, sliding down or back up depending on if it is open or not already. Now I'm just adding in more text, la di dadi.</div>
    <div class="short"></div>
    
  </div>
  <div class="view-more js-view-more">View More</div>