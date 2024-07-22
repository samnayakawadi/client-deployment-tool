@echo off
setlocal enabledelayedexpansion

:: Set console color
color 0B

:: ASCII Art Header
echo.
echo  ***************************************************
echo  *                                                 *
echo  *            BUILD AND COPY SCRIPT               *
echo  *                                                 *
echo  ***************************************************
echo.

:: Set static output directory
set "output_dir=D:\Assessment_Clients\ClientDeploymentToolBuilds"
echo Output directory: %output_dir%

:: Create output directory if it doesn't exist
if not exist "%output_dir%" mkdir "%output_dir%" >nul 2>&1

:: Set base directory
set "base_dir=D:\Live_Projects\Assessment\main"
echo Base directory: %base_dir%

:: Set project directories
set "react_dirs=1.authoringUI,2.deliveryUI,3.adminUI"
set "spring_dirs=5.questionAuthoring,6.quizAuthoring,7.delivery,8.admin"

:: Build React apps
echo.
echo  ***************************************************
echo  *                                                 *
echo  *               BUILDING REACT APPS              *
echo  *                                                 *
echo  ***************************************************
echo.
for %%d in (%react_dirs%) do (
    set "full_path=%base_dir%\%%d"
    if exist "!full_path!" (
        echo Building React app in %%d...
        pushd "!full_path!"
        call npm run build >nul 2>&1
        if !errorlevel! neq 0 (
            echo Failed to build React app %%d
        )
        popd
    )
)

:: Build Spring Boot apps
echo.
echo  ***************************************************
echo  *                                                 *
echo  *            BUILDING SPRING BOOT APPS           *
echo  *                                                 *
echo  ***************************************************
echo.
for %%d in (%spring_dirs%) do (
    set "full_path=%base_dir%\%%d"
    if exist "!full_path!" (
        echo Building Spring Boot app in %%d...
        pushd "!full_path!"
        call mvn clean package -DskipTests >nul 2>&1
        if !errorlevel! neq 0 (
            echo Failed to build Spring Boot app %%d
        )
        popd
    )
)

:: Copy React builds
echo.
echo  ***************************************************
echo  *                                                 *
echo  *                COPYING REACT BUILDS            *
echo  *                                                 *
echo  ***************************************************
echo.
for %%d in (%react_dirs%) do (
    set "full_path=%base_dir%\%%d"
    if exist "!full_path!\build" (
        echo Copying React build from %%d...
        mkdir "%output_dir%\ui\%%d" >nul 2>&1
        xcopy "!full_path!\build" "%output_dir%\ui\%%d" /E /I /Y >nul 2>&1
        if !errorlevel! neq 0 (
            echo Failed to copy React build %%d
        )
    )
)

:: Copy Spring Boot builds
echo.
echo  ***************************************************
echo  *                                                 *
echo  *              COPYING SPRING BOOT BUILDS         *
echo  *                                                 *
echo  ***************************************************
echo.
for %%d in (%spring_dirs%) do (
    set "full_path=%base_dir%\%%d"
    if exist "!full_path!\target\*.jar" (
        echo Copying Spring Boot build from %%d...
        mkdir "%output_dir%\services" >nul 2>&1
        for %%f in ("!full_path!\target\*.jar") do (
            copy "%%f" "%output_dir%\services\%%~nxd.jar" >nul 2>&1
            if !errorlevel! neq 0 (
                echo Failed to copy Spring Boot build %%d
            )
        )
    )
)

echo.
echo  ***************************************************
echo  *                                                 *
echo  *      All builds completed and copied internally *
echo  *            on the server.                      *
echo  *                                                 *
echo  ***************************************************
echo.

pause
