@echo off
echo Copying design images to frontend/public/images...
if not exist "frontend\public\images" mkdir "frontend\public\images"
copy "design\img\*" "frontend\public\images\" /Y
echo Done! Images copied to frontend/public/images/
pause
