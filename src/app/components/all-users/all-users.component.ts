import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users;
  constructor(
    private service: UserService,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.users = res.allUsers;
        console.log('this.users --> ', this.users);
      }
    });
  }

  removeUser(idUser) {
    this.service.removeUser(idUser).subscribe((res: any) => {
      if (res.statusCode === 200) {
        document.getElementById(idUser).remove();
        alert(' Usuario eliminado correctamente. ');
      } else {
        alert('Error al eliminar el usuario');
      }
    });
  }


}
