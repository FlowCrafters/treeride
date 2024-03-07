interface MessagesFromBackFront {
  log: { message: string }
}

interface MessageFromBackFront {
  type: keyof MessagesFromBackFront
  payload: MessagesFromBackFront[keyof MessagesFromBackFront]
}

export type { MessageFromBackFront, MessagesFromBackFront }
