$(function(){"use strict";$(document).on("click.qor.alert",'[data-dismiss="alert"]',function(){$(this).closest(".qor-alert").remove()}),setTimeout(function(){$('.qor-alert[data-dismissible="true"]').remove()},5e3)}),$(function(){"use strict";$(document).on("click.qor.confirm","[data-confirm]",function(e){var t,a=$(this),o=a.data();o.confirm&&(window.confirm(o.confirm)?/DELETE/i.test(o.method)&&(e.preventDefault(),t=o.url||a.attr("href"),o=$.extend({},o,{_method:"DELETE"}),$.post(t,o,function(){window.location.reload()})):e.preventDefault())})}),$(function(){"use strict";var e=$(".qor-page__body > .qor-form-container > form");$(".qor-error > li > label").each(function(){var t=$(this),a=t.attr("for");a&&e.find("#"+a).closest(".qor-field").addClass("is-error").append(t.clone().addClass("qor-field__error"))})}),$(function(){"use strict";$(".qor-menu-container").on("click","> ul > li > a",function(){var e=$(this),t=e.parent(),a=e.next("ul");a.length&&(a.hasClass("in")?(t.removeClass("is-expanded"),a.one("transitionend",function(){a.removeClass("collapsing in")}).addClass("collapsing").height(0)):(t.addClass("is-expanded"),a.one("transitionend",function(){a.removeClass("collapsing")}).addClass("collapsing in").height(a.prop("scrollHeight"))))}).find("> ul > li > a").each(function(){var e=$(this),t=e.parent(),a=e.next("ul");a.length&&(t.addClass("has-menu is-expanded"),a.addClass("collapse in").height(a.prop("scrollHeight")))}),$(".qor-page").find(".qor-page__header").size()&&$(".qor-page").addClass("has-header")}),$(function(){"use strict";var e=window.location;$(".qor-search").each(function(){var t=$(this),a=t.find(".qor-search__input"),o=t.find(".qor-search__clear"),s=!!a.val();t.closest(".qor-page__header").addClass("has-search"),o.on("click",function(){a.val()?a.focus().val(""):s?e.search=e.search.replace(new RegExp(a.attr("name")+"\\=?\\w*"),""):t.removeClass("is-dirty")})})}),$(function(){"use strict";$(".qor-js-table .qor-table__content").each(function(){var e=$(this),t=e.width(),a=e.parent().width();t>=180&&a>t&&e.css("max-width",a)}),$(".qor-js-table tbody").find("tr").size()>6&&$("td > .qor-button--actions").on("mouseover",function(){var e=$(this),t=e.closest("table").height(),a=e.closest("td").position().top,o=e.closest("td").find(".mdl-menu"),s=a+o.outerHeight()>.8*t,r="mdl-menu--top-right",i="mdl-menu--bottom-right";if(s){if(e.hasClass(r))return;o.removeClass(i).addClass(r)}else{if(e.hasClass(i))return;o.removeClass(r).addClass(i)}}),$(".qor-datetime-picker").materialDatePicker({format:"YYYY-MM-DD HH:mm"}),$(".qor-date-picker").materialDatePicker({format:"YYYY-MM-DD",time:!1})});