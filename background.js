

var onClickSelection = function(info){
  
  //if(info === "Google"){
  //  alert("Google");
  //}
  console.log("Clicked on the addon");
  
};


var parent_properties = {
  id: "look_up_in_parent",
  title: "Look up in",
  contexts: ["selection", "image", "video", "link"],
  onclick: onClickSelection
};

var child_properties = {
  id: "google_child",
  title: "Google",
  contexts: ["selection"],
  parentId: "look_up_in_parent",
  onclick: onClickSelection
};


chrome.contextMenus.create(parent_properties, function(){
  // Just a callback after creation.
  
  
  // Check or errors.
  
});

chrome.contextMenus.create(child_properties, function(){
  // Just a callback after creation.
  
  
  // Check or errors.
  
});

