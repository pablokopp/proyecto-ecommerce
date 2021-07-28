![miplacardtitulo](https://user-images.githubusercontent.com/84154261/127269013-a592507c-4202-4257-8487-10abd0b6ab6d.png)


## Presentación

Como proyecto final del **Curso de React Js** decidí crear **miPlacard**, una App dedicada a vender las cosas que tenemos en exceso dentro del armario.

La idea fue generar una **interfaz simple y atractiva**, con  **animaciones simpáticas** y que se genere una **fluidez** entre las distintas secciones de la App.
  
## Estilos
Para mi proyecto **decidí no usar Librerías** que me ayuden a hacer el estilo de la App. La intención detrás de esta decisión era no tener algo que condicione mi imaginación al momento de crear la interfaz.
### Colores Usados
![paleta](https://user-images.githubusercontent.com/84154261/127270035-ae0f2f4a-822e-46d4-bc47-d0c364fc9b1b.png)

## Vista General
![navegacion](https://user-images.githubusercontent.com/84154261/127273070-d314312e-33b8-4459-9186-c31ea2b9d769.gif)

## Navbar
En el Navbar se puede volver a la vista **Home**, ver todos los **productos**, seleccionar por **categoria**, y si hay productos en el Cart, **visualizar el CartWidget**

![navbar](https://user-images.githubusercontent.com/84154261/127273585-506ab73f-19d7-4254-b033-193beed25ca9.gif)

## Detail
En el Detail se puede ver la **descripción del producto**, el **precio**, se pueden **agregar el producto al Cart**, y **navegar al Cart**

![detail](https://user-images.githubusercontent.com/84154261/127273897-976b7a71-ea5d-4c75-b745-ef239c9601b4.gif)

## Cart
El CartWidget se activa cuando el usuario suma items al Cart. El contador del CartWidget tiene en cuenta la cantidad de productos agregados al Cart.

Una vez que hay productos, se muestra una pequeña lista con cada tipo, con su **cantidad** seleccionada y su **precio por unidad**. Además se muestra el **precio Total** de toda la compra, la opción para eliminar un producto no deseado, como también la de vaciar todo el Cart.
Si el Cart ya no tiene productos, se le da un **feedback al usuario** y se lo redirige hacia el Home

![cart](https://user-images.githubusercontent.com/84154261/127274467-1d8a9d1d-80c3-4ba6-9b8f-d6ee7808d27f.gif)

## Checkout
En el formulario de Checkout se requieren todos los campos para que se pueda hacer el Submit. El Checkout solo es navegable desde la vista del Cart

![checkout](https://user-images.githubusercontent.com/84154261/127274830-8f0cd01d-7d02-4a87-87a6-15240269c985.gif)

#### Pequeña muestra de como se ven las ordenes generadas en **Firebase**
![firebase](https://user-images.githubusercontent.com/84154261/127276104-fd6701cf-ca50-474c-8a5d-300d68ed97b1.gif)





