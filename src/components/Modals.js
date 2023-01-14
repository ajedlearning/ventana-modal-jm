import React from "react";
import { useModal } from "./hooks/useModal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal, closeModal1 ] = useModal(true)
    const [isOpenModal2, openModal2, closeModal2 ] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3 ] = useModal(false)
    const [isOpenModal, openModalPortal, closeModalPortal ] = useModal(false)
  return (
    
    <div>
      <h2>Modales</h2>
      <button onClick={openModal}>Modal 1</button>
      <button onClick={openModal2}>Modal 2</button>
      <button onClick={openModal3}>Modal Contacto</button>
      <button onClick={openModalPortal}>Modal Portal</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo id aperiam sapiente laudantium repudiandae ducimus quos voluptates eaque placeat, dicta est dignissimos. Odio, harum cupiditate. Nisi sapiente a velit laborum?
      Quis id unde repellendus. Numquam aliquid vel facere debitis quia sint accusantium, ut neque esse iste dicta veritatis libero, harum minima? Ab, corporis cumque soluta magnam dignissimos corrupti sequi molestiae.
      Facilis dolorem totam neque modi enim perferendis libero porro, quo nisi repellendus voluptate omnis quia aut, vitae quae blanditiis ullam eaque nostrum! Facere nisi labore saepe sint porro qui placeat.
      Esse doloremque quasi inventore veritatis quidem quam, a quae asperiores enim reiciendis aspernatur natus eligendi perferendis ut vel adipisci exercitationem. Ab dolore explicabo reprehenderit ullam! Ea reiciendis eos dolorum debitis?
      Ab, culpa? Voluptatibus unde magnam molestiae a nemo laborum, porro quaerat debitis quia ut voluptatum, inventore facere velit quis obcaecati molestias sit quas. Quasi in soluta, unde ab accusantium iusto?
      Alias tempora consectetur maxime. Corporis possimus eius libero doloribus consectetur? Accusamus voluptas exercitationem optio eius maxime et, quasi inventore ipsam excepturi, natus, sequi laborum nesciunt repellendus. Asperiores atque quaerat beatae?
      Ducimus dignissimos impedit explicabo magnam cupiditate eos recusandae voluptate maiores, totam debitis nostrum at aliquid excepturi nam sit blanditiis deleniti cumque suscipit laudantium repudiandae. Minus, similique odit! Ullam, omnis illum?
      Repudiandae earum dolor amet quam. Consequatur, neque. Nihil possimus impedit illo, aspernatur voluptatem deleniti rem soluta exercitationem, nobis at eum inventore, minus dolore. Tempora ad quis eius explicabo doloribus minus.
      Quaerat quis omnis debitis beatae velit quibusdam perspiciatis, natus nobis possimus rem! Ut eveniet facilis dolorem sit dignissimos dicta numquam veniam autem, accusamus veritatis amet ipsa placeat porro doloribus quaerat?
      Laboriosam nisi optio culpa nesciunt maiores enim aspernatur iste? Fugiat quis modi sapiente, placeat ducimus ratione. Eveniet atque commodi dolor quasi laborum, veniam accusamus tempora vero nisi dignissimos sunt quam.
      Delectus assumenda ipsa vero veniam officiis nihil, rerum quod quam a quas quo deserunt dicta suscipit! Accusamus commodi dignissimos quam esse, quia, velit numquam in dolore enim similique, obcaecati debitis.
      Quia voluptas, accusantium nobis nam harum neque, quod ipsum deserunt explicabo, adipisci eligendi quaerat nemo commodi eaque animi doloribus natus architecto? Quos ipsum et itaque repellat esse sunt natus hic!
      Commodi ut voluptatum odio quos ab eum explicabo recusandae sunt eos, fuga, ea tempora accusamus vitae quaerat, ullam reiciendis sapiente natus numquam illo saepe neque ad deserunt! Saepe, sint impedit.
      Molestias, labore quisquam ex explicabo similique alias ab odit, dolore fuga impedit dolorum suscipit, excepturi distinctio aspernatur laboriosam! Debitis odio quae, nobis nesciunt numquam quisquam praesentium tenetur fugiat ipsam vitae?
      Numquam quae labore at expedita repellendus cumque a hic ab, officiis quisquam voluptate id illo consequatur alias reprehenderit quidem neque! Corporis consequuntur consequatur molestias perspiciatis nulla eaque a debitis qui.
      Animi, vitae? Aspernatur, nobis excepturi. Quae ab, et nobis labore provident velit. Ex, qui. Earum voluptatum, ex ratione, cumque nobis quos expedita aspernatur pariatur amet consequuntur ad esse architecto nesciunt?
      Eaque quod, numquam quas explicabo consequatur recusandae autem non. Architecto minima sapiente, explicabo cum impedit assumenda excepturi debitis dolorum consequuntur deleniti dolorem dolore reiciendis facere ea quasi voluptatem minus? Repellat.
      Vel, dicta rerum quo mollitia alias asperiores earum accusamus, voluptatibus libero quos architecto quisquam fugit non, placeat nobis temporibus amet maiores? Expedita laborum enim ducimus tempore, quaerat unde debitis odit.
      Impedit numquam optio laboriosam neque necessitatibus distinctio nisi quis veritatis? Atque voluptatum officiis rem voluptatem mollitia ratione pariatur cum inventore, eum quidem qui sapiente fugit optio architecto laboriosam incidunt expedita?
      Ipsam delectus nobis ad, doloribus explicabo labore rem, doloremque beatae quisquam necessitatibus facere eius laboriosam laudantium! Molestias facere accusantium ad quas quibusdam enim minus ut, fugit ipsam fuga, eum voluptatem?
      Sunt, tempora. Minima nihil tempore autem eum voluptatem enim vero eaque aut! Exercitationem, esse modi rerum dicta maxime eum repellendus nemo ad sapiente ullam harum quis eius quisquam ipsa quam!
      Eligendi est reprehenderit quam, nam dignissimos deserunt, sint laudantium quibusdam laboriosam harum alias laborum tempora deleniti dolorum, porro earum commodi in dicta distinctio dolorem! Amet aspernatur repudiandae enim atque rem.
      Vitae minus aliquam ullam similique quae cumque fugit sunt molestiae explicabo eligendi, maiores debitis aperiam laborum officia sed natus voluptatibus sit culpa enim eaque, magni iste temporibus voluptas reprehenderit. Veniam?
      Eaque et laboriosam adipisci iure praesentium reiciendis explicabo voluptates sapiente. Consequuntur natus, sequi porro hic animi itaque aliquam laborum. Error vero dolorum voluptatum facere accusamus corrupti, culpa quia eligendi rerum?
      Eum labore qui, impedit optio porro similique quia distinctio nesciunt. Minima, fuga? Impedit totam dolorem minima enim et in distinctio obcaecati, culpa explicabo molestias tempora adipisci rerum voluptas nobis aspernatur.
      Dignissimos sed, odio autem, eos odit iusto voluptate neque itaque voluptatum recusandae quaerat voluptatibus asperiores error ratione quis quod eaque! Sint dolorem doloremque laboriosam earum, quaerat optio officia voluptas nemo.
      Saepe voluptatibus, eos dolorum dolor neque deserunt deleniti similique ipsam necessitatibus quod beatae alias culpa voluptatum accusantium sunt sed natus error officia officiis voluptas reiciendis esse magni! Placeat, asperiores odit.
      Veniam obcaecati minima recusandae, itaque accusantium inventore dolorum porro necessitatibus illo praesentium explicabo voluptas illum quis, tempora consectetur nobis modi, quod tempore molestias quo temporibus! Rem in nisi asperiores placeat.
      Odio, laudantium. Fuga rem, nisi perspiciatis consequuntur excepturi eius ipsum possimus veniam delectus. Magni odit labore impedit illo inventore provident, saepe sint alias omnis molestiae corrupti. Tempore, eum. Ullam, magni.
      Aliquam itaque voluptate voluptatem consequatur totam quam minima ipsum culpa error dolore sed, facilis deserunt iste odio harum, numquam sit ratione id tempora inventore! Quia dolor fuga minima? Sapiente, rerum.
      Consectetur odio placeat, odit beatae eos impedit libero quasi aperiam deleniti quibusdam eligendi perferendis autem illum voluptas laudantium optio unde, accusantium maxime asperiores consequuntur accusamus minus alias! Quasi, nam omnis!
      Nisi, cum. Sunt repudiandae, laudantium illum eius architecto quaerat consequatur autem maiores corrupti, assumenda recusandae, tempora qui pariatur voluptatum et velit ut. Consectetur vel, sunt vero fuga minus deserunt repudiandae?
      Harum quibusdam id earum, neque voluptas ullam provident nam necessitatibus error corrupti ut sit! Officiis doloribus repellat rerum exercitationem quasi odit ut corrupti, ipsum tempore perspiciatis iure reiciendis voluptas maxime?
      Alias possimus numquam sit temporibus voluptatibus. Dolores autem eos vero possimus iste dolorum tempora in illo ipsam, molestiae nesciunt soluta. Aliquam ut, non odit quidem sapiente iure nulla illum reiciendis.
      Officiis, veritatis. Unde, est! Dolorem voluptas harum animi quisquam dignissimos explicabo quae quaerat ullam soluta at iste esse iusto, assumenda pariatur repellat corrupti illo rerum! Molestias minima a omnis iure?
      Suscipit fugiat, hic eos ducimus quisquam sunt odio modi, at maiores cupiditate minus ipsam! Rerum nulla dolorem voluptates eveniet, soluta molestiae, aspernatur, suscipit quas dolore repellendus libero facere at culpa?
      Dolores repudiandae dolorem aliquid doloribus labore consequatur voluptatem, eos animi, dicta provident perferendis molestias nam ea consequuntur velit impedit excepturi fugit consectetur at id debitis voluptatibus natus tempore vitae! Nemo.
      Saepe doloribus repellat beatae error aliquid dicta amet id aperiam laboriosam deserunt vero nemo architecto, mollitia iste ducimus provident animi nihil maiores debitis sit! Officia dolorum quidem quibusdam repellendus nulla.
      Et sint qui cumque eveniet possimus facere ex? Vel cumque repudiandae accusamus nobis, soluta voluptate earum eos, expedita pariatur exercitationem omnis praesentium consequatur. Vero sed eveniet aperiam, beatae expedita blanditiis!
      Eius maxime ut, porro adipisci voluptas quis vero dignissimos nemo provident aperiam ullam excepturi officiis possimus dolorum consequuntur consequatur facilis est quo nam inventore mollitia autem sequi? Veritatis, dolor illum.
      At aspernatur consectetur laudantium incidunt, sit tempore ut, amet dicta, accusamus doloribus exercitationem. Voluptate hic quam, nisi tempore facilis, quae dicta porro eum et quia laudantium nulla aliquid, esse nihil!
      Delectus, nihil. Dolorem, laboriosam ullam et eaque velit maxime cupiditate, dignissimos commodi accusantium, sed aperiam est veniam. Eos odit fugiat architecto ipsam. Iste tempore dolorem est quo veniam dicta sapiente.
      Magni, vel. Qui nam natus possimus doloremque, odio deserunt debitis necessitatibus sequi modi ut dolore recusandae. Possimus ab eligendi est enim illum quis quam nesciunt tempora corporis, quidem ut doloribus.
      Enim molestiae sed aperiam provident maiores ea itaque totam minus? Minus perferendis architecto maiores, natus iste, incidunt vel cum alias quasi facere harum ipsum quo itaque esse, inventore consequuntur veniam.
      Velit architecto, ipsam sint laudantium earum asperiores dolorem ad accusamus corrupti ex commodi quasi eveniet aperiam. Molestiae deserunt incidunt voluptates, modi amet iure animi harum recusandae illo inventore quibusdam rerum!
      Dolorem quam cum non consequuntur facilis ipsam obcaecati provident, quisquam nobis nisi nam esse animi reprehenderit quas eveniet eligendi alias inventore odit. Quisquam nemo a, non officiis blanditiis provident itaque?
      Rem provident a eveniet id ex ducimus impedit vitae officia, esse eaque. Hic animi corrupti porro ullam labore quaerat quia, modi similique minus incidunt commodi aliquam distinctio eius quos debitis?
      At, rem! Eveniet earum at veritatis odit, quidem fuga non quibusdam consectetur laborum accusantium dolore consequatur doloremque aspernatur impedit optio obcaecati officiis ea praesentium. A laborum consectetur neque magnam quidem?
      Veniam, voluptas ea ducimus nemo quia accusantium perferendis sunt quidem tempore, est nulla atque eum similique necessitatibus reprehenderit error mollitia aliquid vero deserunt tenetur sint, adipisci excepturi eveniet? Quasi, cum?
      Cupiditate consequuntur provident repellat iusto eum corrupti ducimus possimus eaque, esse cum quas eius suscipit culpa! Nobis, error perferendis quibusdam tenetur sunt vitae expedita ut ipsa quisquam vero, iste provident.</p>
      <Modal  isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
      <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
      <h3>Modal Contacto</h3>
        <p>Hola este es el contenido de mi modal 3</p>
        <img src="https://placeimg.com/400/400/people" alt="Nature" />
      </Modal>

      <ModalPortal isOpen={isOpenModal} closeModal={closeModalPortal}>
      <h3>Modal Portal</h3>
        <p>Hola este es el contenido de mi modal Portal</p>
        <img src="https://placeimg.com/400/400/tech" alt="Nature" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
