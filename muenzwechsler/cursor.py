import pyautogui

#Disable FailSafe
pyautogui.FAILSAFE = False

# Click on screen
pyautogui.click(500, 500)

# Move cursor at the bottom right corner to hide
pyautogui.moveTo(pyautogui.size())