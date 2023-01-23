const SERVER_URL = 'https://kmv.genplanmos.ru/api/v1';


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

   // метод, который реализует получение данные публикаций
   async getPublicationData () {
    const res = await fetch(`${this.baseUrl}/publications/`, {
       headers: {
        'Content-Type': 'application/json'
      },
       method: "GET"
     });
     return this._checkRes(res);
  }


    // метод, который реализует получение данные программ
    async getProgramData () {
      const res = await fetch(`${this.baseUrl}/programs/`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return this._checkRes(res);
    }

    postFormData (program, name, surname, email, city, institute, speciality, educationLevel, studyYear, portfolioLink) {
   /*    let params = new URLSearchParams();
      params.append('program_id', program);
      params.append('name', name);
      params.append('surname', surname);
      params.append('email', email);
      params.append('city', city);
      params.append('institute', institute);
      params.append('speciality', speciality);
      params.append('education_level', educationLevel);
      params.append('study_year', studyYear);
      params.append('portfolio_link', portfolioLink); */
    

     
      return fetch (`${this.baseUrl}/applications/`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body:  JSON.stringify({ program_id: program, 
          name: name,
          surname: surname,
          email: email,
          city: city,
          institute: institute,
          speciality: speciality,
          education_level: educationLevel,
          study_year: studyYear,
          portfolio_link: portfolioLink
        }),
      })
      .then (res => {return this._checkRes(res)})
    }
  
}


/*создаем и экспортируем экземпляр класса api для использования в App*/ 
const api = new mainApi (SERVER_URL, {})

export default api;