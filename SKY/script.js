const instance = axios.create();

//instance.defaults.headers.common.accept = 'txt/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';

var instance1 = axios.create({
  baseURL: 'https://skytefnew.sky.com.br',
  timeout: 1000,
  headers: {'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'},
  headers: {'Origin': 'https://.sky.com.br'}
});


instance1.get('/BFsmOnsAqV')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  


  //CODIGO ASSINANTE / CPF / VALOR / PARCELAS / BN >> PGTO >> CAPTCHA