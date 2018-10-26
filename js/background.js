/*
    Copyright 2018 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

// This listener is called when the user clicks the extension icon.

// If the current URL matches a Jupyter notebook hosted on github.com
// or on gist.github.com, this function will open a new tab and load
// the notebook into Colab.

chrome.browserAction.onClicked.addListener(function(tab) {
  const colab_url = 'https://colab.research.google.com/';
  const github = /^https?:\/\/github\.com\/(.+)\/(.*\.ipynb)$/;
  const gist =
      /^https?:\/\/gist\.github\.com\/(.+)\/([a-f0-9]+(?:\#file\-.*\-ipynb)?)$/;

  let path, url = null;

  if (github.test(tab.url)) {
    path = github.exec(tab.url);
    url = colab_url + ['github', path[1], path[2]].join('/');
  } else if (gist.test(tab.url)) {
    path = gist.exec(page.url);
    url = colab_url + ['gist', path[1], path[2]].join('/');
  }

  if (url) {
    chrome.tabs.create({'url': url});
  } else {
    alert('Current page is not recognized as a github-hosted notebook');
  }
});
