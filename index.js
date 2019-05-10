$(function() {
  //========ADD TO GROCERY LIST=========
  //targets input + submit
  $("#js-shopping-list-form").submit(event => {
    //prevents default form
    event.preventDefault();
    const userInput = $(this).find("#shopping-list-entry");

    //adding grocery item
    const addItem = $("ul").append(`
  <li>
  <span class="shopping-item">${userInput.val()}</span><div class="shopping-item-controls">
  <button class="shopping-item-toggle">
  <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
  <span class="button-label">delete</span></button>
  </div>
  </li>`);
  });
});
//======================================

//======REMOVE FROM GROCERY LIST======
/* $('.shopping-item-delete').click(function(event) { 
    $(this).closest('li').remove();
  });*/

$("ul").on("click", ".shopping-item-delete", function(event) {
  $(this)
    .closest("li")
    .remove();
});
//======================================

//=======Toggle funtion===============
$("ul").on("click", ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .find(".shopping-item")
    .toggleClass("shopping-item__checked");
});
//==================================*/
