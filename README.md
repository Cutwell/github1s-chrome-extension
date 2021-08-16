# github1s-chrome-extension
 Insert UI to open GitHub repositories in GitHub1s

## About
* A simple Chrome extension, which should be compatible with any Chromium-based browser(1). 
* Inserts additional UI content into the repository navigation bar, providing a redirect to the [GitHub1s](https://github1s.com/conwnet/github1s) repository-viewer webapp.
* Note: should only insert UI elements on repository pages, but code will attempt to insert into the first  "file-navigation" class element on each github.com domain page, which may cause unexpected UI if this class occurs elsewhere on the website than the repository pages (2).

(1) tested in Opera.

(2) however, no such problems where encountered in testing.

## Installation
1. Clone this repository onto your device.
2. Navigate to `chrome://extensions/` (replace `chrome` with the name of your Chromium based browser, for instance `opera://extensions/`).
3. Open the file explorer using `Load unpacked` and navigate to the root folder of this repository. 
4. Select this folder, and the extension should load into your list of browser extensions.

## User options
The extension can be configured from `chrome://extensions` using the `options` button on the extension card. Users can select between opening GitHub1s in the current tab (redirect) or opening the website in a new tab.

## License
MIT