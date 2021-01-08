from urllib.request import urlretrieve
from openpyxl import load_workbook
import json
import re

table_url = "https://www.alko.fi/INTERSHOP/static/WFS/Alko-OnlineShop-Site/-/Alko-OnlineShop/fi_FI/Alkon%20Hinnasto%20Tekstitiedostona/alkon-hinnasto-tekstitiedostona.xlsx"
filename_in = "hinnasto.xlsx"
filename_out = "drinkdata.json"

data = {}
data["drinks"] = []

print("Downloading file")
urlretrieve(table_url, filename_in)
print("Download ready")

wb = load_workbook(filename_in, data_only=True)
ws = wb.worksheets[0] #tämä lataa ensimmäisen sivun excel-tiedostosta

def compute_img_url(name, id):
    name = re.sub(r'([^\s\w]|_)+', '', name)
    name = name.replace("ä", "a")
    name = name.replace("ö", "o")
    name = name.replace("å", "a")
    name = name.replace(" ", "-")

    url = "https://images.alko.fi/images/cs_srgb,f_auto,t_products/cdn/"+str(id)+"/"+name+".jpg"
    return url

calc = 0
for row in ws.iter_rows(min_row=5, max_col=22, values_only=True):
    if row[3]:
        id = row[0]
        name = row[1]
        manufacturer = row[2]
        volume = row[3].strip(" l").replace(",",".")
        price = row[4]
        type = row[8]
        alcohol = float(row[21])
        url = "https://alko.fi/tuotteet/"+id
        imgUrl = compute_img_url(name, id)

        ppL = 0
        ppLe = "approaches infinity"

        if float(volume) != 0:
            ppL = round(float(price)/float(volume), 2)
            if float(alcohol) != 0:
                ppLe = round(float(price)*100/(float(volume)*float(alcohol)), 2)

        drink = { 
            "id": id,
            "name": name,
            "manufacturer": manufacturer,
            "size": volume,
            "price": price,
            "type": type,
            "alcohol": alcohol,
            "priceperL": ppL,
            "priceperethanolL": ppLe,
            "url": url,
            "imgUrl": imgUrl
        }

        data["drinks"].append(drink)
        print("handling drink id "+str(id))
        calc += 1

with open(filename_out, "w") as outfile:
    json.dump(data, outfile)

print(str(calc)+" drinks found")