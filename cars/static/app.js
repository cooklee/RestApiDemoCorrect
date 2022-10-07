function get_ids_from_check_box()
{
    var markedCheckbox = document.querySelectorAll('input[type=checkbox]:checked')
    var ids = [];
    markedCheckbox.forEach(box => ids.push(box.value));
    return ids;
}
function aport() { //[1,2,3]
    var arr = get_ids_from_check_box();
    var moj_url = '/get_car_by_type?';
    var params = new URLSearchParams();
    arr.forEach(id => params.append('type_ids', id))
    var parameters = params.toString() //parameters === type_ids=1&type_ids=2&type_ids=3
    moj_url = moj_url + parameters
    console.log(moj_url)
    var test = document.getElementById('cars')
    fetch(moj_url)
        .then(response => response.json())
        .then(data => {
             while (test.firstChild) {
                 test.removeChild(test.lastChild);
            }
            data.forEach(function (element){
                const li = document.createElement('li')
                const h2 = document.createElement('h2')
                const h3 = document.createElement('h3')
                h2.innerText = element.name;
                h3.innerText = element.type;
                li.appendChild(h2)
                li.appendChild(h3)
                test.appendChild(li)
            })



        })
}

document.addEventListener('DOMContentLoaded', function (){
    var checkboxs = document.querySelectorAll("input[type=checkbox]");
    checkboxs.forEach(function (checkbox) {
        checkbox.addEventListener('change', aport)
    });
})