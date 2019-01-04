class helloController {
  
  static index (req, res) {
    return (
      res.status(200).send({
        success: true,
        data: {
          message: 'Hello your Api setup is ready for you to hack away! Happy building'
        },
      })
    );
  }

}

export default helloController;
