// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push("new tab"); // let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {
    // Only change code below this line

    var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
    // var tabsAfterIndex = this.tabs.splice(index + 1); // get the tabs after the tab

    // this.tabs = tabsBeforeIndex; // join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]); // Social sites
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); //  Entertainment sites
var workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]); // Your mailbox, drive, and other work sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs[0]);
console.log(finalTabs.tabs[1]);
console.log(finalTabs.tabs[2]);
console.log(finalTabs.tabs[3]);
console.log(finalTabs.tabs[4]);
console.log(finalTabs.tabs[5]);
console.log(finalTabs.tabs[6]);
console.log(finalTabs.tabs[7]);
console.log(finalTabs.tabs[8]);
console.log(finalTabs.tabs[9]);
console.log(finalTabs.tabs[10]);
console.log(finalTabs.tabs[11]);

"FB",
    "Gitter",
    "Reddit",
    "Twitter",
    "Medium",
    "new tab",
    "Netflix",
    "YouTube",
    "Vine",
    "GMail",
    "Work mail",
    "Docs",
    "freeCodeCamp",
    "new tab";
