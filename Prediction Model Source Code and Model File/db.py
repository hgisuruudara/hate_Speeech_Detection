from pymongo import MongoClient
from pydantic import BaseModel
from typing import Dict

class Comment(BaseModel):
    comment: str = None
    labels: Dict[str, int] = None

# sep db for pred api ,and whatever text sent, it saves it in own db with the prediction
client = MongoClient('mongodb+srv://salman:salman123@cluster0.z9i4w.mongodb.net/?retryWrites=true&w=majority')

async def saveComment(text,predictions):
    db = client["detoxify"]
    msg_collection = db["comments"]
    items_dict = {key:1 if value > 80 else 0 for key, value in predictions.items()}
    commentObj = Comment()
    commentObj.comment = text
    commentObj.labels = items_dict
    previousComment =msg_collection.find_one(({'comment':text}))
    if(previousComment==None):
        msg_collection.insert_one({'comment':text,**commentObj.labels})