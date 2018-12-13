//Those collections here are created only on the client side.
SCollection.SICs.initSelect2 = function(selector){
        var basePath = Meteor.absoluteUrl();
        $(`${selector}`).select2({
            ajax: {
                url: `${basePath}scollection/sics/select2`,
                type: 'POST',
                dataType: 'json',
                delay: 1000,
                data: function (params) {
                    return {
                        q: params.term,
                        page: params.page || 1,
                        nPerPage: params.nPerPage || 20
                    };
                },
                processResults: function (result, params) {
                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;
                    params.nPerPage = params.nPerPage || 20;

                    return {
                        results: result.data,
                        pagination: {
                            more: (params.page * params.nPerPage) < result.nTotalRecords
                        }
                    };
                },
                cache: false
            },
            multipleselect: false,
            multiple: false,
            //minimumInputLength: 2,
            escapeMarkup: function (markup) {
                return markup;
            },
            templateResult: function(repo){
                var markup = '<div class="clearfix">' +
                '<div class="col-sm-12">' + repo.text + '</div></div>';
                return markup;
            },
            templateSelection: function(repo){
                return repo.text;
            }
        });

        $(`${selector}`).on('select2:select', function (event) {
            var item = event.params.data.item;
            console.log('selector');
        });



}
