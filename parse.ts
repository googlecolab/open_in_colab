/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const COLAB_BASE_URL = 'https://colab.research.google.com/';
const GITHUB_REPO_RE = /^https?:\/\/github\.com\/(.+)\/(.*\.ipynb)(\?.+)?$/;
const GITHUB_GIST_RE =
    /^https?:\/\/gist\.github\.com\/(.+)\/([a-f0-9]+(?:\#file\-.*\-ipynb)?)(\?.+)?$/;

/**
 * Attempt to convert a GitHub notebook URL to a Colab URL.
 *
 * @param githubUrl The GitHub URL to convert.
 *
 * @return For valid GitHub URLs, a link to open the notebook in Colab,
 * otherwise null.
 */
export function githubToColabUrl(githubUrl: string): string|null {
  const repoMatch = GITHUB_REPO_RE.exec(githubUrl);
  if (repoMatch) {
    return COLAB_BASE_URL + ['github', repoMatch[1], repoMatch[2]].join('/');
  }
  const gistMatch = GITHUB_GIST_RE.exec(githubUrl);
  if (gistMatch) {
    return COLAB_BASE_URL + ['gist', gistMatch[1], gistMatch[2]].join('/');
  }
  return null;
}
