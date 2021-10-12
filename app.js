const script = document.createElement('script');
script.src = 'https://data.bodik.jp/api/3/action/datastore_search?resource_id=299386e3-1b58-4a2f-a445-cc2fa7cf6ae5&callback=successData';
const parent = document.getElementsByTagName('script')[0];
parent.parentNode.insertBefore(script, parent);

window.successData = (res) => {
  const el = document.getElementById('table');
  const table = document.createElement('table');
  el.appendChild(table);

  var row_th = document.createElement('tr');
  row_th.appendChild(createTh('保育施設名'));
  row_th.appendChild(createTh('0歳・1歳・2歳'));
  row_th.appendChild(createTh('0歳児'));
  row_th.appendChild(createTh('1歳児'));
  row_th.appendChild(createTh('2歳児'));
  row_th.appendChild(createTh('3歳児'));
  row_th.appendChild(createTh('4歳児'));
  row_th.appendChild(createTh('5歳児'));
  row_th.appendChild(createTh('延長保育'));

  table.appendChild(row_th);

  for (let i = 0; i < res.result.records.length; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    tr.appendChild(createTd(res.result.records[i]['保育施設名']));
    tr.appendChild(createTd(res.result.records[i]['0歳・1歳・2歳']));
    tr.appendChild(createTd(res.result.records[i]['0歳児']));
    tr.appendChild(createTd(res.result.records[i]['1歳児']));
    tr.appendChild(createTd(res.result.records[i]['2歳児']));
    tr.appendChild(createTd(res.result.records[i]['3歳児']));
    tr.appendChild(createTd(res.result.records[i]['4歳児']));
    tr.appendChild(createTd(res.result.records[i]['5歳児']));
    tr.appendChild(createTd(res.result.records[i]['延長保育']));
  }
  console.log(res.result.records);
};

function createTh(text) {
  const th = document.createElement('th');
  th.innerHTML = text;
  return th;
}
function createTd(text) {
  const td = document.createElement('td');
  td.innerHTML = text;
  return td;
}

// $.ajaxSetup({cache: false});
// var data = {
//   resource_id: '299386e3-1b58-4a2f-a445-cc2fa7cf6ae5', // the resource id
// };
// $.ajax({
//   url: 'https://data.bodik.jp/api/3/action/datastore_search?resource_id=299386e3-1b58-4a2f-a445-cc2fa7cf6ae5',
//   type: 'GET',
//   data: data,
//   dataType: 'jsonp',
//   jsonp: 'callback',
//   jsonpCallback: 'jsonpCallback',
//   cache: false,
//   success: function(data) {
//     alert('Total results found: ')
//   }
// });