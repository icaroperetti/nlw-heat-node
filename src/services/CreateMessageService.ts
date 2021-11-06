class CreateMessageService {
  async execute({ text: string, user_id: string }) {
    const message = await Message.create({
      text,
      user_id,
    })

    return message
  }
}

export { CreateMessageService }
