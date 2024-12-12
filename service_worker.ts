/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {githubToColabUrl} from './parse';

// This listener is called when the user clicks the extension icon.
//
// If the current URL matches a Jupyter notebook hosted on github.com or on
// gist.github.com, this function will open a new tab and load the notebook into
// Colab.
chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (!tab.url) {
    console.warn('Open in Colab was invoked without a URL.');
    return;
  }
  const colabUrl = githubToColabUrl(tab.url);
  if (!colabUrl) {
    console.warn(`Current page (${
        tab.url}) is not recognized as a GitHub-hosted notebook.`);
    return;
  }
  chrome.tabs.create({'url': colabUrl});
});
