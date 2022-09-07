tocController
===============================

A Custom Jupyter Widget Library

Installation
------------

To install use pip:

    $ pip install tocController

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com/UFPE/tocController.git
    $ cd tocController
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix tocController
    $ jupyter nbextension enable --py --sys-prefix tocController

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite tocController

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
