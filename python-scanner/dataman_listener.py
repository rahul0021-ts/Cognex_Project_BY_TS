import socket
from pymongo import MongoClient
from datetime import datetime

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
db = client["dataman_db"]
collection = db["barcode_reports"]

# TCP Server Setup
HOST = "0.0.0.0"
PORT = 5000

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen(5)

print("Waiting for DataMan connection on port 5000...")

conn, addr = server.accept()
print("Connected from:", addr)

while True:
    data = conn.recv(1024).decode().strip()
    if not data:
        continue

    print("Received:", data)

    document = {
        "raw_data": data,
        "timestamp": datetime.utcnow()
    }

    collection.insert_one(document)
    print("Inserted into MongoDB")
