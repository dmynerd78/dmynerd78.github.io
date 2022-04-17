#!/bin/bash


for f in $(find . -name "[[:digit:]].jpg" -type f -print)
do
    echo "$i"
    ffmpeg -y -i ${f} -vf scale=1280:-1 -q:v 8 ${f%.*}_small.jpg
    cwebp -q 65 ${f%.*}_small.jpg -o ${f%.*}_small.webp
    # The libaom version is severly out of date but at least it's something https://github.com/GoogleChromeLabs/squoosh/issues/1234
    # docker run -it --rm -v $(pwd):/data node:17-bullseye-slim bash
    # npm i -g @squoosh/cli
    squoosh-cli --avif '{"speed":3,"csqqLevel":30}' -d $(dirname ${f%.*}) ${f%.*}_small.jpg
done
