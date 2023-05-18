$(function(){
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-27C8451A-9958-4266-BF95-4D2E7E36A415',
        type: 'GET',
        dataType: 'JSON',
        success: function(res){
            console.log(res);
            // console.log(res.records.locations[0].locationsName);
            // console.log(res.records.locations[0].location[4].locationName);
            // console.log(res.records.locations[0].location[4].weatherElement[1].time[0].elementValue[0].value);

            let tempture = res.records.locations[0].location[4].weatherElement[1].time[0].elementValue[0].value;
            const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri"];

            let j = 0;

            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[4].locationName);
            $('#tempture').html( tempture + '&#176;');


            for(let i = 0; i < 10; i++){
                // console.log($('.block').eq(i).find('small').html());
                // console.log($('.block').eq(i).find('h6').html());
                
                // 取得2的倍數
                if((i % 2) == 0){
                    let t = res.records.locations[0].location[4].weatherElement[1].time[i].elementValue[0].value;
                    let temp = `<strong> ${t}&#176;</strong>`;
                    let wd = res.records.locations[0].location[4].weatherElement[1].time[i].startTime;


                    $('.block').eq(j).find('h6').html(temp);
                    const d = new Date(wd);
                    let day_index = d.getDay()
                    $('.block').eq(j).find('small').html(weekday[day_index])
                    j++;
                }
            }
        },
        error: function(error){
            alert(Error);
        }
    })











});