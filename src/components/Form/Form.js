import './Form.scss';
import React from 'react';
import { useInputValidator } from '../../HOCs/useInputValidator';
import { useInView } from "react-intersection-observer";
import withCursor from "../../HOCs/withCursor";


const Form = ({onSubmit, isPosted, isError, setIsPosted,  ...props}) => {
  const { onCursor } = props.context;

  const inputControl          = useInputValidator();
  const [isValid, setIsValid] = React.useState(false);

  const { surname, name, patronymic, email, phone, organization } = inputControl.errors;



  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });


/*обновление общего статуса валидации*/
  React.useEffect(() => {
    setIsValid(inputControl.isValid)
  }, [ inputControl.isValid]);


  const handleSubmitForm = (e) => {
    e.preventDefault();
    let {surname, name, patronymic, email, phone, organization} = inputControl.values;
    onSubmit({  
        surname: surname,
        name: name,
        patronymic: patronymic,
        email: email,
        phone: phone,
        organization: organization
       }) 
  }



  const formClassList = inView? 'form__form animated' : 'form__form ';
  const submitButtonClassList = !isValid? 'form__button' : isPosted? 'form__button form__button_click' : 'form__button form__button_valid';    
  const messageClassName = isPosted? 'form__sended form__succes_show' : 'form__sended';                    
  const messageErrorClassName = isError? 'form__errormessage form__errormessage_show' : 'form__errormessage';                    
 
  return ( 
      <section className='form' >
        <form  className={formClassList} noValidate onSubmit = {handleSubmitForm}  ref={ref}>
          <h4 className='form__title'>Подать заявку на программу повышения квалификации</h4>

          <fieldset className='form__fieldset'>
            <span className='form__text'>Фамилия</span>
            <label htmlFor='surname' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.surname && "form__input_error"}`}
                     placeholder = "Петрова"
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.surname || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "surname"
                     id          = "surname"/>
              <span className={`form__err ${inputControl?.errors?.surname && "form__err_show"}`}>{surname}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>Имя</span>
            <label htmlFor='name' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.name && "form__input_error"}`}
                     placeholder = "Анна"
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
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>Отчество</span>
            <label htmlFor='patronymic' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.patronymic && "form__input_error"}`}
                     placeholder = "Олеговна"
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     pattern     = "[A-Za-zА-Яа-яЁё\s-]+"
                     value       = {inputControl?.values?.patronymic || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "patronymic"
                     id          = "patronymic"/>
              <span className={`form__err ${inputControl?.errors?.patronymic && "form__err_show"}`}>{patronymic}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>e-mail</span>
            <label htmlFor='email' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.email && "form__input_error"}`}
                     placeholder = "petrova@yandex.ru"
                     type        = "email"
                     minLength   = "2" 
                     maxLength   = "100" 
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
            <span className='form__text'>Телефон</span>
            <label htmlFor='phone' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.phone && "form__input_error"}`}
                     placeholder = "+7 (903) 230-62-37"
                     type        = "tel"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     value       = {inputControl?.values?.phone || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "phone"
                     id          = "phone"/>
              <span className={`form__err ${inputControl?.errors?.phone && "form__err_show"}`}>{phone}</span>
            </label>
          </fieldset>

          <fieldset className='form__fieldset'>
            <span className='form__text'>Организация</span>
            <label htmlFor='organization' className='form__label'> 
              <input className={`form__input ${inputControl?.errors?.organization && "form__input_error"}`}
                     placeholder = "ООО «Архитектура и Ко»"
                     type        = "text"
                     minLength   = "2" 
                     maxLength   = "100" 
                     required 
                     value       = {inputControl?.values?.organization || ''}
                     onChange    = {inputControl.handleChange}
                     name        = "organization"
                     id          = "organization"/>
              <span className={`form__err ${inputControl?.errors?.organization && "form__err_show"}`}>{organization}</span>
            </label>
          </fieldset>
          
      

          <button type='submit'
                  className    = {submitButtonClassList}
                  onMouseEnter = {() => {onCursor('big')}}
                  onMouseLeave  = {onCursor}
                  >
                         Отправить заявку
          </button>
        </form>
      <p className={messageClassName}>Спасибо! <br/>Мы получили вашу заявку и обязательно свяжемся с вами.</p>
      <p className={messageErrorClassName}>Что-то пошло не так, пожалуйста, попробуйте позднее</p>
     </section>
 
  )
}

export default withCursor(Form);

