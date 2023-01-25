const SERVER_URL = 'https://dpo.genplanmos.ru/api/v1';


class mainApi {
  constructor (baseUrl, {headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }


  //метод, проверяющий какой результат пришел, возвращает объект если ок, и ошибку, если нет
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  postFormData ( surname, name, patronymic, email, phone, organization) {
    return fetch (`https://dpo.genplanmos.ru/api/v1/applications/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body:  JSON.stringify({ 
        name: name,
        surname: surname,
        email: email,
        patronymic: patronymic,
        phone: phone,
        organization: organization       
      }),
    })
    .then (res => {return this._checkRes(res)})
  }
}


/*создаем и экспортируем экземпляр класса api для использования в App*/ 
const api = new mainApi (SERVER_URL, {})

export default api;