class helloController {
  
  static index (req, res) {
    return (
      res.status(200).json({
        status: 'success',
        message: 'Hello your Api setup is ready for you to hack away! Happy building',
        data: {},
      })
    );
  }

}

export default helloController;
