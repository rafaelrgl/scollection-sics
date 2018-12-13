SCollectionApi.addRoute('select2', {
    authRequired: false
}, {
    post: {
        action: function() {
            var _this = this.bodyParams;
            var response = {};
            var errCode = 500;
            var data = [];
            response.statusCode = 200;
            if(_this.q){
                var query = {
                    $or: [
                        {description: { "$regex": _this.q, "$options": "i" }},
                        {code: { "$regex": _this.q, "$options": "i" }}
                    ]
                };
            }else{
                var query = {};
            }
            //console.log(JSON.stringify(query, null, 2));
            var options = {
                sort: { description : 1 },
                skip: _this.page > 0 ? ( ( _this.page - 1 ) * parseInt(_this.nPerPage) ) : 0,
                limit: parseInt(_this.nPerPage)
            };

            SCollection.SICs.find(query, options).forEach(function(item){
                data.push({text: `${item.code} - ${item.description}`, id: item._id, item: item});
            });
            var count = SCollection.SICs.find(query).count();
            response = {
                statusCode: 200,
                body: {
                    message: 'Query Succesfully',
                    data: data,
                    nTotalRecords: count
                }
            }
            return response;
        }
    }
});
