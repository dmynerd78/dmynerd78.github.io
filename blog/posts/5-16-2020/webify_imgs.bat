@echo OFF

REM https://stackoverflow.com/questions/35226237/how-to-reduce-quality-of-multiple-jpeg-image-files-using-ffmpeg

for /L %%f in (1,1,10) do (
    REM ffmpeg -y -i %%f.jpg -vf scale=1280:-1 -q:v 8 %%f_small.jpg
    cwebp -q 85 %%f_small.jpg -o %%f_small.webp
    echo.
)