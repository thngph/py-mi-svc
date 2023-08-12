import pymongo
import json

myclient = pymongo.MongoClient("mongodb://host.minikube.internal:27017/")
mydb = myclient["userMp3"]
mycol = mydb["storage"]


def insert(message):
    try:
        message = json.loads(message)
        mp3_fid = message["mp3_fid"]
        receiver_address = message["username"]

        record = { "username": receiver_address, "mp3_fid": mp3_fid }
        x = mycol.insert_one(record)
    except Exception as err:
        print(err)
        return err