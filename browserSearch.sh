#!/bin/bash

# This is the text we want to search on Google
SEARCH_TEXT="javascript arrays and objects examples"

# This is the Google search URL
SEARCH_URL="https://www.google.com/search?q=javascript+arrays+and+objects+examples"

# This is the folder where we want to save the final screenshot
DESKTOP_FOLDER="$HOME/Desktop\screenshot"

# This is the temporary screenshot file name
SCREENSHOT_FILE="google-search-screenshot.png"

# Create the Desktop folder using mkdir
mkdir -p "$DESKTOP_FOLDER"

# Open Google Chrome and go to the search URL
"/c/Program Files/Google/Chrome/Application/chrome.exe" "$SEARCH_URL" &

# Wait a few seconds using sleep
sleep 5 

# Take a screenshot and save it as SCREENSHOT_FILE
powershell.exe -NoProfile -Command "
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
\$bounds = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
\$image = New-Object System.Drawing.Bitmap \$bounds.Width, \$bounds.Height
\$graphics = [System.Drawing.Graphics]::FromImage(\$image)
\$graphics.CopyFromScreen(\$bounds.Location, [System.Drawing.Point]::Empty, \$bounds.Size)
\$image.Save('$(cygpath -w "$(pwd)/$SCREENSHOT_FILE")', [System.Drawing.Imaging.ImageFormat]::Png)
\$graphics.Dispose()
\$image.Dispose()
"

# Move the screenshot into DESKTOP_FOLDER
mv "$SCREENSHOT_FILE" "$DESKTOP_FOLDER"

# Print a success message
echo "Screenshot saved to $DESKTOP_FOLDER/$SCREENSHOT_FILE"
