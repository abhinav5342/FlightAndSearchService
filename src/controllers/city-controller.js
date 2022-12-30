const { CityService, CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message:'not able to successfully acquire results',
            err: error
        });
    }

}

const destroy = async (req,res) => {
   try {
       const city = await cityService.deleteCity(req.params.id);
       return res.status(200).json({
        data: city,
        success: true,
        message:'succcessfully deleted city',
        err: {}
       });
   } catch (error) {
       console.log(error);
       return res.status(200).json({
        data:{},
        success:false,
        message:"Not able to delete city",
        err:error
       });
   }
}

const get = async (req,res) => {
  try {
    const city= await cityService.getCity(req.params.id);
    return res.status(202).json({
     data:city,
     success:true,
     message:"successfully fetched the city",
     err:{}
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
     data:{},
     success:false,
     message:"Not able to get a city",
     err:error
    });
  }
}

const update = async (req,res) => {
   try {
    const city= await cityService.updateCity(req.params.id ,req.body);
    return res.status(202).json({
     data:city,
     success:true,
     message:"successfully updated the city",
     err:{}
    });
   } catch (error) {
    console.log(error);
    return res.status(200).json({
     data:{},
     success:false,
     message:"Not able to update city",
     err:error
    })
   }
}

module.exports ={
    create,
    destroy,
    get,
    update
}