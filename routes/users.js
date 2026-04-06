router.post("/", async (req, res) => {

  try {

    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(200).json(savedUser);

  } catch (error) {

    res.status(500).json({ message: "Error creating user" });

  }

});