@echo off
setlocal enabledelayedexpansion

:: Configuration for Server Execution
set "server_ip=10.244.2.206"
set "server_user=samnayakawadi"
set "server_password=Samir@@8421045354"
set "server_script_path=D:\Scripts\dev_samnayakawadi\Server\ServerBuildAndCopyInternally.bat"

:: Function to execute command on server machine using PowerShell
set exec_server_ps=PowerShell -Command "Invoke-Command -ComputerName %server_ip% -Credential (New-Object System.Management.Automation.PSCredential('%server_user%', (ConvertTo-SecureString '%server_password%' -AsPlainText -Force))) -ScriptBlock { param($cmd) Invoke-Expression $cmd } -ArgumentList "

:: Set console color
color 0A

:: ASCII Art Header
echo.
echo  ***************************************************
echo  *                                                 *
echo  *                SERVER EXECUTION                 *
echo  *                                                 *
echo  ***************************************************
echo.

:: Execute the build script on the server machine
echo Executing build script on server machine...
%exec_server_ps% "%server_script_path%"
if %errorlevel% neq 0 (
    echo.
    echo  ***************************************************
    echo  *                                                 *
    echo  *               SERVER EXECUTION FAILED           *
    echo  *                                                 *
    echo  ***************************************************
    echo.
    pause
    exit /b 1
)

:: Configuration for File Transfer
echo.
echo  ***************************************************
echo  *                                                 *
echo  *                FILE TRANSFER                    *
echo  *                                                 *
echo  ***************************************************
echo.

set SOURCE=\\10.244.2.206\D$\Assessment_Clients\ClientDeploymentToolBuilds
set DESTINATION=%USERPROFILE%\Downloads\ClientDeploymentToolBuilds
set LOG=%USERPROFILE%\Downloads\file_transfer_log.txt

echo Ensuring destination directory exists...
if not exist "%DESTINATION%" mkdir "%DESTINATION%"

echo Attempting to map network drive...
net use X: "%SOURCE%" /user:samnayakawadi Samir@@8421045354

if %errorlevel% neq 0 (
    echo.
    echo  ***************************************************
    echo  *                                                 *
    echo  *               NETWORK DRIVE MAPPING FAILED      *
    echo  *                                                 *
    echo  ***************************************************
    echo.
    echo Please check your network connection and credentials.
    goto :error
)

echo Network drive mapped successfully.

echo Copying files...
robocopy "X:\services" "%DESTINATION%\services" /E /R:3 /W:5 /TBD /NP /LOG+:"%LOG%"
robocopy "X:\ui" "%DESTINATION%\ui" /E /R:3 /W:5 /TBD /NP /LOG+:"%LOG%"

echo Unmapping network drive...
net use X: /delete

if %errorlevel% equ 0 (
    echo.
    echo  ***************************************************
    echo  *                                                 *
    echo  *               FILE TRANSFER SUCCESSFUL          *
    echo  *                                                 *
    echo  ***************************************************
    echo.
    echo Opening destination folder...
    start "" "%DESTINATION%"
) else (
    echo.
    echo  ***************************************************
    echo  *                                                 *
    echo  *               FILE TRANSFER COMPLETED           *
    echo  *               WITH POSSIBLE ERRORS              *
    echo  *                                                 *
    echo  ***************************************************
    echo.
    echo Please check the log file.
)

echo Log file is available at: %LOG%
goto :end

:error
echo.
echo  ***************************************************
echo  *                                                 *
echo  *               AN ERROR OCCURRED                 *
echo  *                                                 *
echo  ***************************************************
echo.

:end
pause
