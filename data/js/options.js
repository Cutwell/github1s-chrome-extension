// Saves options to chrome.storage
function save_options() {
    var tab_preference = document.getElementById('tab_preference').value;
    chrome.storage.sync.set({
        tabPreference: tab_preference,
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value tab_preference = new_tab
    chrome.storage.sync.get({
        tabPreference: 'new_tab',
    }, function (items) {
        document.getElementById('tab_preference').value = items.tabPreference;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);