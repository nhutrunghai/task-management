const taskDatabase = require("../model/task.model")
module.exports.index = async (req,res) => {
    const {status,sortKey,sortValue,page,limit,querySearch} = req.query
    const query = {
        deleted:false
    }
    if(status){
        query.status = status
    }
    if(querySearch){
        query.title = new RegExp(`${querySearch}`, "i");
    }

    const sort = {}
    if(sortKey && sortValue){
        sort[sortKey] = sortValue
    }
    const pageQuery = {
        limit: page ? (limit ? parseInt(limit) : 3) : {},
        page : page ?  parseInt(page): {},
    }
    pageQuery.skipPage = (pageQuery.page - 1) * pageQuery.limit
    const tasks = await taskDatabase.find(query).sort(sort).limit(pageQuery.limit).skip(pageQuery.skipPage)
    return res.json(tasks)
   
}
module.exports.detail = async(req,res) => {
    const {id} = req.params
    const tasks = await taskDatabase.find({_id:id,deleted:false})
    return res.json(tasks)
}

module.exports.changeStatus = async(req,res) => {
    console.log(req.params);
    console.log(res.body);
    
}