from discord_webhook import DiscordWebhook
import tkinter as tk
from tkinter import *

url_hook = "ENTER_HOOK_URL_HERE"

def muter():
    webhook = DiscordWebhook(url=url_hook, content='/muteAll')
    response = webhook.execute()

def unmuter():
    webhook = DiscordWebhook(url=url_hook, content='/unmuteAll')
    response = webhook.execute()

window = tk.Tk()
window.resizable(width=False, height=False)
window.geometry("300x200")
window.title("Among Us Mute Manager v1.0.0")


Button(window,text = "Mute",command = muter,width=8,height=3).place(relx=0.25,rely=0.47,anchor=tk.CENTER)
Button(window,text = "Unmute",command = unmuter,width=8,height=3).place(relx=0.75,rely=0.47,anchor=tk.CENTER)


window.mainloop()