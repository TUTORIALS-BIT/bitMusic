import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: User;
  public url;
  public image: File;
  constructor(
    private service: UserService,
  ) {
    this.url = service.apiURL;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('dataUser'));
  }

  updateUser() {
    this.service.updateUser(this.user).subscribe((res: any) => {
      switch (res.statusCode) {
        case 500:
          alert('Error al conectarse con el servidor');
          break;
        case 400:
          alert('Error al actualizar el usuario');
          break;
        case 200:

          this.service.loadImage(this.image, this.user._id).subscribe( ( res: any) => {
            this.user.image = res.imagen;
            const image = this.url + '/printImage/' + this.user.image;
            document.getElementById('image').setAttribute('src', image);
            res.dataUser.image = this.user.image;
            localStorage.setItem('dataUser', JSON.stringify(res.dataUser));
          });
          alert('Usuario actualizado correctamente.');
          break;
        default:
          alert('Algo salió mal');
      }
    });
  }

  loadImage(image: any) {
    this.image = <File>image.target.files[0];
  }

}
