#!/bin/bash

supervisor app.js >sys.log 2>&1 &
echo 'success'
exit 0
