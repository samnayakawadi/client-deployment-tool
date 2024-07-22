# Check if the script is running with administrative privileges
if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    # Relaunch the script with administrative privileges
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
    Exit
}

# Set execution policy to allow the script to run
Set-ExecutionPolicy Bypass -Scope Process -Force

# Define the IP address of the remote server
$remoteServer = "10.244.2.206"

# Enable PSRemoting if not already enabled
if (!(Get-PSSessionConfiguration)) {
    Enable-PSRemoting -Force
}

# Add the remote server to TrustedHosts
Set-Item WSMan:\localhost\Client\TrustedHosts -Value $remoteServer -Force

# Display current TrustedHosts configuration
Write-Host "Current TrustedHosts configuration:"
Get-Item WSMan:\localhost\Client\TrustedHosts | Select-Object -ExpandProperty Value

# Restart WinRM service to apply changes
Restart-Service WinRM

Write-Host "Configuration complete. You should now be able to connect to $remoteServer"

# Pause to keep the PowerShell window open
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")