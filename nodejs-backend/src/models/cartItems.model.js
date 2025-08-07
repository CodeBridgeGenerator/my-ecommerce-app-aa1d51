
    module.exports = function (app) {
        const modelName = 'cart_items';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            id: { type:  String , required: true },
userId: { type: Schema.Types.ObjectId, ref: "users" },
productId: { type: Schema.Types.ObjectId, ref: "products" },
quantity: { type: Number, required: false, max: 10000000 },
payment: { type:  String , required: true },
total: { type: Number, required: false, max: 10000000 },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };