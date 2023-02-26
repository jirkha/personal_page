import About from './about/page';
import Home from './home/page';
import Skills from './skills/page'
import styles from './page.module.css';


export default function Page() {
  return (
    <main className="min-h-full w-full bg-gradient-to-b from-black to-slate-500">
      <Home />
      <About />
      <Skills />
      <div className="m-9 my-28" id="projects">
        <section>
          <h2 className="text-6xl text-slate-100 tracking-wide">Projekty</h2>
          <p>NA OBSAHU SE PRACUJE</p>
        </section>
      </div>
      <div className="m-9 my-28" id="contact">
        <section>
          <h2 className="text-6xl text-slate-100 tracking-wide">Kontakt</h2>
          <p>NA OBSAHU SE PRACUJE</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste quidem aliquam, harum in aliquid magnam similique, dolor omnis maxime nesciunt sunt inventore ea libero enim quas soluta, dolore eum ratione id. Vero magni, minus architecto eum sed delectus, eveniet nisi quam ipsam voluptatem impedit! Architecto expedita, beatae dolor sint nisi, quibusdam explicabo cumque suscipit quidem accusantium laudantium praesentium laboriosam provident! Ex, cum eligendi, aspernatur, repudiandae dicta quam dignissimos voluptas ratione libero error aliquid. A suscipit omnis iure eum magni tempore non voluptatum, error, maxime cum, voluptatibus accusamus. Mollitia nemo porro, ad libero modi eum rerum. Eligendi odit suscipit eius harum assumenda fugiat et ratione ipsum saepe culpa, molestias cumque, laboriosam voluptate, unde dicta facere esse. Quibusdam eaque nesciunt repellat. Aspernatur soluta similique et saepe eligendi facilis tempore velit. Nisi, cupiditate, ea iure nemo repellendus tempore eaque voluptatem dolores impedit, maxime fugiat atque architecto necessitatibus? Exercitationem at error hic necessitatibus.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste quidem aliquam, harum in aliquid magnam similique, dolor omnis maxime nesciunt sunt inventore ea libero enim quas soluta, dolore eum ratione id. Vero magni, minus architecto eum sed delectus, eveniet nisi quam ipsam voluptatem impedit! Architecto expedita, beatae dolor sint nisi, quibusdam explicabo cumque suscipit quidem accusantium laudantium praesentium laboriosam provident! Ex, cum eligendi, aspernatur, repudiandae dicta quam dignissimos voluptas ratione libero error aliquid. A suscipit omnis iure eum magni tempore non voluptatum, error, maxime cum, voluptatibus accusamus. Mollitia nemo porro, ad libero modi eum rerum. Eligendi odit suscipit eius harum assumenda fugiat et ratione ipsum saepe culpa, molestias cumque, laboriosam voluptate, unde dicta facere esse. Quibusdam eaque nesciunt repellat. Aspernatur soluta similique et saepe eligendi facilis tempore velit. Nisi, cupiditate, ea iure nemo repellendus tempore eaque voluptatem dolores impedit, maxime fugiat atque architecto necessitatibus? Exercitationem at error hic necessitatibus.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi iste quidem aliquam, harum in aliquid magnam similique, dolor omnis maxime nesciunt sunt inventore ea libero enim quas soluta, dolore eum ratione id. Vero magni, minus architecto eum sed delectus, eveniet nisi quam ipsam voluptatem impedit! Architecto expedita, beatae dolor sint nisi, quibusdam explicabo cumque suscipit quidem accusantium laudantium praesentium laboriosam provident! Ex, cum eligendi, aspernatur, repudiandae dicta quam dignissimos voluptas ratione libero error aliquid. A suscipit omnis iure eum magni tempore non voluptatum, error, maxime cum, voluptatibus accusamus. Mollitia nemo porro, ad libero modi eum rerum. Eligendi odit suscipit eius harum assumenda fugiat et ratione ipsum saepe culpa, molestias cumque, laboriosam voluptate, unde dicta facere esse. Quibusdam eaque nesciunt repellat. Aspernatur soluta similique et saepe eligendi facilis tempore velit. Nisi, cupiditate, ea iure nemo repellendus tempore eaque voluptatem dolores impedit, maxime fugiat atque architecto necessitatibus? Exercitationem at error hic necessitatibus.</p>
        </section>
      </div>
    </main>
  );
}
