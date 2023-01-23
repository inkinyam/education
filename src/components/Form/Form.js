import './Form.scss';
import React from 'react';
import { useInputValidator } from '../../HOCs/useInputValidator';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";
import Select from "react-select";
import { educationLevelOptions, yearOptions } from '../../utils/selectData';

const Form = ({onSubmit, programsData, isPosted,setIsPosted,  ...props}) => {
  const { onCursor } = props.context;

  const inputControl          = useInputValidator();
  const [isValid, setIsValid] = React.useState(false);

  const { name, surname, institute, speciality, city, email, portfolioLink } = inputControl.errors;

  const [currentLevel, setCurrentLevel]     = React.useState('');
  const [currentYear, setCurrentYear]       = React.useState('');
  const [currentProgram, setCurrentProgram] =  React.useState('');

  const formref = React.useRef(null);

  const programs = [];
  programsData.map(item => { return programs.push({ value: item.id, label: item.short_title })  })

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });


  /*обновление поля в селектах*/
  const onChangeLevel = (newValue) => {
    setCurrentLevel(newValue.value);
    inputControl.values.level =  newValue.value;
    setIsValid(formref.current.checkValidity());
  }

  const onChangeYear = (newValue) => {
    setCurrentYear(newValue.value);
    inputControl.values.year =  newValue.value;
    setIsValid(formref.current.checkValidity());
  }

  const onChangeProgram = (newValue) => {
    setCurrentProgram(newValue.value);
    inputControl.values.program =  newValue.value;
    setIsValid(formref.current.checkValidity());
  }


/*обновление общего статуса валидации*/
  React.useEffect(() => {
    setIsValid(inputControl.isValid)
  }, [ inputControl.isValid]);


  const handleSubmitForm = (e) => {
    e.preventDefault();
    let {name, surname, institute, speciality, level, year, city, program, email, portfolioLink} = inputControl.values;
    isValid
      ? onSubmit({ program: program,
                  name: name,
                  surname: surname,
                  institute: institute,
                  email: email,
                  speciality: speciality,
                  city: city,
                  portfolioLink: portfolioLink,
                  educationLevel: Number(level),
                  studyYear: Number(year)    
                }) 
      : console.log("ERROR: поля не заполнены");

      setTimeout(() => {
        inputControl.resetForm();
        setIsPosted(false)
      }, 5000)
  }

  const envelopeClassList = inView? 'form__svg animated': 'form__svg';

 
  const submitButtonClassList = !isValid? 'form__button' : isPosted? 'form__button form__button_click' : 'form__button form__button_valid';                        
  const messageClassName = isPosted? 'form__succes form__succes_show' : 'form__succes';

  return ( 
    <section className='form'>

  
      <div className='form__layout'>
        <div className='form__bg'></div>
      </div>
      
      <svg ref={ref} className={envelopeClassList} viewBox="0 0 1312 675" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path  d="M1 1H1311M1 1V674H1311V1M1 1L656 134L1311 1"> </path>
      </svg>


      <div className='form__container'>
        <form className='form__form' noValidate onSubmit = {handleSubmitForm}  ref={formref}>
          <h4 className='form__title'>Подать заявку на практику</h4>
          <fieldset className='form__fieldset'>
            <span className='form__text'>Я,</span>
            <label htmlFor='name' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.name && "form__input_error"}`}
                     placeholder = "имя"
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.name || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "name"
                     id          = "name"/>
              <span className={`form__err ${inputControl?.errors?.name && "form__err_show"}`}>{name}</span>
            </label>
        
            <label htmlFor='surname' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.surname && "form__input_error"}`}
                     placeholder = 'фамилия'
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.surname|| ''}
                     onChange    = {inputControl.handleChange}
                     name        = "surname"
                     id          = "surname"/>
              <span className = {`form__err ${inputControl?.errors?.surname && "form__err_show"}`}>{surname}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'> мой вуз</span>
            <label htmlFor='institute' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.institute && "form__input_error"}`}
                      placeholder ='например, МАРХИ'
                      type        ="text"
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                      value       = {inputControl?.values?.institute || '' }
                      onChange    = {inputControl.handleChange}
                      name        = "institute"
                      id          = "institute"/>
              <span className={`form__err ${inputControl?.errors?.institute && "form__err_show"}`}>{institute}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>изучаю специальность</span>
            <label htmlFor='speciality' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.speciality && "form__input_error"}`}
                    placeholder ='например, архитектура'
                    type        ="text"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                    pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                    value       = {inputControl?.values?.speciality || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "speciality"
                    id          = "speciality"/>
              <span className={`form__err ${inputControl?.errors?.speciality && "form__err_show"}`}>{speciality}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            
            <div className='form__selection'>
            <span className='form__text'>уровень образования</span>
              <Select options         = {educationLevelOptions} 
                      value       = {currentLevel ? educationLevelOptions.find(level => level.value === currentLevel) : ''}
                      onChange    = {onChangeLevel}
                      placeholder     = "Выбрать"
                      classNamePrefix = "form-select"
                      className='form-select__container'
                      required
                      id='level'
                      name='level'
                      />
            </div>
      
            
            <div className='form__selection'>
            <span className='form__text'>год обучения</span>
              <Select options         = {yearOptions} 
                      value           = {currentYear? yearOptions.find(year => year.value === currentYear) : ''}
                      onChange        = {onChangeYear}
                      placeholder     = "Выбрать"
                      classNamePrefix = "form-select"
                      className='form-select__container'
                      required
                      />
            </div>
          </fieldset>

          <fieldset className='form__fieldset'>
          <div className='form__selection'>
              <span className='form__text'>город</span>
              <label htmlFor='city' className='form__label'>
                <input className={`form__input ${inputControl?.errors?.city && "form__input_error"}`}
                      placeholder ='например, Тверь'
                      type        ="city"
                      minLength   = "2" 
                      maxLength   = "255" 
                      required 
                      pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                      value       = {inputControl?.values?.city || ''}
                      onChange    = {inputControl.handleChange}
                      name        = "city"
                      id          = "city"/>
                <span className={`form__err ${inputControl?.errors?.city && "form__err_show"}`}>{city}</span>
              </label>
            </div>

            <div className='form__selection'>
            <span className='form__text'> программа </span>
              <Select options         = {programs} 
                      value           = {currentProgram? programs.find(program => program.value === currentProgram) : ''}
                      onChange        = {onChangeProgram}
                      placeholder     = "Выбрать"
                      classNamePrefix = "form-select"
                      className='form-select__container'
                      required
                      />
            </div>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>E-mail <span> для обратной связи</span></span>
            <label htmlFor='email' className='form__label'>
              <input className={`form__input ${inputControl?.errors?.email && "form__input_error"}`}
                    placeholder ='e-mail'
                    type        ="email"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                    pattern     = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    value       = {inputControl?.values?.email || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "email"
                    id          = "email"/>
              <span className={`form__err ${inputControl?.errors?.email && "form__err_show"}`}>{email}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>мое портфолио</span>
            <label htmlFor='portfolioLink' className='form__label'>
              <input className = {`form__input ${inputControl?.errors?.portfolioLink && "form__input_error"}`}
                    placeholder ='ссылка на портфолио'
                    type        ="text"
                    minLength   = "2" 
                    maxLength   = "255" 
                    required 
                    value       = {inputControl?.values?.portfolioLink  || ''}
                    onChange    = {inputControl.handleChange}
                    name        = "portfolioLink"
                    id          = "portfolioLink"/>
              <span className = {`form__err ${inputControl?.errors?.portfolioLink && "form__err_show"}`}>{portfolioLink}</span>
            </label>
          </fieldset>

        {/*   <button type = "submit"  
                  className    = {submitButtonClassList}
                  onMouseEnter = {() => {onCursor('big')}}
                  onMouseLeave = {onCursor}
                  disabled     = {!isValid ?? 'disabled'}   >
                  Отправить заявку
          </button> */}

          <button type='submit'
                  className    = {submitButtonClassList}
                  onMouseEnter = {() => {onCursor('big')}}
                  onMouseLeave  = {onCursor}
                  >
              <svg className="icon mail">
                <polyline points="59,1 59,39 1,39 1,1"></polyline>
                <polyline points="59,1 30,20 1,1 59,1"></polyline>
              </svg>
              <svg className="icon plane">
                <polyline points="55,1 2,20 39,40 55,1"></polyline>
                <polyline points="55,1 19,29 19,40 25,34"></polyline>
              </svg>    
              <svg className="icon check">
                <polyline points="27,36 10,24 28,38 51,-2 27,36"></polyline>
              </svg>   
              Отправить заявку
          </button>

          <p className={messageClassName}>Ваше письмо отправлено получателю!</p>
        </form>
      </div>

    </section> 
  )
}

export default withCursor(Form);

