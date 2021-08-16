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
    // insert custom css for button //
    // create an element
    const style = document.createElement('style');

    // add CSS styles
    style.innerHTML = `
        .github1s {
            display: block;
            margin-left: 8px;
            background-color: #fafbfc;
            border-color: rgba(27, 31, 35, 0.15)!important;
            box-shadow: rgba(27, 31, 35, 0.04), rgba(255, 255, 255, 0.25);
            color: #24292e;
            transition: .2s cubic-bezier(.3,0,.5,1)!important;
            transition-property: color,background-color,border-color;
            appearance: none;
            border: 1px solid;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            padding: 5px 16px;
            position: relative;
            user-select: none;
            vertical-align: middle;
            white-space: nowrap;
            text-decoration: none!important;
            box-sizing: border-box;
            word-wrap: break-word;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        }
        .github1s:hover {
            background-color: #f3f4f6;
            border-color: rgba(27, 31, 35, 0.15)!important;
            transition-duration: .1s;
            outline-width: 0;
            text-decoration: none;
        }
    `;

    // append to DOM
    document.head.appendChild(style);

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

