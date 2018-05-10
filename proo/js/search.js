$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row location">' + 
                '<div class="col text-left"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col">'+ '<br>' + data[i].name + '<span class="rating-static rating-'+ (data[i].rating)*10+ '">'+'</span>'+data[i].rating+'</div>' +
                
                '</div>' + '<br>'
                '</a>';
                $('#searchresult').append(row);
            }
        });        
    });    
});