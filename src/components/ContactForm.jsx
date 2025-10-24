import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

// Configurações do EmailJS
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const resetForm = () => {
    setFormData({
      email: '',
      name: '',
      message: ''
    });
  };

  const saveToFirebase = async (formData) => {
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      console.log('Dados salvos no Firebase com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar no Firebase:', error);
      throw error;
    }
  };

  const sendEmail = async (formData) => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pedrobaraldi02@gmail.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      return true;
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      // Salva no Firebase
      await saveToFirebase(formData);
      
      // Envia e-mail
      await sendEmail(formData);
      
      // Atualiza estado de sucesso
      setSubmitStatus({
        success: true,
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
      });
      
      // Reseta o formulário
      resetForm();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2 className="contact-title">CONTACT WITH ME</h2>
        <div className="contact-separator"></div>
        
        <div className="contact-details">
          <div className="contact-item">
            <svg className="contact-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>pedrobaraldi02@gmail.com</span>
          </div>
          
          <div className="contact-item">
            <svg className="contact-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>+55 (11) 96027-0101</span>
          </div>
          
          <div className="contact-item">
            <svg className="contact-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>São Paulo, Brasil</span>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
            required
          />
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          
          {submitStatus.message && (
            <div className={`status-message ${submitStatus.success ? 'success' : 'error'} visible`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
