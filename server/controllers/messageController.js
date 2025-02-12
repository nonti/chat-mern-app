import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation =  await Conversation.findOne({
      participants: {$all: [ senderId, receiverId]},
    });


    if(!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if(newMessage){
      conversation.messages.push(newMessage._id)
    }
    
    await conversation.save();
    await newMessage.save();

    res.status(201).json(newMessage);

  } catch (error) {
    console.error('Error in sending message:', error.message);
    res.status(500).json({ message: error.message });
  }
}