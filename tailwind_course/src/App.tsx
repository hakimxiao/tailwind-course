function App() {
  return (
    <div className="max-w-screen bg-slate-100">
      {/* <Container /> */}
      <div className="container mx-auto bg-slate-700 text-slate-900 flex items-center justify-center text-3xl">
        CONTAINER
      </div>

      <div className="mx-auto my-12 w-[50%]  text-2xl">
        {/* <Typography /> */}
        <h4 className="text-blue-300 font-bold">Font Family :</h4>
        <div className="font-sans">font sans</div>
        <div className="font-serif">font serif</div>
        <div className="font-mono">font mono</div>
        <div className="font-tekinttel">font custom</div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Font Size :</h4>
        <div className="font-sans text-xs">text xs</div>
        <div className="font-serif text-lg">text lg</div>
        <div className="font-tekinttel text-4xl">text 4xl</div>
        <div className="font-tekinttel text-[12px]">text custom</div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Line Height</h4>
        <div className="text-base/3 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur
          dolorum error illum! Quasi quidem cum perspiciatis quam iste aut eius,
          est vitae debitis numquam velit asperiores quisquam eligendi sequi
          porro repellat vero quia nemo, voluptatibus, placeat iusto quibusdam.
          Quia aut libero enim magni, fugiat illo repellendus delectus eaque nam
          incidunt repellat ex beatae veritatis perferendis fugit magnam
          adipisci? Totam earum ipsum minus nulla alias. Quas voluptates
          doloribus architecto modi odit consequatur quos repellat aliquam et
          obcaecati! Mollitia nobis eum labore pariatur reprehenderit, quod
          beatae porro dolor quis tempora omnis, optio nam eaque vitae est? Eius
          similique saepe aperiam eum, quaerat ipsum non eaque, nihil
          repudiandae voluptate labore rem, porro consequatur cum cupiditate
          quisquam quis officia quam consequuntur. Beatae fugiat nobis magni
          officiis rerum a possimus illum quae ab quibusdam. Aspernatur est quos
          debitis ab quia unde alias laudantium iusto tenetur, delectus eaqu
        </div>
        <div className="text-base/8 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur
          dolorum error illum! Quasi quidem cum perspiciatis quam iste aut eius,
          est vitae debitis numquam velit asperiores quisquam eligendi sequi
          porro repellat vero quia nemo, voluptatibus, placeat iusto quibusdam.
          Quia aut libero enim magni, fugiat illo repellendus delectus eaque nam
          incidunt repellat ex beatae veritatis perferendis fugit magnam
          adipisci? Totam earum ipsum minus nulla alias. Quas voluptates
          doloribus architecto modi odit consequatur quos repellat aliquam et
          obcaecati! Mollitia nobis eum labore pariatur reprehenderit, quod
          beatae porro dolor quis tempora omnis, optio nam eaque vitae est? Eius
          similique saepe aperiam eum, quaerat ipsum non eaque, nihil
          repudiandae voluptate labore rem, porro consequatur cum cupiditate
          quisquam quis officia quam consequuntur. Beatae fugiat nobis magni
          officiis rerum a possimus illum quae ab quibusdam. Aspernatur est quos
          debitis ab quia unde alias laudantium iusto tenetur, delectus eaqu
        </div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Font Weight :</h4>
        <div className="font-sans font-bold">font bold</div>
        <div className="font-serif font-extrabold">font extra bold</div>
        <div className="font-mono font-light">font light</div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Font Style :</h4>
        <div className="font-sans italic">italic</div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Text Decoration :</h4>
        <div className="font-sans underline">underline</div>
        <div className="font-sans overline text-red-300 decoration-red-300">
          overline
        </div>
        <div className="font-sans line-through decoration-amber-500">
          Heline through
        </div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Letter Spacing :</h4>
        <div className="font-sans tracking-tighter">tracking-widest</div>
        <div className="font-sans tracking-wide">tracking-widest</div>
        <div className="font-sans tracking-widest">tracking-widest</div>
        {/* =================================================================================== */}
        <h4 className="text-blue-300 font-bold">Text Align :</h4>
        <div className="font-sans text-left">text-left</div>
        <div className="font-sans text-center">text-center</div>
        <div className="font-sans text-right">text-right</div>
        <div className="font-sans text-justify">text-justify</div>
      </div>
    </div>
  );
}

export default App;
