import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private keyCliente: string = "l:wishlist"; 
  private keySession: string = "l:key";
  constructor(public conexion: ApiService, private toastr: ToastrService) { }

  public eliminarFavoritos() {
    localStorage.removeItem(this.keyCliente);
  }

  public verFavoritos() {
    var articulos: any = localStorage.getItem(this.keyCliente) == null ? [] : JSON.parse(localStorage.getItem(this.keyCliente));
    return articulos;
  }

  public eliminarItemFavorito(id) {
    var articulos: any = localStorage.getItem(this.keyCliente) == null ? [] : JSON.parse(localStorage.getItem(this.keyCliente));

    var eliminarItemVector = function (lista) {
      var items = [];
      lista.map((e) => { items.push(e.data.idProducto); });
      var posicion = items.indexOf(id);
      if (posicion > -1) {
        lista.splice(posicion, 1);
      }
    }
    eliminarItemVector(articulos);
    localStorage.setItem(this.keyCliente, JSON.stringify(articulos));
    return this.verFavoritos();
  }

  public agregarItemFavorito(id, detalle) {

    var session: any = localStorage.getItem(this.keySession);

    if(session != null){
      var articulos: any = localStorage.getItem(this.keyCliente) == null ? [] : JSON.parse(localStorage.getItem(this.keyCliente));
    var flag = false;

    if (articulos.length > 0) {

      for (let art of articulos) {
        if (id == art.data.idProducto) {
          flag = true;
          break;
        }
      }

    }
    if (!flag) {
      articulos.push({ data: detalle });
      this.guardarItemFavorito(id);
    }
    localStorage.setItem(this.keyCliente, JSON.stringify(articulos));
    }else{
      this.toastr.info('Inicie sesión para agregar productos favoritos', 'Favoritos');
    }   

  }

  public guardarItemFavorito(id) {
    var data = {
      identificador: 1,
      idProducto: id
    }
    this.conexion.post("gestionFavorito", "", data).subscribe(
      (res: any) => {
        if(res){
          this.toastr.success('Producto agregado a favoritos', 'Favoritos');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
