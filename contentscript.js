
var currentUrl = location.href
console.log('current url: ' + currentUrl);
chrome.storage.sync.get(['seen-qsts-list'], function(data) {
    let seenQsts = data['seen-qsts-list']
    console.log(data)
    console.log(seenQsts)
    if(!seenQsts || !seenQsts.includes(currentUrl)) {
        seenQsts.push(currentUrl)
    }
    console.log('new seen qsts: ' + seenQsts)
    chrome.storage.sync.set({'seen-qsts-list': seenQsts}, function() {
        console.log('succesee to set new seen-qsts-list');
    });
    let reletedQsts = document.querySelectorAll('div.q-box div a.q-box.qu-display--block.qu-cursor--pointer.qu-hover--textDecoration--none')
    for (let i = 3; i < reletedQsts.length; i++) {
        let Qst = reletedQsts[i]
        console.log(Qst.href);
        if(!!seenQsts && seenQsts.includes(Qst.href)) {
            textElement = Qst.getElementsByClassName("q-box qu-userSelect--text")[0]
            textElement.style.color = "#FF00FF"
            console.log("seen");
        }
    }
});