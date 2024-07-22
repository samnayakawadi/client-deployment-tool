@echo off
setlocal enabledelayedexpansion

:: Set console color
color 0B

:: ASCII Art Header
echo.
echo  ***************************************************
echo  *                                                 *
echo  *              SERVER FILE TRANSFER              *
echo  *                                                 *
echo  ***************************************************
echo.

:: Configuration for File Transfer
set "source=\\10.244.2.206\D$\Assessment_Clients\ClientDeploymentToolBuilds"
set "destination=%USERPROFILE%\Downloads\ClientDeploymentToolBuilds"
set "log=%USERPROFILE%\Downloads\file_transfer_log.txt"

echo Ensuring destination directory exists...
if not exist "%destination%" mkdir "%destination%" >nul 2>&1

echo Attempting to map network drive...
net use X: "%source%" /user:samnayakawadi Samir@@8421045354

if %errorlevel% neq 0 (
    echo Failed to map network drive. Error code: %errorlevel%
    echo Please check your network connection and credentials.
    goto :error
)

echo Network drive mapped successfully.

echo Copying files...
robocopy "X:\services" "%destination%\services" /E /R:3 /W:5 /TBD /NP /LOG+:"%log%"
robocopy "X:\ui" "%destination%\ui" /E /R:3 /W:5 /TBD /NP /LOG+:"%log%"

echo Unmapping network drive...
net use X: /delete

if %errorlevel% equ 0 (
    echo File transfer completed successfully.
    echo Log file is available at: %log%
) else (
    echo File transfer completed with possible errors. Please check the log file.
)

echo.
echo  ***************************************************
echo  *                                                 *
echo  *      All files transferred successfully.        *
echo  *                                                 *
echo  ***************************************************
echo.

:: Pause the terminal and wait for user input
pause

goto :eof

:error
echo.
echo  ***************************************************
echo  *                                                 *
echo  *              An error occurred during          *
echo  *              the process.                      *
echo  *                                                 *
echo  ***************************************************
echo.

pause
goto :eof
