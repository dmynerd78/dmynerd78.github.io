@echo OFF

REM Sets %$date% to M-D-YYYY
set $date=%date:~4%
set $date=%$date:/=-%


@REM =========== CONFIG ===========

REM Full path to 7zG.exe (GUI version of 7-zip)
set COMPRESS_7Z_LOCATION="C:\Program Files\7-Zip\7zG.exe"

REM 7-Zip compression flags
set COMPRESS_FLAGS=-t7z -m0=lzma2 -mfb=64 -md=64m -mmt12 -p -mhe=on -spf

REM Paths to include within the archive. This can include paths that are from drives other than the C drive. Use absolute paths
set ARCHIVE_PATHS="C:\Users\%USERNAME%\"

REM Folders to ignore (just name of the folder; no absolute path). Use -xr!"NAME" for folders and -x!"NAME" for an item
set EXCLUDE_FOLDERS=-xr!"3D Objects" -xr!"Favorites" -x!$RECYCLE.BIN -xr!"Application Data" -xr!"Temp" -xr!"Temporary Internet Files" -xr"Temp" -xr!"Cookies"

REM Location to save backup file to. By default it's [drive script is on]:/Backups/Backup-M-D-YYY.7z
set BACKUP_PATH=%~d0\Backups\Backup-%$date%.7z

@REM =========== CONFIG ===========



echo Starting 7-zip process...
start "7z Backup" %COMPRESS_7Z_LOCATION% a %COMPRESS_FLAGS% %BACKUP_PATH% %ARCHIVE_PATHS% %EXCLUDE_FOLDERS%

pause