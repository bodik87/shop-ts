import React from "react";

const information = () => {
  return (
    <section className="flex flex-col gap-5">
      <article>
        <h1>Доставка і оплата</h1>
        <p className="mt-5">`1. Додайте товари в корзину та створіть замовлення (всі створені замовлення будуть доступні у вкладці Вашого акаунту, <span className="font-medium">якщо Ви зареєстровані</span>).</p>
        <p className="mt-3">{`2. Виберіть тип оплати і, за необхідності, дочекайтеся повідомлення від менеджера.`}</p>
        <p className="mt-3">{`3. Передача замовлення в службу доставки відбувається в день його створення до 12 години дня. В іншому випадку - наступного дня.`}</p>
      </article>

      <article>
        <h1>Про нас</h1>
        <p className="mt-5">{`1. Додайте товари в корзину та створіть замовлення (всі створені замовлення будуть доступні у вкладці Вашого акаунту, якщо Ви зареєстровані).`}</p>
        <p className="mt-3">{`2. Виберіть тип оплати і, за необхідності, дочекайтеся повідомлення від менеджера.`}</p>
        <p className="mt-3">{`3. Передача замовлення в службу доставки відбувається в день його створення до 12 години дня. В іншому випадку - наступного дня.`}</p>
      </article>

      <article>
        <h1>Контакти</h1>
        <p className="mt-5">{`Київ. Локація`}</p>
        <p className="mt-3">{`Телефон`}</p>
        <div className="flex flex-col gap-1.5 text-sm whitespace-nowrap">
          <a href="tel:+380660984114">{`+38(066) 098-41-14`}</a>
          <a href="tel:+380672785349">{`+38(067) 278-53-49`}</a>
        </div>
        <p className="mt-3">{`mail@mail.com`}</p>
        <p className="mt-3">{`Графік роботи`}</p>
      </article>
    </section>
  )
}

export default information