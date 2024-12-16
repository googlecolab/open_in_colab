# Open in Colab Chrome Extension

This is a simple Chrome extension that, when clicked while viewing a Jupyter
notebook on GitHub, will open that notebook in
[Google Colab](https://colab.research.google.com/).

The extension simply provides a URL redirect: it reads the current URL and opens
a new tab at https://colab.research.google.com/github/ (or /gist/) with the
user, repository, and notebook path.

The extension supports the following GitHub pages:

*   Notebook preview page when browsing a repository's files, e.g.
    https://github.com/googlecolab/colabtools/blob/main/notebooks/Gemma_Distributed_Fine_tuning_on_TPU.ipynb
*   Gists with .ipynb files, e.g.
    https://gist.github.com/peap/f9e32370dd789d4fb2ca470fe8de3931.

## Installing the Extension

The latest release of the extension can be installed from the
[Chrome Web Store](https://chrome.google.com/webstore/detail/open-in-colab/iogfkhleblhcpcekbiedikdehleodpjo).

## Support

For help with this Chrome extension, use
[the issue tracker](https://github.com/googlecolab/open_in_colab/issues).

For general help with Colab, see
[the FAQ](https://research.google.com/colaboratory/faq.html). For known issues,
or to report a new one, see
[the colabtools issue tracker](https://github.com/googlecolab/colabtools/issues).

## Change Log

Version 1.2.0 (2024-12-16):

*   Add a link to Open in Colab's GitHub repo from the Chrome Web Store page.
    Fixes #3.
*   Show a helpful popup when the extension icon is clicked on an unsupported
    page. Fixes #1.

Version 1.1.0 (2023-12-07):

*   Fix Gist URL handling.
*   Migrate to Manifest v3.

Version 1.0.1 (2020-11-25):

*   Update extension icons.

Version 1.0 (2018)

*   Initial release.
