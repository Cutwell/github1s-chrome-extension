// access tabPreference options
var tabPreference;

chrome.storage.sync.get({
    tabPreference: 'new_tab',
}, function (items) {
    tabPreference = items.tabPreference;

    // callback
    composeDOM();
});


function composeDOM() {
    // contruct the additional button
    const a_element = document.createElement('a');

    a_element.classList.add("github1s")

    let a_text = document.createTextNode("Open in GitHub1s");
    a_element.appendChild(a_text);

    if (tabPreference == "current_tab") {
        // add onclick redirect in current tab
        a_element.onclick = function() {
            window.location.href = window.location.href.replace(
                "github.com",
                "github1s.com"
            );
        }
    }
    else if (tabPreference == "new_tab") {
        // add onclick open in new tab
        a_element.onclick = function() {
            window.open(
                window.location.href.replace(
                    "github.com",
                    "github1s.com"
                ),
                "_blank"
            );
        }
    }

    // insert into DOM //
    // locate file navigation
    let nav = document.getElementsByClassName("file-navigation")[0];

    // insert element
    if (nav !== undefined) {
        nav.append(a_element);
    }
}

