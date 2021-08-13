# github1s-chrome-extension
 Add UI to open GitHub repositories in GitHub1s

* A simple Chrome extension, which should be compatible with any Chromium-based browser(1). 
* Inserts additional UI content into the repository navigation bar, providing a redirect to the [GitHub1s](https://github1s.com/conwnet/github1s) repository-viewer webapp.
* Note: should only insert UI elements on repository pages, but code will attempt to insert into the first  "file-navigation" class element on each github.com domain page, which may cause unexpected UI if this class occurs elsewhere on the website than the repository pages (2).


(1) tested in Opera.

(2) however, no such problems where encountered in testing.

## License
MIT