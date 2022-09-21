import ipywidgets as widgets
from traitlets import Unicode, Bool
import json

# See js/lib/example.js for the frontend counterpart to this file.

@widgets.register
class HelloWorld(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('HelloView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('HelloModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('tocController').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('tocController').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    value = Unicode('Hello World!').tag(sync=True)

@widgets.register
class ToCController(widgets.DOMWidget):
    """ToC Controller."""

    # Name of the widget view class in front-end
    _view_name = Unicode('ToCControllerView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('ToCControllerModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('tocController').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('tocController').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    tocAvailable = Bool(False)
    dag = Unicode('{"nodes":[],"edges":[]}').tag(sync=True)
    
    def init(self):          
        self._widgets = {}
        self._summaries = {}
        self._children = {}

    def registerWidget(self,widget,label,internalID,referenceDivID,parents):
        if not ToCController.tocAvailable:
            return
        #
        self._widgets[internalID] = {'widget':widget,'referenceDiv':referenceDivID,'parents':parents,'label':label}
        #add to children list        
        if internalID not in self._children:
            self._children[internalID] = []
        #
        for pr in parents:    
            if pr not in self._children:
                self._children[pr] = []
            self._children[pr].append(internalID)
        #
        self.updateDag()
       
    def updateSummary(self, internalID, summaryValues):
        if not ToCController.tocAvailable:
            return
        self._summaries[internalID] = summaryValues
        self.updateDag()    

    def updateDag(self):
        nodes = []
        edges = []
        for _id in self._children:
            nLabel = self._widgets[_id]['label']
            nodes.append(nLabel)
            for ch in self._children[_id]:
                chLabel = self._widgets[ch]['label']
                edges.append([nLabel,chLabel])
        #
        self.dag = json.dumps({'nodes':nodes,'edges':edges})

def test():
    pass

if __name__ == '__main__':
    test()