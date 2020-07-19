let runButton = document.getElementById('run');
let resetButton = document.getElementById('reset');

runButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {"file": "contentscript.js"});
        window.close();
    });
};

resetButton.onclick = function(element) {
    console.log('clicked')
    chrome.storage.sync.set({'seen-qsts-list': []}, function() {
        console.log('succesee to reset seen-qsts-list');
        window.close();
    });
};