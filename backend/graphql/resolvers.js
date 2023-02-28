const { ZoneNames,PlannedProductionCount,users } = require('../models');
const { PubSub } = require('graphql-subscriptions');
var sequelize = require('../models/index');
const pubsub = new PubSub();
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");
// const models = initModels(sequelize);
const mssqlDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
const Query = {
	getAllZonesDetails: async (parent, args, contextValue, info) => {
		try {
			const zoneNames = await ZoneNames.findAll();
			console.log(args)
			return zoneNames ;
		}catch(err){
			return err
		}
	},
	getAllProductionDetails: async()=>{
		try{
			const prodDetails = await PlannedProductionCount.findAll();
			return prodDetails
		}catch(err){
			return err
		}
	},
	getTodayProductionCount: async () => {
		try{
			const prodDetails = await sequelize.sequelize.query("SELECT * from dbo.PlannedProductionCount where convert(varchar(10), Date, 102) = convert(varchar(10), getdate(), 102)", { type: QueryTypes.SELECT });
			return prodDetails
		}catch(err){
			return err
		}
	},
	getAllUsers: async()=>{
		try{
			const allUsers = await users.findAll();
			return allUsers;
		}catch(err){
			return err
		}
	},
	findProductionByShift: async(_,{
		Shift,
	}) => {
		try{
			const details =  await sequelize.sequelize.query("SELECT * from dbo.PlannedProductionCount where convert(varchar(10), Date, 102) = convert(varchar(10), getdate(), 102) AND Shift = :Shift", {
				replacements: { Shift: Shift },
				 type: QueryTypes.SELECT
				 });
			return details;
		}catch(err){
			return err
		}
	}
}

const Mutation =  {
	createProductionCount: async (_ , {
		Date,
		Zone,
		Shift,
        ProductionCount,
	}) =>  {
		try {
			var current = await PlannedProductionCount && PlannedProductionCount.create({
				Date,
		        Zone,
		        Shift,
                ProductionCount,		
			})
			pubsub.publish("COUNT_CREATED",{
				newProductionCountAdded:{
					Date:Date,
					Zone:Zone,
					Shift:Shift,
					ProductionCount:ProductionCount
				}
			})		
			return current;
		}catch(error){
			console.log(error)
			return error;
		}
	},
	updateProductionCount: async(_, {
		Id,
		ProductionCount
	}) => {
		try{
			const project = await PlannedProductionCount.findByPk(Id);
				if (!project) return "Not Found"
				project.update({
					ProductionCount:ProductionCount
				})	
				pubsub.publish("UPDATED_PRODUCTION_COUNT",{
					updatedProductionCount:{
						Date:Date,
						ProductionCount:ProductionCount
					}
				})
				return project
		}catch(error){
			return error;
		}
	}
}

const Subscription = {
	newProductionCountAdded: {
		  subscribe: () => pubsub.asyncIterator(['COUNT_CREATED']),
	  },
	  updatedProductionCount: {
		subscribe: () => pubsub.asyncIterator(['UPDATED_PRODUCTION_COUNT'])
	}
	};
module.exports = { Query,Mutation,Subscription }

