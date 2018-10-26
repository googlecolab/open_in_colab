# Open In Colab Chrome Extension

This is a simple chrome extension that, when clicked when viewing a Jupyter
notebook on github, will open that notebook in
[Google Colab](http://colab.research.google.com/).

## Installing the Extension

*Coming Soon:* we will make this extension available for installation from the Chrome Web Store soon.

## Development Install

To install the extension directly from source:

1. Clone this repository to your local disk
2. Open the Chrome browser, and navigate to chrome://extensions
3. Ensure that developer mode is enabled (see the switch in the upper-right)
4. Click "Load Unpacked" and choose the location of the `open_in_colab` repository.
   You should see a little colab icon appear in your Chrome extensions icons
   in your browser bar.
5. Navigate to a notebook on github
   (e.g. https://github.com/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb),
   and click the extension icon to open it in Colab.
