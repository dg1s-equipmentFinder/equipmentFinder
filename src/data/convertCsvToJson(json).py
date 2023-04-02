#-*-coding:cp949-*-
import json
import pandas as pd


datas = pd.read_csv('C:/users/Owner/Documents/GitHub/equipmentFinder/src/data/data.csv', encoding='cp949')
datas=datas.values.tolist()

print(datas[0][0])

productdict={}
for data in datas:
    id=data[0]
    searchtitle=data[1]
    roomtitle=data[2]
    productitle=data[3]
    
    productdict[id]={
                "roomtitle":roomtitle,
                "productitle":productitle,
            }
   
print(productdict)
file_path="./src/data/roomdata_sample.json"
with open(file_path, 'w', encoding='UTF-8') as outfile:
    json.dump(productdict, outfile, ensure_ascii=False)