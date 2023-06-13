import { ListGroup, Nav, Container } from "react-bootstrap";
const AboutMe = () => {
  return (
    <main>
      <Container>
        <ListGroup>
          <ListGroup.Item>
            <h2> Машутинский Денис Александрович, 31 год, родился 4 ноября 1991</h2>
          </ListGroup.Item>
          <ListGroup.Item>
          <Nav.Link href="https://drive.google.com/file/d/1QY4n-gtGL31dSk5kkhcdnka9U7BCRCwB/view?usp=sharing">Мое резюме</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="tel: 89312520169">+7 (931) 252-01-69</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="mailto: i.denisdenis1991@gmail.com">i.denisdenis1991@gmail</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link href="https://github.com/DenisDenis1991">GitHub</Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
            Добрый день!
              Я хотел бы подать заявку на вакансию Frontend-разработчик, которую вы разместили. Ознакомившись с требованиями, я уверен, что мой опыт и навыки, соответствуют вашим ожиданиям.

              Мой стек включает в себя не только JavaScript, CSS и HTML, но также современные инструменты разработки, такие как Git для контроля версий, Scss для удобного написания CSS, а также BEM-методологию для эффективного создания масштабируемых интерфейсов.

              Я также имею опыт работы с React и Redux/Toolkit, который я использую для создания сложных пользовательских интерфейсов и управления состоянием приложений. Я знаком и использую React Router и Hooks для реализации маршрутизации и работы с хуками.

              Также я имею опыт работы с Redux-thunk для асинхронного получения и обработки данных, использую TypeScript для обеспечения большей типизации и удобства кодирования.

              Я готов принять новые вызовы и научиться новым технологиям, чтобы создавать лучшие веб-приложения для ваших пользователей. Я уверен, что моя сильная коммуникативность и способность к работе в команде полезны для вашего проекта.

              Спасибо за рассмотрение моей заявки. Я настолько же заинтересован, как и вы, в возможности сотрудничества, и готов ответить на любые дополнительные вопросы.

            С уважением, Денис
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </main>
  )
}

export default AboutMe;