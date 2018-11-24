module.exports = (Groups, Files, Users)=>{

  Groups.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  Groups.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });

  Files.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  Files.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });

  Users.post('save', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
  Users.post('update', (error, res, next)=>{
    if ((error.name === 'MongoError' || error.name === 'BulkWriteError') && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });
}
