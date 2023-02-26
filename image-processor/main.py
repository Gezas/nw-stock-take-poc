from PIL import Image
import os
import PIL
import glob

def get_images():
    for file in os.listdir("image_in"):
        icon = Image.open("image_in/" + file)
        print(icon.size)
        resized_icon = icon.resize((120, 90))
        print(resized_icon.size)
        resized_icon.save("image_out/" + file)
    

get_images()