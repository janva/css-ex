#!/bin/bash
echo "choose adirectory "
read directory
    find $directory -type f | while read file; do
        if [[ "$file" = *.resized.jpg ]]; then
        mv "$file" `echo $file | sed 's/.resized.jpg//'`
        fi;
    done