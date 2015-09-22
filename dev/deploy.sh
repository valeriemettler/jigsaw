#!/usr/bin/env sh
echo "woohoo! we are deploying Jigsaw!!!"
rsync -av --exclude=.git /Users/LOGIN/code/jigsaw/* leia:/home/valerie/prj/jigsaw
echo ""
