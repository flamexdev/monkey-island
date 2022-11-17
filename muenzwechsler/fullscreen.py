# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import pyautogui

#Disable FailSafe
pyautogui.FAILSAFE = False

hostName = "localhost"
serverPort = 3002

class MyServer(BaseHTTPRequestHandler):
  def do_GET(self):
    if self.path == "/fullscreen":
      # Click on screen
      pyautogui.click(500, 500)

      # Move cursor at the bottom right corner to hide
      pyautogui.moveTo(pyautogui.size())

if __name__ == "__main__":        
  webServer = HTTPServer((hostName, serverPort), MyServer)
  print("Server started http://%s:%s" % (hostName, serverPort))

  try:
    webServer.serve_forever()
  except KeyboardInterrupt:
    pass

  webServer.server_close()
  print("Server stopped.")