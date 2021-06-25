#!/usr/bin/python3
print("content-type: text/html")
print()

import cgi
import subprocess as sp

cmd = "sudo docker run -dit ubuntu:latest"
op = sp.getstatusoutput(cmd)

status = op[0]
output = op[1]

if status == 0:
   print(output)
else:
   ("try to find errors")
