pip install -e .
jupyter nbextension install --py --symlink --sys-prefix tocController
jupyter nbextension enable tocController --py --sys-prefix
