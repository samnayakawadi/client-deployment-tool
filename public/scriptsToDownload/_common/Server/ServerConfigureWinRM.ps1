# Function to check if running with admin privileges
function Test-Admin {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $currentPrincipal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    return $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

# Relaunch the script with admin privileges if not running as admin
if (-not (Test-Admin)) {
    Write-Output "Script is not running with administrative privileges. Relaunching with admin privileges..."
    $scriptPath = $MyInvocation.MyCommand.Path
    $args = "-File `"$scriptPath`""
    Start-Process PowerShell -Verb RunAs -ArgumentList $args
    exit
}

# Enable PS Remoting
Enable-PSRemoting -Force

# Create a self-signed certificate
$cert = New-SelfSignedCertificate -DnsName "10.244.2.206" -CertStoreLocation "cert:\LocalMachine\My"

# Export the certificate to a file
$certPath = "C:\Temp\certificate.cer"
Export-Certificate -Cert $cert -FilePath $certPath

# Find the certificate thumbprint
$thumbprint = $cert.Thumbprint

# Create an HTTPS Listener with the certificate
winrm create winrm/config/Listener?Address=*+Transport=HTTPS "@{Hostname=`"10.244.2.206`"; CertificateThumbprint=`"$thumbprint`"}"

# Set WinRM service to start automatically
Set-Service -Name WinRM -StartupType Automatic
Start-Service -Name WinRM

# Configure firewall to allow HTTPS traffic
New-NetFirewallRule -Name "Allow WinRM HTTPS" -DisplayName "Allow WinRM HTTPS" -Enabled True -Direction Inbound -Protocol TCP -LocalPort 5986 -Action Allow

# Output the path to the exported certificate
Write-Output "Certificate exported to: $certPath"
Write-Output "WinRM is configured to use HTTPS with the new certificate."
