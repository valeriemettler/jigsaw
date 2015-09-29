#!/usr/bin/env sh
echo "woohoo! we are deploying GirlDev!!!"
rsync -av --exclude=.git /Users/LOGIN/code/girldev/* leia:/home/valerie/prj/girldev
echo ""
