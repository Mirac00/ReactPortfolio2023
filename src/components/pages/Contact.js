import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import '../../App.css';
import '../css/ContactStyle.css';

function ContactForm() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mwpeqwpb");
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [feedbackColor, setFeedbackColor] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setFeedbackMessage(t('contact.successMessage'));
      setFeedbackColor('green');
    } else if (state.errors && state.errors.length > 0) {
      setFeedbackMessage(t('contact.errorMessage'));
      setFeedbackColor('red');
    }
  }, [state, t]);

  return (
    <section id='contact' className='contact'>
      <div className='contact-form'>
        <h1 className='contact__title'>{t('contact.title')}</h1>
        <p>{t('contact.email')} <br/> {t('contact.phone')}</p>
        <form onSubmit={handleSubmit} className='contact-form__form'>
          <div className='form-group contact-form__form-group'>
            <div className='form-group-half contact-form__half'>
              <label htmlFor='name' className='contact-form__label'>
                {t('contact.nameLabel')}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='contact-form__input'
                required
              />
            </div>
            <div className='form-group-half contact-form__half'>
              <label htmlFor='email' className='contact-form__label'>
                {t('contact.emailLabel')}
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='contact-form__input'
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='message' className='contact-form__label'>
              {t('contact.messageLabel')}
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='contact-form__textarea'
              required
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          {feedbackMessage && (
            <p style={{ color: feedbackColor, marginTop: '20px' }}>{feedbackMessage}</p>
          )}
          <button type='submit' className='contact-form__button' disabled={state.submitting}>
            {t('contact.sendButton')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;