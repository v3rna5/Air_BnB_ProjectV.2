import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
//   providers: [AlbumService]
// })
// export class AdminComponent implements OnInit {
//
//   constructor(private albumService: AlbumService) { }
//
//   ngOnInit() {
//   }
//
//   submitForm(title: string, artist: string, description: string) {
//     var newAlbum: Album = new Album(title, artist, description);
//     this.albumService.addAlbum(newAlbum);
//   }
//
// }
