import Modal from './Modal';
import Button from './Button';

const Contacts = () => {
  return (
    <>
      <h1 className="mt-5">Contacts</h1>
      <p>Галата Виталий Викторович, тел. 0937647459</p>
      <Modal>
        <h2>Modal window</h2>
        <p>
          2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          consequuntur facilis, obcaecati soluta iste ex illum adipisci veniam
          provident est rerum, minima eaque, consectetur aut velit
          reprehenderit! Fugit nobis, hic laborum quae veniam et excepturi nam
          corporis reprehenderit debitis dicta voluptatem inventore, ducimus
          temporibus tenetur dolorem repellendus ipsam numquam quod fugiat ipsum
          eos! Totam voluptatem numquam quis porro ut dignissimos, mollitia nisi
          reiciendis vel, asperiores blanditiis nesciunt assumenda atque
          facilis? Eum ullam laudantium in blanditiis perspiciatis ab provident
          sapiente? Quo dignissimos consequuntur sapiente. Hic, sint placeat
          quasi iure nostrum qui dolores laborum ipsam iste, nemo sed, veritatis
          et nesciunt eum est aut quis exercitationem distinctio harum quae amet
          accusamus repellat veniam ullam. Fugit praesentium eius molestias
          laboriosam accusamus doloremque quod perspiciatis sunt, atque
          laudantium mollitia veniam voluptas pariatur laborum soluta. Possimus
          laboriosam nobis facilis in iure nihil porro beatae, tempora fuga
          incidunt corrupti harum accusamus hic laborum inventore a maiores?
        </p>
      </Modal>
      <Button>Открыть модалку</Button>
    </>
  );
};

export default Contacts;
