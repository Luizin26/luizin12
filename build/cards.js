import { lista_objeto } from "./produtos.js";
class cards extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = "./style.css";
        shadow.append(style);
        this.build(shadow);
    }
    build(shadow) {
        lista_objeto.map((produtos) => {
            const div = document.createElement("div");
            div.className = "card_produtos";
            const h1 = document.createElement("h1");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");
            img.src = "./imagens/foto_camisa.jpeg";
            h1.innerText = produtos.getdescricao().toUpperCase();
            h3.innerText = produtos.getpreco().toString();
            div.append(h1, img, h3);
            shadow.append(div);
        });
    }
}
customElements.define("meus-cards", cards);
