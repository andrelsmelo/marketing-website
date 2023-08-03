import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>Personal Watch Trainer</title>
        <meta
          name='description'
          content='Site do produto Personal Watch Trainer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.backgroundContainer}>
        <main className={`${styles.main}`}>
          <div className={styles['title-container']}>
            <h1>Personal Watch Trainer</h1>
          </div>
          <div className={styles['shape-divider']}>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                opacity='.25'
                className={styles["shape-fill"]}
              ></path>
              <path
                d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
                opacity='.5'
                className={styles["shape-fill"]}
              ></path>
              <path
                d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
                className={styles["shape-fill"]}
              ></path>
            </svg>
          </div>
          <div className={styles['description-container']}>
            <div>
              O Personal Watch Trainer é um smartwatch que coleta dados sobre
              atividades físicas, frequência cardíaca, qualidade do sono e
              outros parâmetros importantes para a saúde.
              <br />
              <br />
              Ele utiliza algoritmos de inteligência artificial para analisar
              esses dados e fornecer um plano de treinamento personalizado,
              adaptado às necessidades e metas individuais de cada usuário.
              <br />
              <br />O objetivo é ajudar as pessoas a alcançar um estilo de vida
              mais saudável, ativo e equilibrado.
            </div>
          </div>
          <div className={styles['features-container']}>
            <Card
              title='Inteligência Artificial'
              image={'/relogio-2.jpg'}
              text='Tenha suas atividades analisadas em tempo real por uma IA completamente inovadora e adaptavel'
            />
            <Card
              title='Praticidade'
              image={'/relogio-3.jpg'}
              text='Tenha absoluto controle durante seus exercicios e seu dia a dia, acompanhe seus dados via relatorios ou notificações'
            />
            <Card
              title='Elegância'
              image={'/relogio-4.jpg'}
              text='Com design minimalista e monocromatico, tenha um produto com muita elegância para compor seus visuais'
            />
          </div>
          <div className={styles['contato-container']}>
            <span>Entre em Contato</span>
            <Button
              onClick={handleOpenModal}
              variant={'primary'}
              text='Fale Conosco'
            />
            {showModal && (
              <Modal isOpen={true} onClose={handleCloseModal}>
                <input type='text' placeholder='Nome' />
                <input type='email' placeholder='E-mail' />
                <Button onClick={handleCloseModal} text='Enviar' />
              </Modal>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
