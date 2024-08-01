const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const add = async (req, res) => {
  const { firstName } = req.body;
  if (!firstName) return res.status(400).json({ message: "введите имя" });

  const user = await prisma.user.create({
    data: {
      firstName,
    },
  });
  if (user) {
    res.status(200).json({
      firstName: user.firstName,
    });
  } else {
    return res.status(400).json({ message: "ошибка записи в БД" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch {
    res.status(400).json({ message: 'ошибка в получении сотрудников' })
  }
};

const remove = async (req, res) => {
  // const { id } = req.body
  // console.log('remove id ', id)
  // const user = await prisma.user.delete({
  //   where: {
  //     id
  //   }
  // })
  // if (user) {
  //   // res.status(205)
  //   res.status(204).json(OK)
  // } else {
  //   res.status(500).json({ message: 'не удалось удалить сотрудника' })
  // }
  // console.log('remove user id ', user)
  try {
    const { id } = req.body
    console.log('remove id ', id)
    // const { id } = req.body
    await prisma.user.delete({
      where: {
        id
      }
    })
    res.status(204).json({ message: 'пользователь успешно удален' })
  } catch {
    res.status(500).json({ message: 'не удалось удалить сотрудника' })
  }
}

const getUserByName = async (req, res) => {
  try {
    const { id } = req.params
    console.log('id', id)
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    res.status(200).json(user)
  } catch {
    res.status(400).json({ message: 'ошибка получения пользователя' })
  }
}

module.exports = {
  add,
  getAllUsers,
  remove,
  getUserByName
};
