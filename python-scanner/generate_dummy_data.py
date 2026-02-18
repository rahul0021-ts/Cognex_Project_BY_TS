from pymongo import MongoClient
from datetime import datetime, timedelta
import random

# MongoDB Connection
client = MongoClient("mongodb+srv://TSadmin:Supekar0621@tsrahul.4tgvf.mongodb.net/")
db = client["dataman_db"]
collection = db["barcode_reports"]

# Clear old dummy data (optional)
collection.delete_many({})

print("Generating dummy scan data...")

base_time = datetime.utcnow()

for i in range(50):   # generate 50 records
    document = {
        "raw_data": f"QR_CODE_{random.randint(1000,9999)}",
        "timestamp": base_time - timedelta(minutes=random.randint(0, 300))
    }

    collection.insert_one(document)

print("Dummy data inserted successfully!")
