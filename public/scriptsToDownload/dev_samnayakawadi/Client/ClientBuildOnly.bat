@echo off
setlocal enabledelayedexpansion

:: Set console color
color 0B

:: ASCII Art Header
echo.
echo  ***************************************************
echo  *                                                 *
echo  *              SERVER SCRIPT EXECUTION           *
echo  *                                                 *
echo  ***************************************************
echo.

:: Configuration for Server Execution
set "server_ip=10.244.2.206"
set "server_user=samnayakawadi"
set "server_password=Samir@@8421045354"
set "server_script_path=D:\Scripts\dev_samnayakawadi\Server\ServerBuildAndCopyInternally.bat"

:: Function to execute command on server using PowerShell
set exec_server_ps=PowerShell -Command "Invoke-Command -ComputerName %server_ip% -Credential (New-Object System.Management.Automation.PSCredential('%server_user%', (ConvertTo-SecureString '%server_password%' -AsPlainText -Force))) -ScriptBlock { param($cmd) Invoke-Expression $cmd } -ArgumentList "

:: Execute the build script on the server
echo.
echo  ***************************************************
echo  *                                                 *
echo  *    Executing build script on server...         *
echo  *                                                 *
echo  ***************************************************
echo.
%exec_server_ps% "%server_script_path%"
if %errorlevel% neq 0 (
    echo Server execution failed. Error code: %errorlevel%
    pause
    exit /b 1
)

echo.
echo  ***************************************************
echo  *                                                 *
echo  *    Build script executed successfully on       *
echo  *                server.                        *
echo  *                                                 *
echo  ***************************************************
echo.

pause
goto :eof
