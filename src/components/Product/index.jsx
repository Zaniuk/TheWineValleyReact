import React from 'react'
import { useParams } from 'react-router-dom'
import './Product.scss'
import wineList from '../../utils/wine.json'
export default function Product() {
  const { id } = useParams()

  const product = wineList.find(item => item.id === Number(id))
  const { wineAuthor, wineTitle, wineType, wineStyle, grapeType, origin, price } = product
  return (
    <section className="container product-section">
      <div className="product-heading">
        <div className="image-wrapper">
          <img src="/img/wine-bottles/4fVjSKYtQcSx_mOBWZtDOg_pb_x600.png" alt="" />
        </div>
        <div className="info-wrapper">
          <div className="content">
            <h1>{wineAuthor}</h1>
            <h2>{wineTitle}</h2>
            <ul>
              <li><img src="/icons/wine-glass.svg" />{wineType}</li>
              <li><img src="/icons/wine-bottle.svg" />{wineStyle}</li>
              <li><img src="/icons/grapes.svg" />{grapeType}</li>
              <li><img src="/icons/flag.svg" />{origin}</li>
            </ul>
            <a href="#" className="btn-buy">{price}</a>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h1>About this wine</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ipsum ut? Necessitatibus pariatur corrupti exercitationem quia voluptas reprehenderit quidem modi amet deserunt repellendus. Similique, nam doloribus? Corrupti culpa obcaecati iusto!
          Similique saepe accusantium fuga sequi reiciendis quidem corporis porro deserunt vero, molestias laborum in recusandae ipsum neque voluptatibus expedita voluptate nostrum. Officiis rerum commodi in, tempore tenetur libero voluptate nam?
          Odio ipsum architecto voluptates rerum, voluptatibus consectetur corrupti error commodi praesentium dolorum quaerat officia libero fuga autem blanditiis nobis quam voluptatem. Inventore facilis fugiat ab eligendi sit ut obcaecati hic!
          Assumenda sint quod ullam dolore temporibus minima aut dignissimos nesciunt ea. Quisquam, ratione unde exercitationem aut asperiores sequi iure placeat amet, ea labore necessitatibus hic nulla illum eligendi assumenda veniam.
          Explicabo repudiandae possimus error et reiciendis. Officia necessitatibus quod molestiae odio ratione labore illum corporis voluptas porro exercitationem dolor minus optio deleniti vitae quia asperiores, similique earum illo omnis repellendus!
          Quaerat nemo amet perferendis vero libero tenetur quod ipsam laboriosam deleniti cupiditate hic reprehenderit ad nostrum, dolore enim beatae fugit eos at. Ut error dolores vitae necessitatibus ipsam vero sed.
          Vel, recusandae. Quas hic, unde nisi harum modi velit voluptate earum ullam totam voluptas laudantium! Eum illum a deserunt aperiam? Autem consequuntur est maxime, quisquam nemo veniam placeat repellendus. Nesciunt!
          Velit aut architecto facere maiores sit, molestiae corrupti a totam tempore sed nesciunt repellendus itaque laborum distinctio deleniti quae. Provident qui voluptatem dolore sed eius totam ad obcaecati asperiores quis.
          Sunt autem molestias rem voluptates explicabo consequuntur deserunt iusto, numquam ratione soluta, esse perspiciatis dignissimos commodi vitae quasi veniam quaerat! Exercitationem, eaque qui? Corrupti doloremque natus nulla cumque necessitatibus cupiditate.
          Dolor laboriosam voluptatum dolorem facilis recusandae maxime dignissimos vel ut quaerat cumque, repellat odio nihil porro alias nam fuga quam! Quisquam repudiandae dolores repellendus aperiam! Autem in pariatur sint cum!</p>
      </div>
    </section>
  )
}
