# Function to display a header
function Display-Header {
    param (
        [string]$title
    )
    $separator = "=" * ($title.Length + 4)
    Write-Host "`n$separator`n  $title  `n$separator`n" -ForegroundColor Cyan
}

# Ask for server details
Display-Header -title "Server Details"
$server = Read-Host "Enter the server IP or hostname"
$username = Read-Host "Enter the server username"
$password = Read-Host "Enter the server password" -AsSecureString

# Convert the secure password to plain text
$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password)
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

# Define paths
Display-Header -title "Paths Configuration"
$localBuildPath = "$env:USERPROFILE\Downloads\ClientDeploymentToolBuilds"
$uiPath = "$localBuildPath\ui"
$servicePath = "$localBuildPath\services"
$dataJsonPath = "$env:USERPROFILE\Downloads\data.json"
$dataPropertiesPath = "$env:USERPROFILE\Downloads\data.properties"
$remoteBasePath = "/var/www"
$remoteAuthoringPath = "$remoteBasePath/authoring"
$remoteDeliveryPath = "$remoteBasePath/deliveryUI"
$remoteAdminPath = "$remoteBasePath/adminUI"
$remoteStaticPath = "$remoteBasePath/static"
$remoteJarPath = "$remoteBasePath/assessmentServices"
$remoteTinyMCEPath = "$remoteBasePath/tinymce"

# Function to run remote command using plink
function Run-RemoteCommand {
    param (
        [string]$command
    )
    $plink = "plink.exe"  # Make sure plink.exe is in your PATH or specify the full path
    $plinkArgs = "-ssh", "-pw", $plainPassword, "$username@$server", $command
    & $plink $plinkArgs
}

# Function to copy files using pscp
function Copy-File {
    param (
        [string]$source,
        [string]$destination
    )
    $pscp = "pscp.exe"  # Make sure pscp.exe is in your PATH or specify the full path
    $pscpArgs = "-pw", $plainPassword, "-r", $source, "${username}@${server}:$destination"
    & $pscp $pscpArgs
}

# Create remote directories if they do not exist
Display-Header -title "Creating Remote Directories if Not Present"
$remoteCommands = @(
    "echo $plainPassword | sudo -S mkdir -p $remoteAuthoringPath",
    "echo $plainPassword | sudo -S mkdir -p $remoteDeliveryPath",
    "echo $plainPassword | sudo -S mkdir -p $remoteAdminPath",
    "echo $plainPassword | sudo -S mkdir -p $remoteStaticPath",
    "echo $plainPassword | sudo -S mkdir -p $remoteJarPath",
    "echo $plainPassword | sudo -S mkdir -p $remoteTinyMCEPath",
    "echo $plainPassword | sudo -S chown -R ${username}:${username} $remoteBasePath"
) -join "; "
Run-RemoteCommand $remoteCommands

# Copy React build files
Display-Header -title "Copying React Build Files"
Copy-File "$uiPath\1.authoringUI\asset-manifest.json" "$remoteAuthoringPath/"
Copy-File "$uiPath\1.authoringUI\index.html" "$remoteAuthoringPath/"
Copy-File "$uiPath\1.authoringUI\static\*" "$remoteStaticPath/"
Copy-File "$uiPath\1.authoringUI\tinymce\*" "$remoteTinyMCEPath/"  # New addition
Copy-File "$uiPath\2.deliveryUI\asset-manifest.json" "$remoteDeliveryPath/"
Copy-File "$uiPath\2.deliveryUI\index.html" "$remoteDeliveryPath/"
Copy-File "$uiPath\2.deliveryUI\static\*" "$remoteStaticPath/"
Copy-File "$uiPath\3.adminUI\asset-manifest.json" "$remoteAdminPath/"
Copy-File "$uiPath\3.adminUI\index.html" "$remoteAdminPath/"
Copy-File "$uiPath\3.adminUI\static\*" "$remoteStaticPath/"

# Copy .jar files
Display-Header -title "Copying .jar Files"
Copy-File "$servicePath\*.jar" "$remoteJarPath/"

# Copy additional files
Display-Header -title "Copying Additional Files"
Copy-File "$dataJsonPath" "$remoteBasePath/"
Copy-File "$dataPropertiesPath" "$remoteJarPath/"

# Clean up
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($BSTR)

Write-Host "`nAll files have been copied successfully." -ForegroundColor Green

# Wait for user input before exiting
Read-Host "Press Enter to exit" 
