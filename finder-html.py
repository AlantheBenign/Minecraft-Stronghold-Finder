from browser import document
from browser.template import Template

def nrm(event,element):
	element.data.myname = document['write'].value

Template('name',[nmr]).render(myname="")
