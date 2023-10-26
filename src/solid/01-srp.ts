(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {

    getProduct(id: number) {
      console.log("Producto", { id, name: "OLED Tv"});
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private email: string = 'email@mail.com';

    sendEmail(emailList: string[], template: string) {
      console.log("Enviando correo a los clientes", emailList, template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }

    notifyClients() {
      console.log("Enviando correo a los clientes");
    }

    
  }

  class CartBlock {
    private itemsInCart: Object[] = []
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }

    getItemsCart() {
      return this.itemsInCart
    }
  }

  const productBloc = new ProductBloc();
  const cartBlock = new CartBlock()
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBlock.onAddToCart(10);
})();
