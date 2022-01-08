from pymongo import MongoClient

# pprint library is used to make the output look more pretty
from pprint import pprint
import urllib

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(your_mongo_string)
db=client.admin
# Issue the serverStatus command and print the results

pprint(db)