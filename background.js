



/**
 * Create Parent search item
 */
var parent_properties = {
  id: "look_up_in_parent",
  title: "Look up in",
  contexts: ["selection", "link", "image"]
};
chrome.contextMenus.create(parent_properties, function(){
  // Just a callback after creation.
  // Check for errors.
  if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
  }  
});



/**
 * Create Google Text Search item
 */
function GoogleSelectClick(info, tab){
  var search_string = info.selectionText;
  if (!search_string){
    search_string = info.linkUrl;
  }
  chrome.tabs.create({url: "https://www.google.com/search?q=" + search_string});
}
var child_properties = {
  id: "google_select_child",
  title: "Google",
  contexts: ["selection", "link"],
  parentId: "look_up_in_parent",
  onclick: GoogleSelectClick
};
chrome.contextMenus.create(child_properties, function(){
  // Just a callback after creation.
  // Check for errors.
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});



/**
 * Create Google Text to Image search item
 */
function GoogleSelectImageClick(info, tab){
  var search_string = info.selectionText;
  if (!search_string){
    search_string = info.linkUrl;
  }
  chrome.tabs.create({url: "https://www.google.com/search?tbm=isch&q=" + search_string});
}
child_properties = {
  id: "google_image_child",
  title: "Google Image",
  contexts: ["selection", "link"],
  parentId: "look_up_in_parent",
  onclick: GoogleSelectImageClick
};
chrome.contextMenus.create(child_properties, function(){
  // Just a callback after creation.
  // Check for errors.
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});




/**
 * Create Google Reverse Image search item
 */
function GoogleImageClick(info, tab){
  var search_string = info.srcUrl;
  if (!search_string)
    alert("Url Cannot be found");
  else
    chrome.tabs.create({url: "https://www.google.com/searchbyimage?&site=search&image_url=" + search_string});
}
child_properties = {
  id: "google_reverse_image_child",
  title: "Google Image",
  contexts: ["image"],
  parentId: "look_up_in_parent",
  onclick: GoogleImageClick
};
chrome.contextMenus.create(child_properties, function(){
  // Just a callback after creation.
  // Check for errors.
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});




/**
 * Create Vocabulary Dictionary Search item
 */
function VocabClick(info, tab){
  var search_string = info.selectionText;
  // link
  chrome.tabs.create({url: "https://www.vocabulary.com/dictionary/" + search_string});
}
var child_properties = {
  id: "vocab_child",
  title: "Vocabulary",
  contexts: ["selection"],
  parentId: "look_up_in_parent",
  onclick: VocabClick
};
chrome.contextMenus.create(child_properties, function(){
  // Just a callback after creation.
  // Check for errors.
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});


