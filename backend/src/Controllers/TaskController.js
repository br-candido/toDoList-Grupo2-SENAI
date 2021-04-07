import TaskSchema from '../Schema/TaskSchema'

 class TaskController {

  async index(request, response){
    const tasks = await TaskSchema.find().catch(error => console.log(error));
    console.log(tasks);
    return response.json(tasks);
  }

  async create(request, response){
    const { name, date, status } = request.body;
    console.log(name);

    await TaskSchema.create(
      {
        name,
        date,
        status: 'Pendente'
      }
    ).catch(error => {
      console.log(error);
    });
    return response.json({name, date, status});
  }

  async delete(request, response){
    TaskSchema.find({"_id": request.params._id})
    .then((result)=>{
      if(result){
        TaskSchema.deleteOne({"_id": request.params._id})
        .catch((error) => {
          console.log(error)
        })
      }
      console.log(result)
      return response.json(result)
    })
    .catch((error)=>{
      console.log(error)
      return response.json({"mensagem": "Não Deletou!"})
    })
  }

  async update(request, response){
    TaskSchema.findOneAndUpdate({"_id": request.params._id}, request.body)
    .then((result)=>{
      console.log(result)
      return response.json(result)
    })
    .catch((error)=>{
      console.log(error)
      return response.json({"mensagem": "Não Atualizou"})
    })
  }

  async updateStatus(request, response){
    TaskSchema.findOneAndUpdate({"_id": request.params._id},
     { "$set": {
        "status": "Realizada"
      }
    },
      {new: true}
    )
    .then((result)=>{
      console.log(result)
      return response.json(result)
    })
    .catch((error)=>{
      console.log(error)
      return response.json({"mensagem": "Não Realizou"})
    })
  }
}
module.exports = new TaskController();
